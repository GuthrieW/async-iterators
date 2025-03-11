/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|MDN Documentation Array.prototype.map}
 * Optionally, you can batch your iterations to more efficiently await blocking iteratee function calls using the batchIterations and batchSize attributes on the options parameter.
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<V>} iteratee
 * @param {{ batchIterations: boolean; batchSize: number }} [options]
 * @returns {Promise<V[]>}
 * @example
 * const array = [1, 2, 3];
 * const doubledArray = await map(array, async (value) => value * 2);
 */
export default async function map<T, V>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<V>,
  options?: { batchIterations: boolean; batchSize: number }
): Promise<V[]> {
  if (!Array.isArray(array) || !array?.length) return [];

  if (options?.batchIterations) {
    return await mapParallel(array, iteratee, options.batchSize);
  } else {
    return await mapSerial(array, iteratee);
  }
}

async function mapParallel<T, V>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<V>,
  batchSize: number
): Promise<V[]> {
  const arrayWithIndexKeys = array.map((item, i) => {
    return {
      task: item,
      index: i,
    };
  });

  const effectiveMaxBatchSize =
    batchSize > array.length ? array.length : batchSize;

  const results: V[] = [];
  await Promise.all(
    Array(effectiveMaxBatchSize)
      .fill(undefined)
      .map(async () => {
        const resultsWithIndex = await takeAndCompleteFromQueueUntilDone(
          arrayWithIndexKeys,
          iteratee
        );

        resultsWithIndex.forEach((result) => {
          results[result.index] = result.result;
        });
      })
  );

  return results;
}

/**
 * take and complete tasks from a queue until that queue is empty.
 * @param {{ task: T; index: number }[]} array
 * @param {(value: T, index: number) => Promise<V>} iteratee
 */
async function takeAndCompleteFromQueueUntilDone<T, V>(
  array: { task: T; index: number }[],
  iteratee: (value: T, index: number) => Promise<V>
): Promise<{ result: V; index: number }[]> {
  const item = array.shift();
  if (!item) {
    return [];
  }

  const completedTask = await iteratee(item.task, item.index);
  const followingCompletedTasks = await takeAndCompleteFromQueueUntilDone<T, V>(
    array,
    iteratee
  );

  return followingCompletedTasks.concat({
    result: completedTask,
    index: item.index,
  });
}

async function mapSerial<T, V>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<V>
): Promise<V[]> {
  const results: V[] = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    results.push(await iteratee(element, index));
  }
  return results;
}

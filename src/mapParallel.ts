/**
 * take and complete tasks from a queue until that queue is empty.
 * @param {{ task: T; index: number }[]} array
 * @param {(val: T, index?: number) => Promise<V>} iteratee
 */
async function takeAndCompleteFromQueueUntilDone<T, V>(
  array: { task: T; index: number }[],
  iteratee: (val: T, index: number) => Promise<V>
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

/**
 * iterate over the passed in array in parallel, running the iteratee on each element.
 * @param {T[]} array
 * @param {(val: T, index?: number) => Promise<V>} iteratee
 * @param {number} [maxParallelBatchSize]
 */
export default async function mapParallel<T, V>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<V>,
  maxParallelBatchSize?: number
): Promise<V[]> {
  if (!Array.isArray(array) || !array?.length) return [];

  const arrayWithIndexKeys = array.map((item, i) => {
    return {
      task: item,
      index: i,
    };
  });
  let effectiveMaxBatchSize = maxParallelBatchSize;
  if (!effectiveMaxBatchSize || effectiveMaxBatchSize > array.length) {
    effectiveMaxBatchSize = array.length;
  }
  const coolEmptyArray = Array(effectiveMaxBatchSize).fill(undefined);

  const results: V[] = [];
  await Promise.all(
    coolEmptyArray.map(async () => {
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

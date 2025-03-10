"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mapParallel;
/**
 * take and complete tasks from a queue until that queue is empty.
 * @param {{ task: T; index: number }[]} array
 * @param {(val: T, index?: number) => Promise<V>} iterator
 */
async function takeAndCompleteFromQueueUntilDone(array, iterator) {
    const item = array.shift();
    if (!item) {
        return [];
    }
    const completedTask = await iterator(item.task, item.index);
    const followingCompletedTasks = await takeAndCompleteFromQueueUntilDone(array, iterator);
    return followingCompletedTasks.concat({
        result: completedTask,
        index: item.index,
    });
}
/**
 * iterate over the passed in array in parallel, running the iterator on each element.
 * @param {T[]} array
 * @param {(val: T, index?: number) => Promise<V>} iterator
 * @param {number} [maxParallelBatchSize]
 */
async function mapParallel(array, iterator, maxParallelBatchSize) {
    if (!Array.isArray(array) || !array?.length)
        return [];
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
    let results = [];
    await Promise.all(coolEmptyArray.map(async () => {
        const resultsWithIndex = await takeAndCompleteFromQueueUntilDone(arrayWithIndexKeys, iterator);
        resultsWithIndex.forEach((result) => {
            results[result.index] = result.result;
        });
    }));
    return results;
}

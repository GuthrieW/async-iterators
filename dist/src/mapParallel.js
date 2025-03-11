"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = mapParallel;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|MDN Documentation Array.prototype.map}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(val: T, index?: number) => Promise<V>} iteratee
 * @param {number} [maxParallelBatchSize=10]
 * @example
 * const array = [1, 2, 3];
 * const doubledArray = await mapParellel(array, async (value) => value * 2);
 */
async function mapParallel(array, iteratee, maxParallelBatchSize = 10) {
    if (!Array.isArray(array) || !array?.length)
        return [];
    const arrayWithIndexKeys = array.map((item, i) => {
        return {
            task: item,
            index: i,
        };
    });
    const effectiveMaxBatchSize = maxParallelBatchSize > array.length ? array.length : maxParallelBatchSize;
    const results = [];
    await Promise.all(Array(effectiveMaxBatchSize)
        .fill(undefined)
        .map(async () => {
        const resultsWithIndex = await takeAndCompleteFromQueueUntilDone(arrayWithIndexKeys, iteratee);
        resultsWithIndex.forEach((result) => {
            results[result.index] = result.result;
        });
    }));
    return results;
}
/**
 * take and complete tasks from a queue until that queue is empty.
 * @param {{ task: T; index: number }[]} array
 * @param {(value: T, index: number) => Promise<V>} iteratee
 */
async function takeAndCompleteFromQueueUntilDone(array, iteratee) {
    const item = array.shift();
    if (!item) {
        return [];
    }
    const completedTask = await iteratee(item.task, item.index);
    const followingCompletedTasks = await takeAndCompleteFromQueueUntilDone(array, iteratee);
    return followingCompletedTasks.concat({
        result: completedTask,
        index: item.index,
    });
}

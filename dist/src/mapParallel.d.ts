/**
 * iterate over the passed in array in parallel, running the iteratee on each element.
 * @param {T[]} array
 * @param {(val: T, index?: number) => Promise<V>} iteratee
 * @param {number} [maxParallelBatchSize]
 */
export default function mapParallel<T, V>(array: T[], iteratee: (value: T, index: number) => Promise<V>, maxParallelBatchSize?: number): Promise<V[]>;

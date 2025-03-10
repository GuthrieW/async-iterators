/**
 * iterate over the passed in array in parallel, running the iterator on each element.
 * @param {T[]} array
 * @param {(val: T, index?: number) => Promise<V>} iterator
 * @param {number} [maxParallelBatchSize]
 */
export default function mapParallel<T, V>(array: T[], iterator: (value: T, index: number) => Promise<V>, maxParallelBatchSize?: number): Promise<V[]>;

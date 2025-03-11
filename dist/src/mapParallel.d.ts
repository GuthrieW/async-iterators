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
export default function mapParallel<T, V>(array: T[], iteratee: (value: T, index: number) => Promise<V>, maxParallelBatchSize?: number): Promise<V[]>;

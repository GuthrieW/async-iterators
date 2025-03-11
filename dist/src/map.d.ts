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
export default function map<T, V>(array: T[], iteratee: (value: T, index: number) => Promise<V>, options?: {
    batchIterations: boolean;
    batchSize: number;
}): Promise<V[]>;

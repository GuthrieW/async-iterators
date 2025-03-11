/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex|MDN Documentation Array.prototype.findLastIndex}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<boolean>} iteratee
 * @returns {Promise<number>}
 * @example
 * const array = [1, 2, 3];
 * const foundValueIndex = await findLastIndex(array, async (value) => value === 3);
 */
export default function findLastIndex<T>(array: T[], iteratee: (value: T, index: number) => Promise<boolean>): Promise<number>;

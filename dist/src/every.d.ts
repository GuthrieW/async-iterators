/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every|MDN Documentation Array.prototype.every}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<boolean>} iteratee
 * @returns {Promise<boolean>}
 * @example
 * const array = [3, 3, 3];
 * const allThree = await every(array, async (value) => value === 3);
 */
export default function every<T>(array: T[], iteratee: (value: T, index: number) => Promise<boolean>): Promise<boolean>;

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter|MDN Documentation Array.prototype.filter}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<boolean>} iteratee
 * @returns {Promise<T[]>}
 * @example
 * const array = [1, 2, 3];
 * const onlyThree = await filter(array, async (value) => value === 3);
 */
export default function filter<T>(array: T[], iteratee: (value: T, index: number) => Promise<boolean>): Promise<T[]>;

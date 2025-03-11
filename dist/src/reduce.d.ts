/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce|MDN Documentation Array.prototype.reduce}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(accumulator: V, currentValue: T) => Promise<V>} iteratee
 * @param {V} initialValue
 * @returns {Promise<V>}
 * @example
 * const array = [1, 2, 3];
 * const sum = await reduce(array, async (accumulator, current) => accumulator + currect, 0);
 */
export default function reduce<T, V>(array: T[], iteratee: (accumulator: V, currentValue: T) => Promise<V>, initialValue: V): Promise<V>;

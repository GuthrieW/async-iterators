/**
 * @name ReduceIterateeFunction
 * @function
 * @param {V} accumulator
 * @param {T} currentValue
 * @returns {Promise<V>}
 * @private
 */
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce|MDN Documentation Array.prototype.reduce}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {ReduceIterateeFunction} iteratee
 * @param {V} initialValue
 * @returns {Promise<V>} (accumulator: V, currentValue: T) => Promise<V>
 * @example
 * const array = [1, 2, 3];
 * const sum = await reduce(array, async (accumulator, current) => accumulator + currect, 0);
 */
export default function reduce<T, V>(array: T[], iteratee: (accumulator: V, currentValue: T) => Promise<V>, initialValue: V): Promise<V>;

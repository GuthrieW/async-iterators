/**
 * @name ReduceRightIterateeFunction
 * @function
 * @param {V} accumulator
 * @param {T} currentValue
 * @returns {Promise<V>}
 * @private
 */

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight|MDN Documentation Array.prototype.reduceRight}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {ReduceRightIterateeFunction} iteratee (accumulator: V, currentValue: T) => Promise<V>
 * @param {V} initialValue
 * @returns {Promise<V>}
 * @example
 * const array = [1, 2, 3];
 * const sum = await reduceRight(array, async (accumulator, current) => accumulator + currect, 0);
 */
export default async function reduceRight<T, V>(
  array: T[],
  iteratee: (accumulator: V, currentValue: T) => Promise<V>,
  initialValue: V
): Promise<V> {
  if (!Array.isArray(array) || !array?.length) return initialValue;

  let result = initialValue;
  for (let index = array.length - 1; index >= 0; index--) {
    result = await iteratee(result, array[index]);
  }

  return result;
}

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
export default async function reduce<T, V>(
  array: T[],
  iteratee: (accumulator: V, currentValue: T) => Promise<V>,
  initialValue: V
): Promise<V> {
  if (!Array.isArray(array) || !array?.length) return initialValue;

  let result = initialValue;
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    result = await iteratee(result, element);
  }

  return result;
}

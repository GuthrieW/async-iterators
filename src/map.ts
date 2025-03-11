/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map|MDN Documentation Array.prototype.map}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<V>} iteratee
 * @returns {Promise<V[]>}
 * @example
 * const array = [1, 2, 3];
 * const doubledArray = await map(array, async (value) => value * 2);
 */
export default async function map<T, V>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<V>
): Promise<V[]> {
  if (!Array.isArray(array) || !array?.length) return [];

  const results: V[] = [];
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    results.push(await iteratee(element, index));
  }
  return results;
}

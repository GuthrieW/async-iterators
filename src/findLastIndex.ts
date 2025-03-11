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
export default async function findLastIndex<T>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<boolean>
): Promise<number> {
  if (!Array.isArray(array) || !array?.length) return -1;

  for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    const result = await iteratee(element, index);
    if (result) {
      return index;
    }
  }

  return -1;
}

/**
 * @name FindIndexIterateeFunction
 * @function
 * @param {T} value
 * @param {number} index
 * @returns {Promise<boolean>}
 * @private
 */

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex|MDN Documentation Array.prototype.findIndex}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {FindIndexIterateeFunction} iteratee (value: T, index: number) => Promise<boolean>
 * @returns {Promise<number>}
 * @example
 * const array = [1, 2, 3];
 * const foundValueIndex = await findIndex(array, async (value) => value === 3);
 */
export default async function findIndex<T>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<boolean>
): Promise<number> {
  if (!Array.isArray(array) || !array?.length) return -1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = await iteratee(element, index);
    if (result) {
      return index;
    }
  }

  return -1;
}

/**
 * @name FindIterateeFunction
 * @function
 * @param {T} value
 * @param {number} index
 * @returns {Promise<boolean>}
 * @private
 */

/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find|MDN Documentation Array.prototype.find}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {FindIterateeFunction} iteratee (value: T, index: number) => Promise<boolean>
 * @returns {Promise<T | undefined>}
 * @example
 * const array = [1, 2, 3];
 * const foundValue = await find(array, async (value) => value === 3);
 */
export default async function find<T>(
  array: T[],
  iteratee: (value: T, index: number) => Promise<boolean>
): Promise<T | undefined> {
  if (!Array.isArray(array) || !array?.length) return undefined;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    const result = await iteratee(element, index);
    if (result) {
      return element;
    }
  }
  return undefined;
}

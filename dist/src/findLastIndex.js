"use strict";
/**
 * @name FindLastIndexIterateeFunction
 * @function
 * @param {T} value
 * @param {number} index
 * @returns {Promise<boolean>}
 * @private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = findLastIndex;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLastIndex|MDN Documentation Array.prototype.findLastIndex}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {FindLastIndexIterateeFunction} iteratee (value: T, index: number) => Promise<boolean>
 * @returns {Promise<number>}
 * @example
 * const array = [1, 2, 3];
 * const foundValueIndex = await findLastIndex(array, async (value) => value === 3);
 */
async function findLastIndex(array, iteratee) {
    if (!Array.isArray(array) || !array?.length)
        return -1;
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        const result = await iteratee(element, index);
        if (result) {
            return index;
        }
    }
    return -1;
}

"use strict";
/**
 * @name FindLastIterateeFunction
 * @function
 * @param {T} value
 * @param {number} index
 * @returns {Promise<boolean>}
 * @private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = findLast;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findLast|MDN Documentation Array.prototype.findLast}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {FindLastIterateeFunction} iteratee (value: T, index: number) => Promise<boolean>
 * @returns {Promise<T | undefined>}
 * @example
 * const array = [1, 2, 3];
 * const foundValue = await findLast(array, async (value) => value === 3);
 */
async function findLast(array, iteratee) {
    if (!Array.isArray(array) || !array?.length)
        return undefined;
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index];
        const result = await iteratee(element, index);
        if (result) {
            return element;
        }
    }
    return undefined;
}

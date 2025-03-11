"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = some;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some|MDN Documentation Array.prototype.some}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<boolean>} iteratee
 * @returns {Promise<boolean>}
 * @example
 * const array = [1, 2, 3];
 * const hasThree = await some(array, async (value) => value === 3);
 */
async function some(array, iteratee) {
    if (!Array.isArray(array) || !array?.length)
        return false;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = await iteratee(element, index);
        if (result) {
            return true;
        }
    }
    return false;
}

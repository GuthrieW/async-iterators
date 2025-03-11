"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = findIndex;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex|MDN Documentation Array.prototype.findIndex}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {(value: T, index: number) => Promise<boolean>} iteratee
 * @returns {Promise<number>}
 * @example
 * const array = [1, 2, 3];
 * const foundValueIndex = await findIndex(array, async (value) => value === 3);
 */
async function findIndex(array, iteratee) {
    if (!Array.isArray(array) || !array?.length)
        return -1;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = await iteratee(element, index);
        if (result) {
            return index;
        }
    }
    return -1;
}

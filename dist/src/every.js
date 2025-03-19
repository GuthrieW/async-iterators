"use strict";
/**
 * @name EveryIterateeFunction
 * @function
 * @param {T} value
 * @param {number} index
 * @returns {Promise<boolean>}
 * @private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = every;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every|MDN Documentation Array.prototype.every}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {EveryIterateeFunction} iteratee (value: T, index: number) => Promise<boolean>
 * @returns {Promise<boolean>}
 * @example
 * const array = [3, 3, 3];
 * const allThree = await every(array, async (value) => value === 3);
 */
async function every(array, iteratee) {
    if (!Array.isArray(array) || !array?.length)
        return false;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = await iteratee(element, index);
        if (!result) {
            return false;
        }
    }
    return true;
}

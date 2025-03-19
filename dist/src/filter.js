"use strict";
/**
 * @name FilterIterateeFunction
 * @function
 * @param {T} value
 * @param {number} index
 * @returns {Promise<boolean>}
 * @private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = filter;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter|MDN Documentation Array.prototype.filter}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {FilterIterateeFunction} iteratee (value: T, index: number) => Promise<boolean>
 * @returns {Promise<T[]>}
 * @example
 * const array = [1, 2, 3];
 * const onlyThree = await filter(array, async (value) => value === 3);
 */
async function filter(array, iteratee) {
    if (!Array.isArray(array) || !array?.length)
        return [];
    const results = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = await iteratee(element, index);
        if (result) {
            results.push(element);
        }
    }
    return results;
}

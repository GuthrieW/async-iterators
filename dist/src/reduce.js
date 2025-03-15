"use strict";
/**
 * @name ReduceIterateeFunction
 * @function
 * @param {V} accumulator
 * @param {T} currentValue
 * @returns {Promise<V>}
 * @private
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reduce;
/**
 * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce|MDN Documentation Array.prototype.reduce}
 *
 * @static
 * @since 1.0.0
 * @param {T[]} array
 * @param {ReduceIterateeFunction} iteratee
 * @param {V} initialValue
 * @returns {Promise<V>} (accumulator: V, currentValue: T) => Promise<V>
 * @example
 * const array = [1, 2, 3];
 * const sum = await reduce(array, async (accumulator, current) => accumulator + currect, 0);
 */
async function reduce(array, iteratee, initialValue) {
    if (!Array.isArray(array) || !array?.length)
        return initialValue;
    let result = initialValue;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result = await iteratee(result, element);
    }
    return result;
}

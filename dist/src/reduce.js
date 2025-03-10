"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reduce;
async function reduce(array, iterator, initialValue) {
    if (!Array.isArray(array) || !array?.length)
        return initialValue;
    let result = initialValue;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        result = await iterator(result, element);
    }
    return result;
}

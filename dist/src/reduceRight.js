"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reduceRight;
async function reduceRight(array, iterator, initialValue) {
    if (!Array.isArray(array) || !array?.length)
        return initialValue;
    let result = initialValue;
    for (let index = array.length - 1; index >= 0; index--) {
        result = await iterator(result, array[index]);
    }
    return result;
}

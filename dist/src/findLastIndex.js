"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = findLastIndex;
async function findLastIndex(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return -1;
    for (let index = array.length; index >= 0; index--) {
        const element = array[index];
        const result = await iterator(element, index);
        if (result) {
            return index;
        }
    }
    return -1;
}

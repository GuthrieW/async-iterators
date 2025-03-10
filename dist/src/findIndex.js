"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = findIndex;
async function findIndex(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return -1;
    for (let index = 0; index < array.length; index++) {
        const element = array.at(index);
        const result = await iterator(element, index);
        if (result) {
            return index;
        }
    }
    return -1;
}

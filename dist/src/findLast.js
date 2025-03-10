"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = findLast;
async function findLast(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return undefined;
    for (let index = array.length; index >= 0; index--) {
        const element = array.at(index);
        const result = await iterator(element, index);
        if (result) {
            return element;
        }
    }
    return undefined;
}

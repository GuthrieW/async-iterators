"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = find;
async function find(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return undefined;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = await iterator(element, index);
        if (result) {
            return element;
        }
    }
    return undefined;
}

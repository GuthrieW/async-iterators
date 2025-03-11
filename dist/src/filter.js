"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = filter;
async function filter(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return [];
    const results = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const result = await iterator(element, index);
        if (result) {
            results.push(element);
        }
    }
    return results;
}

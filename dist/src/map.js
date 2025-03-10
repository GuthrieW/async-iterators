"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = map;
async function map(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return [];
    const results = [];
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        results.push(await iterator(element, index));
    }
    return results;
}

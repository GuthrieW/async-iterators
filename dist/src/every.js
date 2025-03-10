"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = every;
async function every(array, iterator) {
    if (!Array.isArray(array) || !array?.length)
        return false;
    for (let index = 0; index < array.length; index++) {
        const element = array.at(index);
        const result = await iterator(element, index);
        if (!result) {
            return false;
        }
    }
    return true;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseBlock = void 0;
class BaseBlock {
    constructor({ items = [], metadata, accessor }) {
        this.items = [];
        this.items = items;
        this.metadata = metadata;
        this.accessor = accessor;
    }
}
exports.BaseBlock = BaseBlock;
//# sourceMappingURL=BaseBlock.js.map
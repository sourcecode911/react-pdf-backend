"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderBlock = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const RenderBlock = ({ schema }) => {
    return (jsx_runtime_1.jsx(schema.Component, Object.assign({}, schema.metadata, { children: schema.items.map((item, index) => (jsx_runtime_1.jsx(exports.RenderBlock, { schema: item }, item.identifier + index))) }), void 0));
};
exports.RenderBlock = RenderBlock;
//# sourceMappingURL=RenderBlock.js.map
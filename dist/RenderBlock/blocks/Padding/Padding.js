"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Padding = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Identifier_enum_1 = require("../../Identifier.enum");
const BaseBlock_1 = require("../BaseBlock");
class Padding extends BaseBlock_1.BaseBlock {
    constructor() {
        super(...arguments);
        this.identifier = Identifier_enum_1.Identifier.Padding;
        this.Component = ({ children, left, right, top, bottom }) => {
            const style = react_1.useMemo(() => ({
                paddingLeft: left,
                paddingRight: right,
                paddingBottom: bottom,
                paddingTop: top
            }), [left, right, top, bottom]);
            return jsx_runtime_1.jsx("div", Object.assign({ style: style }, { children: children }), void 0);
        };
    }
}
exports.Padding = Padding;
//# sourceMappingURL=Padding.js.map
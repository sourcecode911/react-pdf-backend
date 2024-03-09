"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockFragment = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Identifier_enum_1 = require("../../Identifier.enum");
const BaseBlock_1 = require("../BaseBlock");
class BlockFragment extends BaseBlock_1.BaseBlock {
    constructor() {
        super(...arguments);
        this.identifier = Identifier_enum_1.Identifier.BlockFragment;
        this.Component = ({ children }) => {
            return jsx_runtime_1.jsx(react_1.Fragment, { children: children }, void 0);
        };
    }
}
exports.BlockFragment = BlockFragment;
//# sourceMappingURL=BlockFragment.js.map
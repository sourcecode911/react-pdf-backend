"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const DataProvider_1 = require("../../../DataProvider");
const Identifier_enum_1 = require("../../Identifier.enum");
const Text_1 = require("../../../Text");
const BaseBlock_1 = require("../BaseBlock");
class Title extends BaseBlock_1.BaseBlock {
    constructor() {
        super(...arguments);
        this.identifier = Identifier_enum_1.Identifier.Title;
        this.Component = ({ theme, color }) => {
            const value = DataProvider_1.useDataValue(this.accessor);
            if (value === undefined) {
                return null;
            }
            return (jsx_runtime_1.jsx(Text_1.Text, Object.assign({ theme: theme, color: color }, { children: value }), void 0));
        };
    }
}
exports.Title = Title;
//# sourceMappingURL=Title.js.map
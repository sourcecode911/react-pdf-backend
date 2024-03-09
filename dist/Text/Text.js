"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Text = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const classnames_1 = __importDefault(require("classnames"));
const Text_colors_module_scss_1 = __importDefault(require("./Text.colors.module.scss"));
const Text_themes_module_scss_1 = __importDefault(require("./Text.themes.module.scss"));
const Text = ({ className, theme = 'h1', color, children }) => (jsx_runtime_1.jsx("span", Object.assign({ className: classnames_1.default(Text_themes_module_scss_1.default[theme], color && Text_colors_module_scss_1.default[color], className) }, { children: children }), void 0));
exports.Text = Text;
//# sourceMappingURL=Text.js.map
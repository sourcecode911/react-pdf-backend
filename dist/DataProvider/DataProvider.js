"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataProvider = exports.useDataValue = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const dataContext = react_1.default.createContext({
    data: {}
});
const useDataContext = () => react_1.useContext(dataContext);
const useDataValue = (accessor) => {
    const { data } = useDataContext();
    if (!accessor) {
        return;
    }
    return data[accessor];
};
exports.useDataValue = useDataValue;
const DataProvider = ({ children, data }) => {
    return jsx_runtime_1.jsx(dataContext.Provider, Object.assign({ value: { data } }, { children: children }), void 0);
};
exports.DataProvider = DataProvider;
//# sourceMappingURL=DataProvider.js.map
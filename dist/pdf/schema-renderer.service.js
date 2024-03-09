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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemaRendererService = void 0;
const common_1 = require("@nestjs/common");
const ent = __importStar(require("ent"));
const puppeteer_1 = __importDefault(require("puppeteer"));
const react_1 = __importDefault(require("react"));
const ReactDOMServer = __importStar(require("react-dom/server"));
const DataProvider_1 = require("../DataProvider");
const RenderBlock_1 = require("../RenderBlock");
let SchemaRendererService = class SchemaRendererService {
    constructor() {
        this.wrapWithTemplate = (body) => {
            return `<!DOCTYPE html><html><head></head><body>${ent.decode(body)}</body></html>`;
        };
        this.convertHTMLToPDF = async (html) => {
            if (typeof html !== 'string' || !html) {
                throw new common_1.InternalServerErrorException('Invalid Argument: content for the PDF is not a string.');
            }
            let browser;
            try {
                browser = await puppeteer_1.default.launch();
            }
            catch (e) {
                throw new common_1.InternalServerErrorException('Unable to launch PDF Renderer');
            }
            let page;
            try {
                page = await browser.newPage();
            }
            catch (e) {
                throw new common_1.InternalServerErrorException('Unable to create page for PDF');
            }
            try {
                await page.goto(`data:text/html;base64,${Buffer.from(html).toString('base64')}`, {
                    waitUntil: 'networkidle0'
                });
            }
            catch (e) {
                throw new common_1.InternalServerErrorException('Unable render the  on page');
            }
            let result;
            try {
                result = await page.pdf({
                    format: 'a4',
                    printBackground: true
                });
            }
            catch (e) {
                throw new common_1.InternalServerErrorException('Unable render page into PDF');
            }
            try {
                await browser.close();
            }
            catch (e) {
                throw new common_1.InternalServerErrorException('Unable close PDF renderer');
            }
            return result;
        };
        this.renderHTML = (schema, data) => {
            return this.wrapWithTemplate(ReactDOMServer.renderToStaticMarkup(react_1.default.createElement(DataProvider_1.DataProvider, { data }, react_1.default.createElement(RenderBlock_1.RenderBlock, { schema }, null))));
        };
        this.renderPDF = async (schema, data) => {
            return await this.convertHTMLToPDF(this.renderHTML(schema, data));
        };
    }
};
SchemaRendererService = __decorate([
    common_1.Injectable()
], SchemaRendererService);
exports.SchemaRendererService = SchemaRendererService;
//# sourceMappingURL=schema-renderer.service.js.map
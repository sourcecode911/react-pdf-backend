"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfModule = void 0;
const common_1 = require("@nestjs/common");
const pdf_controller_1 = require("./pdf.controller");
const pdf_service_1 = require("./pdf.service");
const schema_renderer_service_1 = require("./schema-renderer.service");
let PdfModule = class PdfModule {
};
PdfModule = __decorate([
    common_1.Module({
        controllers: [pdf_controller_1.PdfController],
        providers: [pdf_service_1.PdfService, schema_renderer_service_1.SchemaRendererService]
    })
], PdfModule);
exports.PdfModule = PdfModule;
//# sourceMappingURL=pdf.module.js.map
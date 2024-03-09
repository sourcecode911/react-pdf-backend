"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfService = void 0;
const common_1 = require("@nestjs/common");
const stream_1 = require("stream");
const schema_renderer_service_1 = require("./schema-renderer.service");
const mapping_1 = require("../RenderBlock/mapping");
let PdfService = class PdfService {
    constructor(schemaRendererService) {
        this.schemaRendererService = schemaRendererService;
    }
    create(createPdfDto) {
        let schema;
        try {
            schema = mapping_1.deserializeSchema(createPdfDto.schema);
        }
        catch (e) {
            throw new common_1.UnprocessableEntityException(e === null || e === void 0 ? void 0 : e.message);
        }
        return this.schemaRendererService.renderPDF(schema, createPdfDto.data);
    }
    getReadableStream(buffer) {
        const stream = new stream_1.Readable();
        stream.push(buffer);
        stream.push(null);
        return stream;
    }
};
PdfService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [schema_renderer_service_1.SchemaRendererService])
], PdfService);
exports.PdfService = PdfService;
//# sourceMappingURL=pdf.service.js.map
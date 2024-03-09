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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PdfController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_pdf_dto_1 = require("./dto/create-pdf.dto");
const pdf_service_1 = require("./pdf.service");
let PdfController = class PdfController {
    constructor(pdfService) {
        this.pdfService = pdfService;
    }
    async create(createPdfDto, res) {
        const buffer = await this.pdfService.create(createPdfDto);
        const stream = this.pdfService.getReadableStream(buffer);
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Length': buffer.length,
            'Content-Disposition': 'attachment;filename=result.pdf'
        });
        stream.pipe(res);
        return;
    }
};
__decorate([
    common_1.Post(),
    swagger_1.ApiCreatedResponse({
        description: 'Generate PDF for the template schema and data'
    }),
    swagger_1.ApiInternalServerErrorResponse({
        description: 'At some point of PDF generation process has failed'
    }),
    swagger_1.ApiBadRequestResponse({
        description: 'Invalid body'
    }),
    swagger_1.ApiBody({ type: create_pdf_dto_1.CreatePdfDto }),
    __param(0, common_1.Body()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pdf_dto_1.CreatePdfDto, Object]),
    __metadata("design:returntype", Promise)
], PdfController.prototype, "create", null);
PdfController = __decorate([
    common_1.Controller('pdf'),
    swagger_1.ApiTags('PDF'),
    __metadata("design:paramtypes", [pdf_service_1.PdfService])
], PdfController);
exports.PdfController = PdfController;
//# sourceMappingURL=pdf.controller.js.map
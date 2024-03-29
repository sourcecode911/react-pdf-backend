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
exports.CreatePdfDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const base_block_dto_1 = require("./base-block.dto");
class CreatePdfDto {
}
__decorate([
    swagger_1.ApiProperty({ type: base_block_dto_1.BaseBlockDTO }),
    class_transformer_1.Type(() => base_block_dto_1.BaseBlockDTO),
    class_validator_1.IsNotEmpty(),
    class_validator_1.ValidateNested(),
    __metadata("design:type", base_block_dto_1.BaseBlockDTO)
], CreatePdfDto.prototype, "schema", void 0);
__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsObject(),
    swagger_1.ApiProperty({
        example: {
            firstName: 'Title'
        }
    }),
    __metadata("design:type", Object)
], CreatePdfDto.prototype, "data", void 0);
exports.CreatePdfDto = CreatePdfDto;
//# sourceMappingURL=create-pdf.dto.js.map
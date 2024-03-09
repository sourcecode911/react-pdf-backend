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
exports.BaseBlockDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const Identifier_enum_1 = require("../../RenderBlock/Identifier.enum");
class BaseBlockDTO {
    constructor() {
        this.items = [];
    }
}
__decorate([
    swagger_1.ApiProperty({ enum: Identifier_enum_1.Identifier }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEnum(Identifier_enum_1.Identifier),
    __metadata("design:type", String)
], BaseBlockDTO.prototype, "identifier", void 0);
__decorate([
    swagger_1.ApiProperty({
        type: 'object',
        description: 'Metadata object is dependant on the type of block'
    }),
    class_validator_1.IsOptional(),
    class_validator_1.IsObject(),
    __metadata("design:type", Object)
], BaseBlockDTO.prototype, "metadata", void 0);
__decorate([
    swagger_1.ApiProperty({ type: 'string' }),
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", void 0)
], BaseBlockDTO.prototype, "accessor", void 0);
__decorate([
    class_transformer_1.Type(() => BaseBlockDTO),
    class_validator_1.ValidateNested(),
    class_validator_1.IsArray(),
    swagger_1.ApiProperty({
        type: 'object',
        isArray: true,
        description: 'BaseBlockDTO',
        example: [
            {
                identifier: Identifier_enum_1.Identifier.Title,
                accessor: 'firstName',
                metadata: {
                    theme: 'h2'
                }
            }
        ]
    }),
    __metadata("design:type", Array)
], BaseBlockDTO.prototype, "items", void 0);
__decorate([
    class_validator_1.IsEmpty(),
    swagger_1.ApiHideProperty(),
    __metadata("design:type", void 0)
], BaseBlockDTO.prototype, "Component", void 0);
exports.BaseBlockDTO = BaseBlockDTO;
//# sourceMappingURL=base-block.dto.js.map
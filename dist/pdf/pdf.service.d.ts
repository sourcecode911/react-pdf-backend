/// <reference types="node" />
import { Readable } from 'stream';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { SchemaRendererService } from './schema-renderer.service';
export declare class PdfService {
    private readonly schemaRendererService;
    constructor(schemaRendererService: SchemaRendererService);
    create(createPdfDto: CreatePdfDto): Promise<Buffer>;
    getReadableStream(buffer: Buffer): Readable;
}

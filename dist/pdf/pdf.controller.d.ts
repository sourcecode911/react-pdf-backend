import { Response } from 'express';
import { CreatePdfDto } from './dto/create-pdf.dto';
import { PdfService } from './pdf.service';
export declare class PdfController {
    private readonly pdfService;
    constructor(pdfService: PdfService);
    create(createPdfDto: CreatePdfDto, res: Response): Promise<void>;
}

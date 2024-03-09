/// <reference types="node" />
import { Data } from '../DataProvider';
import { deserializeSchema } from '../RenderBlock/mapping';
export declare class SchemaRendererService {
    prefixedFonts: string;
    prefixedStyles: string;
    private wrapWithTemplate;
    private convertHTMLToPDF;
    renderHTML: (schema: ReturnType<typeof deserializeSchema>, data: Data) => string;
    renderPDF: (schema: ReturnType<typeof deserializeSchema>, data: Data) => Promise<Buffer>;
}

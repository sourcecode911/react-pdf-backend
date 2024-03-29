import { Injectable, InternalServerErrorException } from '@nestjs/common';
import * as ent from 'ent';
import puppeteer, { Browser, Page } from 'puppeteer';
import React from 'react';
import * as ReactDOMServer from 'react-dom/server';

import { Data, DataProvider } from '../DataProvider';
import { RenderBlock } from '../RenderBlock';
import { deserializeSchema } from '../RenderBlock/mapping';

@Injectable()
export class SchemaRendererService {
  prefixedFonts: string;
  prefixedStyles: string;
  private wrapWithTemplate = (body: string) => {
    return `<!DOCTYPE html><html><head></head><body>${ent.decode(
      body
    )}</body></html>`;
  };

  private convertHTMLToPDF = async (html: string): Promise<Buffer> => {
    if (typeof html !== 'string' || !html) {
      throw new InternalServerErrorException(
        'Invalid Argument: content for the PDF is not a string.'
      );
    }

    let browser: Browser;
    try {
      browser = await puppeteer.launch();
    } catch (e) {
      throw new InternalServerErrorException('Unable to launch PDF Renderer');
    }

    let page: Page;
    try {
      page = await browser.newPage();
    } catch (e) {
      throw new InternalServerErrorException('Unable to create page for PDF');
    }

    try {
      await page.goto(
        `data:text/html;base64,${Buffer.from(html).toString('base64')}`,
        {
          waitUntil: 'networkidle0'
        }
      );
    } catch (e) {
      throw new InternalServerErrorException('Unable render the  on page');
    }

    let result: Buffer;

    try {
      result = await page.pdf({
        format: 'a4',
        printBackground: true
      });
    } catch (e) {
      throw new InternalServerErrorException('Unable render page into PDF');
    }

    try {
      await browser.close();
    } catch (e) {
      throw new InternalServerErrorException('Unable close PDF renderer');
    }

    return result;
  };

  renderHTML = (
    schema: ReturnType<typeof deserializeSchema>,
    data: Data
  ): string => {
    return this.wrapWithTemplate(
      ReactDOMServer.renderToStaticMarkup(
        React.createElement(
          DataProvider,
          { data },
          React.createElement(RenderBlock, { schema }, null)
        )
      )
    );
  };

  renderPDF = async (
    schema: ReturnType<typeof deserializeSchema>,
    data: Data
  ): Promise<Buffer> => {
    return await this.convertHTMLToPDF(this.renderHTML(schema, data));
  };
}

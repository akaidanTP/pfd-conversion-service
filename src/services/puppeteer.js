import { initializeNewBrowser } from '../utils/puppeteer.js'

export async function generatePDFFromHTML(html) {
    const browser = await initializeNewBrowser()
    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf();

    await page.close();
    await browser.close();

    return pdfBuffer;
}
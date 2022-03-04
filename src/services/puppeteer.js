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

export async function generatePDFFromURL(url) {
    const browser = await initializeNewBrowser()
    const page = await browser.newPage();

    // How we can set an authToken or something for security
    // await page.setExtraHTTPHeaders({
    //     'user-agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36',
    //     'upgrade-insecure-requests': '1',
    //     'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3',
    //     'accept-encoding': 'gzip, deflate, br',
    //     'accept-language': 'en-US,en;q=0.9,en;q=0.8'
    // })

    await page.goto(url);

    const pdfBuffer = await page.pdf();

    await page.close();
    await browser.close();

    return pdfBuffer;
}
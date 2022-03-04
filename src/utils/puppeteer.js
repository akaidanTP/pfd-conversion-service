import puppeteer from "puppeteer";

export async function initializeNewBrowser() {
    const browser = await puppeteer.launch({
        args: ['--disable-dev-shm-usage'],
    });

    return browser
}
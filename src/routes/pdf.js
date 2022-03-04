import express from 'express'
import { generatePDFFromHTML } from '../services/puppeteer.js'
export const pdfRouter = express.Router()


// Should accept a post request with valid html set as "html" in the body
pdfRouter.post('/pdf/html', async (req, res) => {
    try {
        console.log('Generating PDF')
        console.log(req.body)
        const pdf = await generatePDFFromHTML(req.body.html)
        console.log('Finished generating PDF')

        res.set("Content-Type", "application/pdf");
        res.send(pdf);
    } catch (e) {
        res.send(`Something went wrong: ${e.message}`)
    }
})

export default pdfRouter
import express from 'express'
import pdfRouter from './routes/pdf.js'
const app = express()
const port = process.env.PORT || 3005

// enable JSON
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', pdfRouter)

app.listen(port, () => {
    console.log(`Truepill pdf converter listening on port ${port}`)
})
const express = require('express')
const app = express()
const port = process.env.PORT || 3005

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Truepill pdf converter listening on port ${port}`)
})
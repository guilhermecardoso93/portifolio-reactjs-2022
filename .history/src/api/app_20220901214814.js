const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => res.send('Oi'))

app.listen(port, () => console.log(`Running port ${port}`))
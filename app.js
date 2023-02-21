const express = require('express')
const http = require('http')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000

const questionRoutes = require('./routes/question')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/assets', express.static('assets'))

app.use(`/question`, questionRoutes)

app.use((req, res, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error) 
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

const server = http.createServer(app)
    server.listen(port, () => {
        console.log(`Server running on port ${port}`)
    }
)
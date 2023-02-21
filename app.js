const express = require('express')
const http = require('http')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const cors = require('cors')

const port = 3002

const questionRoutes = require('./routes/question')
const adminRoutes = require('./routes/admin')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.use(cors())
app.use('/assets', express.static('assets'))

app.use(`/question`, questionRoutes)
app.use('/admin', adminRoutes)

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
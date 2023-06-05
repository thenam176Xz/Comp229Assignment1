
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compress')
const methodOverride = require('method-override')
const app = express();
const port = 3030





module.exports = function(){
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production'){
        app.use(compress());
    }
};


// Static Files
app.use(express.static('public'))
app.use(express.static("./node_modules"))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(methodOverride())
const mainRouter = require('./routes/main.server.routes')
app.use('/', mainRouter )





// Set views
app.set('views', './views')
app.set('view engine', 'ejs')







// Listen
app.listen(port, () => console.info(`Linstening on port ${port}`))

/*
// import
const express = require('express')
const app = express()
const port = 3000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// Set views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) =>{
    res.render(__dirname +'/views/index.ejs')
})
app.get('/aboutMe', (req, res) =>{
    res.render(__dirname +'/views/aboutMe.ejs')
})
app.get('/contact', (req, res) =>{
    res.render(__dirname +'/views/contact.ejs')
})
app.get('/projectPage', (req, res) =>{
    res.render(__dirname +'/views/projectPage.ejs')
})
app.get('/servicePage', (req, res) =>{
    res.render(__dirname +'/views/servicePage.ejs')
})
// Listen on port 3000
app.listen(port, () => console.info(`Linstening on port ${port}`))
*/
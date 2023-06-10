const express = require('express')
const mainRouter = express.Router()

mainRouter.get('', async(req, res) =>
{
    res.render('main', {title: 'Main page'})
})

mainRouter.get('/about', (req, res, next) =>
{
    res.render('about',{title: 'About Me'})
})

mainRouter.get('/contact', async (req, res, next) =>
{
    res.render('contact',{title: 'Contact Me'})
})

mainRouter.get('/products', async (req, res, next) =>
{
    res.render('products',{title: 'My Products'})
})

mainRouter.get('/services', async (req, res, next) =>
{
    res.render('services',{title: 'My Services'})
})
mainRouter.get('/home', (req, res, next) =>
{
    res.render('home',{title: 'Home page'})
})

module.exports = mainRouter
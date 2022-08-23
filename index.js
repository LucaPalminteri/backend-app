import express from "express";
import { conect } from "./src/mysql_conector.js";

// express initialization 
const app = express()

// server initialization
app.listen('8000', function() {
    console.log('application running on port 8000');
})

// pug settings
app.set('views','./views')
app.set('view engine','pug')

// static files settings
app.use(express.static('./views'))
app.use(express.static('./src'))
app.use(express.static('./css'))



app.get('/', (req, res) => {
    conect()
    res.render('index', {title:'title of the page', data: 'any data content'})
})

app.get('/add/:name/:lastName', (req,res) => {
    let name = req.params.name;
    let lastName = req.params.lastName;

    console.log(name + ' ' + lastName);
})
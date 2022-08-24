import express from "express";
import { conect, addUser } from "./src/mysql_conector.js";

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
    res.render('index', {title:'title of the page', data: 'any data content'})
})

app.get('/add/:name/:lastName', (req,res) => {
    let name = req.params.name;
    let lastName = req.params.lastName;

    addUser(name,lastName,bornDate,sex,tech);

    res.redirect('/');
    console.log(name + ' ' + lastName);
})
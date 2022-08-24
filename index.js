import express from "express";
import { conect, addUser, getUsers } from "./src/mysql_conector.js";

let users

// express initialization 
const app = express()

// server initialization
app.listen('8000', function() {
    //conect()
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
    users = getUsers();

    users.forEach(element => {
        let today = new Date()
        let bornDateTime = new Date(element.bornDate)
        let age = Math.abs(today.getFullYear() - bornDateTime.getFullYear())
        if(today.getMonth() <= bornDateTime.getMonth() && today.getDay() <= bornDateTime.getDay()) age--
        element.bornDate = age
    });
    res.render('index', {users,data:'as'})
})

app.get('/add/:name/:lastName/:bornDate/:sex/:tech', (req,res) => {
    let name = req.params.name;
    let lastName = req.params.lastName;
    let bornDate = req.params.bornDate;
    let sex = req.params.sex;
    let tech = req.params.tech;

    addUser(name,lastName,bornDate,sex,tech);

    res.redirect('/');
    console.log(`${name} - ${lastName} - ${bornDate} - ${sex} - ${tech}`);
})
import express from "express";

const app = express()

app.listen('8000', function() {
    console.log('application running on port 8000');
})

app.get('/', (req, res) => {
    res.send('okk')
})
import mysql from 'mysql'

// create connection

const conector = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mern2'
})

const conect = ()=> {
    conector.connect(err => {
        if(err) throw err
        console.log('OKKKKK');
    })
    conector.end()
    console.log('connectiopn ended');
}

export {conect}
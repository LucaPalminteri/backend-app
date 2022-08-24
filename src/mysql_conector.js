import mysql from 'mysql'

let users

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
}

const addUser = (name,lastName,bornDate,sex,tech) => {
    const q = `INSERT INTO mern2.users
                    (name,
                    lastName,
                    bornDate,
                    sex,
                    tech) 
                VALUES 
                    ("${name}",
                    "${lastName}",
                    "${bornDate}",
                    "${sex}",
                    "${tech}")`;
    conector.query(q, (err, result, filed) => {
        if(err) throw err;
    })
}

const getUsers = ()=> {
    let q = 'SELECT * FROM users'
    conector.query(q,(err, result, filed) => {
        users = result
    })
    return users
}

const deleteUser = id => {
    const q = `DELETE FROM users WHERE id_users=${id}`
    conector.query(q)
}

export {conect, addUser, getUsers, deleteUser}
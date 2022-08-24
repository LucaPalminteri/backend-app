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
        console.log(result);
    })
}

let help = []

const getUsers = ()=> {
    const q = `SELECT * FROM mern2.users`
    conector.query(q,(err, result, filed) => {
        if(err) throw err;
            console.log(result);
            help.push('s')
            help = [...result];
    })
    return help
}
console.log(`Help: ${help}`);




export {conect, addUser, getUsers}
const db = require("../database/db");
const User = require('../models/user-model');
const { Op } = require("sequelize");



module.exports = { authenticate, getAll };

async function authenticate({ username, password }) {

    // findOne se nao encontra ele retorna null, já o findAll retorna array vazio
    const auth = await User.findOne({ 
        where: {
            [Op.and]: [
              { username: `${username}` },
              { password: `${password}` }
            ]
        }});
    if (auth === null) {
        console.log(auth);
        return false;
    } else {
        console.log('AUTHHHHHHH ->',auth);
        return true;
    }

    


    //     CODIGO ANTIGO 
    /*
    const a = await getByUsernameAndPassword(username, password)
        .then((value) => {
            console.log("Value: ", value);
            return value
        })
        .catch(() => false); //pdf js 2 primeiro semestre //como criar db sequelize (configurar) "ORM"
    console.log(a);
    return a;
    */
}


/*
function getByUsernameAndPassword(username, password) {
    return new Promise((resolve, reject) => {

        db.query(
            "SELECT * FROM `users` WHERE username = ? && password = ?",
            [username, password],
            (err, result) => {
                if (err) {
                    console.log(err);
                    reject();
                }
                else {
                    console.log('Authenticate');
                    console.log(result);
                    resolve(true);
                }
            }
        );
    });
}
*/


async function getAll() {  


    const users = await User.findAll();
    console.log(users.every(user => user instanceof User)); // true
    return users

    //     CODIGO ANTIGO 
    //return JSON.stringify(users, null, 2);
    
    /*
    db.query(
        "SELECT * FROM `users`",
        (err, data) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(data);
            return data;
        }
    )*/
};

// async function createOne(){
//     const user = await User.create({
//         username:'4',
//         password:'senha',
//         firstName:'Lab',
//         lastName:'Lab'
//     }).then((result) => {console.log(result);
//     })
//     return 'Created a new user';  
// };

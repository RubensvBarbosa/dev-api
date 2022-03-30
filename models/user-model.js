const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service')

const User = database.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

//Verificar se DEV
if(config.ENV === 'dev'){
    User.sync({force:true}).then(()=>{
        User.create({
            username:'Rubens',
            password:'senha',
            firstName:'R',
            lastName:'R'
        });
        User.create({
            username:'basicUser',
            password:'basicPassword',
            firstName:'Lab',
            lastName:'Lab'
        });
        User.create({
            username:'4',
            password:'senha',
            firstName:'Lab',
            lastName:'Lab'
        });
        User.create({
            username:'5',
            password:'senha',
            firstName:'5',
            lastName:'5'
        });        
    });
}else{
    User.sync();
}


module.exports = User;
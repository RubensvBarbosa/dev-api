const { authenticate, getAll, createOne } =require("../service/users-service");
const sequelize = require('../database/db');
const User = require('../models/user-model');
const { createConnection } = require("mysql");



const list = async (req, res, next) => {
    
    const data = await getAll();  
    console.log(data);
    res.json(data);
    

};

const create = async (req, res, next) => {

    
    // const user = await createOne();
    res.json('vazio');


   
};

module.exports = {list,create};



const authCtrl = {};
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User.Model");
const jwt = require("jsonwebtoken");
const checkAuth = require('../middleware/check-auth');



authCtrl.login = (req,res,next) => {
    let FindedUser;
    User.findOne({username: req.body.username})
        .then(user =>  {
            if(!user) {
                return res.status(401).json({
                    message: "there is not a user with the username " + req.body.username
                });
            }
            console.log("usuario encontrado")
            FindedUser = user;
            return  bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if(!result) {
                return res.status(401).json({
                    message: "Password does not match"
                });

            }
            console.log("contraseña coincide")
            const token = jwt.sign({username: FindedUser.username, password: FindedUser.password}, "palabra_secreta_que_deberia_guardar_y_hashear_en_la_db", 
            {expiresIn: "1h"}
            );
            res.status(200).json({
                message: "Usuario logeado exitosamente",
                token:token
            });
        })
        .catch(err => {
            message: "Error en la authentificacion."
        });
};

authCtrl.signup = async (req,res,next) => {
    try {
        let {username, password} = req.body;
        let hashed;
        let user;
        let foundUsers = await User.findOne({username:username});
        if(foundUsers) { 
            return res.status(400).json({
                success: false,
                message:'el usuario ya existe'
            })
        }
        console.log(bcrypt.hashSync(req.body.password, 10))
        
        user = new User({
            username: username,
            password: bcrypt.hashSync(req.body.password, 10)
 
        });
        await user.save();
        res.status(200).json({
            success: true,
            message:'usuario guardado con exito'
        })
    } catch(error) {
        console.log(`Ha ocurrido un error ${error}`);
        return res.status(500).json({
            success: false,
            message: `Ha ocurrido un error, por favor intente más tarde`
        })
    }
    
    
};

module.exports = authCtrl;
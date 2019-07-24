const authCtrl = {};
const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/User.Model");
const jwt = require("jsonwebtoken");


authCtrl.login = (req,res,next) => {
    let FindedUser;
    User.findOne({username: req.body.username})
        .then(user =>  {
            if(!user) {
                return res.status(401).json({
                    message: "there is not a user with the username " + req.body.username
                });
            }
            FindedUser = user;
            return  bcrypt.compare(req.body.password, user.password);
        })
        .then(result => {
            if(!result) {
                return res.status(401).json({
                    message: "Password does not match"
                });
            }
            const token = jwt.sign({username: usuarioEncontrado.username, password: usuarioEncontrado.password}, "palabra_secreta_que_deberia_guardar_y_hashear_en_la_db", 
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

authCtrl.signup = (req,res,next) => {
    console.log(req.body)
    bcrypt.hash(req.body.password, 10)
    .then(hash => {
    
        const user = new User({
            username : req.body.username ,  
            password: hash
        
        });
        user.save()
        .then(result => {
            console.log("Usuario Creado ");
            console.log(result);
            res.status(201).json({
                message: 0
            });
        })
        .catch(err => {
            res.status(500).json({
                message: 1,
                error: err
            });
        });
    });  
    
};

module.exports = authCtrl;
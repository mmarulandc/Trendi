const db = require("mongoose");

db.connect("mongodb://mongo:27017/trendi",{useNewUrlParser:true})
    .then(database =>  console.log("db conected"))
    .catch(err =>  console.log(err) );

module.exports = db;
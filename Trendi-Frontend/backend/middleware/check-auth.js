const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    //Verifica el token que recibe del front-end para permitir acceso a las diferentes rutas de la api
    try {
        const token = req.headers.authorization;
        console.log(token);
        jwt.verify(token, "palabra_secreta_que_deberia_guardar_y_hashear_en_la_db");
        next();
    } catch (error) {
        res.status(401).json({
            message: "Fallo authentificacion"
        });
    }
};
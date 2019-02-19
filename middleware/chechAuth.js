'use strict';


module.exports = () => {
    return function(req, res, next) {
        // leer Bearer token, pueden venir en el body, por query o en las cabeceras
        const basicAuth =  req.get('Authorization');
        if (!basicAuth) {
            const err = new Error('Basic Auth not provided');
            err.status = 401;
            next(err);
            return;
        }
        next();
    }
};
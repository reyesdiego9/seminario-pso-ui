const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const jwt = require('jsonwebtoken');
const app = express();
const saltRound = 10;
const router = express.Router();

const db = mysql.createConnection({
    user: 'root',
    host: '192.168.194.95',
    port: 3306,
    password: 'Famrz4569',
    database: 'inventory',
});

router.post('/', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.execute(
        'SELECT * FROM usuarios WHERE correo_usr = ?;',
        [email],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                bcrypt.compare(password, result[0].passwd_usr, (error, response) => {
                    if (response) {
                        const id = result[0].id
                        const token = jwt.sign({ id }, "jwtSecret", {
                            expiresIn: 300,
                        })
                        req.session.user = result;
                        res.send(token);
                    } else {
                        res.status(404).json({ auth: false, message: "Wrong email password" });
                    }
                });
            } else {
                res.status(404).json({ auth: false, message: "no user exists" });
            }
        }
    );
})

module.exports = router;
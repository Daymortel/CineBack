const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');


router.post('/signin', async (req, res) => {
    try {
        const { login } = require('../models/users')

        const result = await login(req.body.username, crypto.createHash('sha256').update(req.body.password).digest('hex'));
        if(result.length === 0) {
            res.status(404).send('Account not found !');
        } else {
            const user = {
                id: result[0].id,
                username: result[0].username,
                password: result[0].password
            }
            const token = jwt.sign(user, "secretkey");
            res.status(200).send({user, token});
        }

    } catch (err) {
        res.send(err.message)
    }
});

router.post('/signup', async (req, res) => {
    try {
        const { createUser } = require('../models/users')

        await createUser({
            "username": req.body.username,
            "email": req.body.email,
            "password": crypto.createHash('sha256').update(req.body.password).digest('hex'),
        })
        res.send('Compte créé !');
    } catch(err) {
        console.log(err.message); 
    }
});

module.exports = router

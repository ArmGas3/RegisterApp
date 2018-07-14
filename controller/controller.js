const express = require('express');
const model = require('.././model/model');
const router = express.Router();

const bps = require('body-parser');
const enc = bps.urlencoded({ extended: false });

router.get('/', (req, res) => {
    res.render('index', { data: { register: false }});
});

router.get('/error', (req, res) => {
   res.render('error');
});

router.get('/login', (req, res) => {
    res.redirect('/');
});

// login part
router.post('/login', enc, (req, res) => {
    let login = req.body.login;
    let pass = req.body.password;

    model.findOne({ login: login, password: pass}, (err, result) => {
        if (result === null) {
            res.redirect('/error');
        } else {
            res.render('login', { name: result.login });
        }
    });
});

// register part
router.post('/register', enc, (req, res) => {
    let regname = req.body.regname;
    let regpass = req.body.regpass;

    new model({ login: regname, password: regpass }).save();

    res.render('index', { data: { register: true }});
});

module.exports = router;
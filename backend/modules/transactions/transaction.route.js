const express = require('express');
const router = express.Router();

const createTransaction = require('./create.controller');


router.post('/transaction', (req,res) => {return createTransaction(req,res)});

module.exports = router;

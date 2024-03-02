const express = require('express');
const router = express.Router();

const createTransaction = require('./create.controller');
const getTransactionAddedAmtByCat = require('./bar.api');

router.post('/transaction', (req,res) => {return createTransaction(req,res)});
router.get('/transaction', (req,res) => {return getTransactionAddedAmtByCat(req,res)});

module.exports = router;

const express = require('express');
const router = express.Router();

const createTransaction = require('./create.controller');
const getTransactionAddedAmtByCat = require('./bar.api');
const getAllTransactionData = require('./chart.api');

router.post('/transaction', (req,res) => {return createTransaction(req,res)});
router.get('/transaction', (req,res) => {return getTransactionAddedAmtByCat(req,res)});
router.get('/allTransaction', (req, res)=>{return getAllTransactionData(req, res)});

module.exports = router;

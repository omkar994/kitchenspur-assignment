const baseresponse = require("../../helper/baseresponse");
const Transaction = require('./transaction.schema');

const getAllTransactionData = async (req, res) => {

    try {
        const allTrans = await Transaction.find({}).sort({date: 'desc'});
        res.send(allTrans);
    }
    catch (error) {
        console.error(error);
        res.status(500).json(baseresponse(500, "Internal Server Error", { error }));

    }
};

module.exports = getAllTransactionData;
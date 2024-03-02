const baseresponse = require("../../helper/baseresponse");
const Transaction = require('./transaction.schema');

const createTransaction = async(req, res)=>{
    try {
        const { title, date, amount, category, description } = req.body;  
       
        const transaction = await new Transaction({
            title: title,
            date: date,
            amount: amount,
            category: category,
            description: description
        }).save();
        return res.status(200).json(baseresponse(200, "Transaction Created", transaction));
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(baseresponse(500, "Internal Server Error", { error }));        
    }
}

module.exports = createTransaction;
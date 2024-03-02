const baseresponse = require("../../helper/baseresponse");
const Transaction = require('./transaction.schema');


const getTransactionAddedAmtByCat = async(req, res)=> {
    try {
        const amtAddedByCat = await Transaction.find({}, 'category amount');
        
        let groupedAmounts = {};

        amtAddedByCat.forEach(tran =>{
            const {amount, category}=tran;

            if(groupedAmounts[category]){
                groupedAmounts[category]+= amount;
            }
            else{
                groupedAmounts[category]= amount;
            }
            console.log(groupedAmounts);
        })
        const arrayFromObject = Object.entries(groupedAmounts);
        const arrayOfObjects = arrayFromObject.map(([key, value]) => ({ [key]: value }));
   
        return res.send(arrayOfObjects);
    } catch (err) {
        console.error(err);
        res.status(500).json(baseResponse(500, "Internal Server Error", { error }));
    }
};



module.exports = getTransactionAddedAmtByCat;
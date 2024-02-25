const mongoose = require('mongoose');

const transaction = new mongoose.Schema({
    title: { type: String, default: "1" },
    date: { type: Date, default: Date.now()},
    amount: {type: Number, default: 0},
    category: { type: String, default: "Bills", enum: ["Bills", "Grocery", "Medicine","Cloth","option2"], index: true },
    description:{type: String}
});
const Transaction = mongoose.model('transactions', transaction);
module.exports = Transaction;

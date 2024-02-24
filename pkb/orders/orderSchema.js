const mongoose = require ('mongoose');

const orderSchema = new mongoose.Schema({

itemID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Items"
},

supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Suppliers",
},

quantity: {
    type: Number,
},

totalPrice: {
    type: Number,
},

pricePerUnit: {
    type: Number
},

date: {
    type: Date
},

});

const orders = mongoose.model('orders', orderSchema);
module.exports = orders;
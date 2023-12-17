const mongoose = require ('mongoose');

const orderSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    orders: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'orders',
    }]
});

const orders = mongoose.model('orders', orderSchema);
module.exports = orders;
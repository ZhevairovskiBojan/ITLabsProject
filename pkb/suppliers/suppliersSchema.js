const mongoose = require ('mongoose');

const suppliersSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    suppliers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'suppliers',
    }]
});

const suppliers = mongoose.model('suppliers', suppliersSchema);
module.exports = suppliers;
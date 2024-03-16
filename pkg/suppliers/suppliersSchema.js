const mongoose = require ('mongoose');

const suppliersSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    adress: {
        type: String,
    },

    phonenumber: {
        type: String,
    },

    email: {
        type: String,

    },

    suppliers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'suppliers',
    }]
});

const suppliers = mongoose.model('suppliers', suppliersSchema);
module.exports = suppliers;
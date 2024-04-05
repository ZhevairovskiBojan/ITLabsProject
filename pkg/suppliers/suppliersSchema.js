const mongoose = require ('mongoose');

const suppliersSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    address: {
        type: String,
    },
    phonenumber: {
        type: String,
    },
    email: {
        type: String,
    },
  
    subSuppliers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
    }]
});

const Supplier = mongoose.model('Supplier', suppliersSchema);
module.exports = Supplier;

module.exports = Supplier;
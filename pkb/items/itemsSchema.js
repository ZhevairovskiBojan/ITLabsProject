const mongoose = require ('mongoose');

const itemsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        
    },
    date: {
        type: Date,
        default: Date.now
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Item',
    }]
});

const category = mongoose.model('items', itemsSchema);
module.exports = category;
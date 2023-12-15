const mongoose = require ('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
    },
    icon: {
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

const category = mongoose.model('category', categorySchema);
module.exports = category;
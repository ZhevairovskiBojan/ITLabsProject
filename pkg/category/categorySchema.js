const mongoose = require ('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
    },
    icon: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    }],

    //  timestamps: true,

});

const category = mongoose.model('category', categorySchema);
module.exports = category;
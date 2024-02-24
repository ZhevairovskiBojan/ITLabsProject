const mongoose = require ('mongoose');

const itemsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        requried: [true, "The field is required"]
    },

    image: {
        type: String,
    },

    category: {
        enum: ["Office Supply", "Kitchen Supply", "Sanitary Supply"]
    },

    numberOfOrders: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Orders"
    },

    totalCost: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Costs",
    },

});

const items = mongoose.model('items', itemsSchema);
module.exports = items;
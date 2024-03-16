const mongoose = require ('mongoose');

const itemsSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: [true, "The field is required"]
    },

    image: {
        type: String,
    },

    category: {
        type: String,
        enum: ["Office Supply", "Kitchen Supply", "Sanitary Supply"],
        required: [true, "The category field is required"]
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
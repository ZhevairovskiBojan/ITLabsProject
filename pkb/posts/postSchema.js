const mongoose = require('mongoose');

const postSchema = new mongoose.postSchema({
    title: {
        type: String,
    },
    plot: {
        type: String,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' ,
    },
});
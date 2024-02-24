const mongoose = require ('mongoose');

const recentActivitySchema = new mongoose.Schema(
{
    username:String,
    action: String,
},

{
    timestamps: true,
}

);

const Activity = mongoose.model("activities", recentActivitySchema, "activities");
module.exports = Activity;
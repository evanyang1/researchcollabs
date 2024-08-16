const mongoose = require("mongoose");

const ThreadSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
});

const Thread = mongoose.model("thread", ThreadSchema);
module.exports = Thread;

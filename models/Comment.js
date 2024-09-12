const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: { type: Date, required: true },
});

const Comment = mongoose.model("comment", CommentSchema);
export { Comment, CommentSchema };

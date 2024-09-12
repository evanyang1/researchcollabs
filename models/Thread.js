const mongoose = require("mongoose");
import { CommentSchema } from "./Comment";

const ThreadSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  comments: [CommentSchema],
});

const Thread = mongoose.model("thread", ThreadSchema);

export { Thread, ThreadSchema };

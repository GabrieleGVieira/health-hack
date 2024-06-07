import { Schema as _Schema } from "mongoose";
const Schema = _Schema;

const messageSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = mongoose.model("Message", messageSchema);

export default Message;

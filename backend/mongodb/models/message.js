import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const messageSchema = new Schema({
  sender: String,
  receiver: String,
  content: String,
  timestamp: { type: Date, default: Date.now },
});

const Message = model("Message", messageSchema);

export default Message;

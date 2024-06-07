import { Schema as _Schema } from "mongoose";
const Schema = _Schema;

const notificationSchema = new Schema({
  type: String,
  message: String,
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  read: { type: Boolean, default: false },
  timestamp: { type: Date, default: Date.now },
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification
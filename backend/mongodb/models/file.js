import { Schema as _Schema } from "mongoose";
const Schema = _Schema;

const fileSchema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: "User" },
  receiver: { type: Schema.Types.ObjectId, ref: "User" },
  fileType: String,
  fileUrl: String,
  timestamp: { type: Date, default: Date.now },
});

const File = mongoose.model("File", fileSchema);

export default File


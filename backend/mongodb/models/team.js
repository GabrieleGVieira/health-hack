import { Schema as _Schema } from "mongoose";
const Schema = _Schema;

const teamSchema = new Schema({
  name: String,
  members: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Team = mongoose.model("Team", teamSchema);

export default Team;
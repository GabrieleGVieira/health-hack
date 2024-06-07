import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String,
  department: String,
});

const User = model("User", userSchema);

export default User

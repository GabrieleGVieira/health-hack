import User from "../mongodb/models/user.js";

async function create(userData) {
  const newUser = new User({
    name: userData.name,
    email: userData.email,
    department: userData.department,
    role: userData.role,
    password: userData.password,
  });

  return await newUser.save();
}

async function findByEmail(email) {
  return await User.findOne({email});
}


export default {
  create,
  findByEmail,
};
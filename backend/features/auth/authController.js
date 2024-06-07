import login from "./useCase/auth.js";

const loginController = async (req, res) => {
  try {
    const user = await login(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default loginController;

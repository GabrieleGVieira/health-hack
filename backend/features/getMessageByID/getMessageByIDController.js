import getMessageByID from "./useCase/getMessageByID.js";

const getMessageByIDController = async (req, res) => {
  try {
    const msg = await getMessageByID(req.body);
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default getMessageByIDController;

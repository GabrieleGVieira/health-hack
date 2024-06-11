import sendMessage from "./useCase/sendMessage.js";

const sendMessageController = async (req, res) => {
  try {
    await sendMessage(req.body);
    res.status(201).json("Mensagem enviada com sucesso");
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export default sendMessageController;

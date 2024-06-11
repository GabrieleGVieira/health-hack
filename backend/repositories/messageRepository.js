import Message from "../mongodb/models/message.js";

async function sendMessage(msgData) {
  const newMessage = new Message({
    sender: msgData.sender,
    receiver: msgData.receiver,
    content: msgData.content,
  });

  return await newMessage.save();
}

async function getMessageByID(msgIDData) {
  const messages = await Message.find({
    $or: [
      { sender: msgIDData.user, receiver: msgIDData.receiver },
      { sender: msgIDData.receiver, receiver: msgIDData.user },
    ],
  }).populate("sender receiver", "name email");
  return messages;
}

export default {
  sendMessage,
  getMessageByID,
};

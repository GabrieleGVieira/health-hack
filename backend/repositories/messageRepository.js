import Message from "../mongodb/models/message.js";

async function sendMessage(msgData) {
  const newMessage = new Message({
    sender: msgData.sender,
    receiver: msgData.receiver,
    content: msgData.content,
  });

  return await newMessage.save();
}

export default {
  sendMessage,
};

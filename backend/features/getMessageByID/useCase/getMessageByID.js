import messageRepository from "../../../repositories/messageRepository.js";
import userRepository from "../../../repositories/userRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function getMessageByID(msgIDData) {
  try {
    const msg = messageRepository.getMessageByID(msgIDData);

    return msg;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao tentar ler as mensagens:",
      error
    );
    throw new Error(error);
  }
}

export default getMessageByID;

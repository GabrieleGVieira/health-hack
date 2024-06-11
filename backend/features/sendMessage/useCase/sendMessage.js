import messageRepository from "../../../repositories/messageRepository.js";
import userRepository from "../../../repositories/userRepository.js";
import errorEnum from "../../../entities/errorEnum.js";

async function sendMessage(msgData) {
  try {
    // validação de capos vazios
    if (!msgData.receiver || !msgData.content || !msgData.sender) {
      throw errorEnum.emptyField;
    }

    // validar para saber se o usuario receptor existe

    const receiverUser = await userRepository.findByEmail(msgData.receiver);

    if (!receiverUser) {
      throw errorEnum.invalidUser;
    }

    // validando se o usuario receptor é diferente do usuario existente

    if (msgData.receiver == msgData.sender) {
      throw errorEnum.sameUser;
    }

    messageRepository.sendMessage(msgData);

    return "Mensagem enviada com sucesso";
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao tentar enviar uma mensagem:",
      error
    );
    throw new Error(error);
  }
}

export default sendMessage;

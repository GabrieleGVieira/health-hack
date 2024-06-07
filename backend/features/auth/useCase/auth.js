import userRepository from "../../../repositories/userRepository.js";
import errorEnum from "../../../entities/errorEnum.js";
import bcrypt from "bcryptjs";

async function login(loginData) {
  try {
    // validação de capos vazios
    if (!loginData.email || !loginData.password) {
      throw errorEnum.emptyField;
    }

    const userLogin = await userRepository.findByEmail(loginData.email);

    // validando se o usuario existe
    if (!userLogin) {
      throw errorEnum.invalidUser;
    }

    // validando senha
    const passwordMatch = await bcrypt.compare(
      loginData.password,
      userLogin.password
    );

    if (!passwordMatch) {
      throw errorEnum.invalidPassword;
    }

    return userLogin;
  } catch (error) {
    console.error("Ocorreu o seguinte erro durante o login:", error);
    throw new Error(error);
  }
}

export default login;

import userRepository from "../../../repositories/userRepository.js";
import errorEnum from "../../../entities/errorEnum.js";
import bcrypt from "bcryptjs";

async function createUser(userData) {
  try {
    // validação de capos vazios
    if (
      !userData.name ||
      !userData.email ||
      !userData.password ||
      !userData.role ||
      !userData.department
    ) {
      throw errorEnum.emptyField;
    }

    // Validar se o usuario ja existe

    const hasUser = userRepository.findByEmail(userData.email);

    if (hasUser) {
      throw errorEnum.userAlreadyExists;
    }

    // validação se tem caracters inválidos

    const invalidCharactersRegex = /[^a-zA-Z\u00C0-\u017F\s_]/g; // permite minusculas e maiusculas, acentos, letra "ç" e espaços
    const hasInvalidCharactersName = invalidCharactersRegex.test(userData.name);
    const hasInvalidCharactersRole = invalidCharactersRegex.test(userData.role);
    const hasInvalidCharactersDepartment = invalidCharactersRegex.test(
      userData.department
    );

    if (hasInvalidCharactersName) {
      throw errorEnum.invalidName;
    }
    if (hasInvalidCharactersRole) {
      throw errorEnum.invalidRole;
    }
    if (hasInvalidCharactersDepartment) {
      throw errorEnum.invalidDepartment;
    }

    // Transformando password em hash

    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;

    userRepository.create(userData);

    return userData;
  } catch (error) {
    console.error(
      "Ocorreu o seguinte erro no caso de uso ao criar um novo usuário:",
      error
    );
    throw new Error(error);
  }
}

export default createUser;

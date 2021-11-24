import * as userRepository from "../repositories/userRepository.js";
import bcrypt from 'bcrypt';

async function createUser({ name, email, password }) {
  const hashedPassword = bcrypt.hashSync(password, 12);
  const user = await userRepository.createUser({ name, email, password: hashedPassword });

  return user;
}

export { createUser };
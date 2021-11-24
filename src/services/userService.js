import * as userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';

async function createUser({ name, email, password }) {
  const existingUserWithGivenEmail = await userRepository.getUser(email);
  if (existingUserWithGivenEmail.rows[0]) {
    return null; 
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  return await userRepository.signUp({ name, email, password: hashedPassword })
}

export { createUser };
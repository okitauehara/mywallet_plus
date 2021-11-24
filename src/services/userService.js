import * as userRepository from '../repositories/userRepository.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

async function createUser({ name, email, password }) {
  const existingUserWithGivenEmail = await userRepository.getUser(email);
  if (existingUserWithGivenEmail.rows[0]) {
    return null; 
  }

  const hashedPassword = bcrypt.hashSync(password, 12);
  return await userRepository.signUp({ name, email, password: hashedPassword })
}

async function signInUser({ email, password }) {
  const user = await userRepository.getUser(email);
  if (!user.rows[0] || !bcrypt.compareSync(password, user.rows[0].password)) return null;

  return jwt.sign({
    id: user.rows[0].id
  }, process.env.JWT_SECRET);
}

export { createUser, signInUser };
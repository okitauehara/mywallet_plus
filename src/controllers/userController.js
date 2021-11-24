import * as userService from '../services/userService.js';
import * as userRepository from '../repositories/userRepository.js';

async function signUp(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.sendStatus(400);
    }

    const checkEmail = await userRepository.findByEmail(email)
    if (checkEmail !== 0) {
      return res.sendStatus(409);
    }

    const user = await userService.createUser({ name, email, password });
    if (!user) {
      return res.sendStatus(400)
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export { signUp };

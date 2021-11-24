import * as userService from '../services/userService.js';

async function signUp(req, res) {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.sendStatus(400);

  try {
    const result = await userService.createUser({ name, email, password });
    if (!result) {
      return res.sendStatus(409);
    }

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function signIn(req, res) {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);

  try {
    const token = await userService.signInUser({ email, password });
    if (!token) return res.sendStatus(401);

    res.send({ token });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export { signUp, signIn };

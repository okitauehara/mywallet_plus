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

export { signUp };

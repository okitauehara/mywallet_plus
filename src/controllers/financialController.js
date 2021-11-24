import * as financialService from '../services/financialService.js';

async function createEvent(req, res) {
  const { user } = res.locals;
  const { value, type } = req.body;

  try {
    const result = await financialService.createEvent(user.id, value, type );
    if (!result) return res.sendStatus(400);

    res.sendStatus(201);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export { createEvent };
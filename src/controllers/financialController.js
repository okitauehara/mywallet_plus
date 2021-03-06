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

async function getEvents(req, res) {
  const { user } = res.locals;

  try {
    const events = await financialService.getEvents(user.id);

    res.send(events.rows);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getTotal(req, res) {
  const { user } = res.locals;

  try {
    const events = await financialService.getTotal(user.id);
    const sum = events.rows.reduce((total, event) => event.type === 'INCOME' ? total + event.value : total - event.value, 0);

    res.send({ sum });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

export { createEvent, getEvents, getTotal };
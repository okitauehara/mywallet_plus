import * as financialRepository from '../repositories/financialRepository.js';

async function createEvent(userId, value, type) {
  if (!value || !type) {
    return null;
  }
  if (!['INCOME', 'OUTCOME'].includes(type)) {
    return null;
  }
  if (value < 0) {
    return null;
  }

  return await financialRepository.createEvent({ userId, value, type })
}

async function getEvents(userId) {
  return await financialRepository.getEvents(userId);
}

async function getTotal(userId) {
  return await financialRepository.getTotal(userId);
}

export { createEvent, getEvents, getTotal };
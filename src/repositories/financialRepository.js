import connection from '../database.js';

async function createEvent({ userId, value, type }) {
  return await connection.query(
    'INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3) RETURNING *',
    [userId, value, type]
  );
}

export { createEvent };
import connection from '../database.js';

async function findByEmail(email) {
  const existingUserWithGivenEmail = await connection.query(
    `SELECT * FROM "users" WHERE "email"=$1`,
    [email]
  );

  return existingUserWithGivenEmail.rowCount;
}

async function createUser({ name, email, password }) {
  const result = await connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *`,
    [name, email, password]
  );

  return result.rows[0];
}

export { findByEmail, createUser };
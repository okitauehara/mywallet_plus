import connection from '../database.js';

async function signUp({ name, email, password }) {
  return await connection.query(
    'INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );
}

async function getUser(email) {
  return await connection.query('SELECT * FROM "users" WHERE "email"=$1',
    [email]
  );
}

export { signUp, getUser };
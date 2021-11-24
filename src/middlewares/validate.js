import jwt from 'jsonwebtoken';

export default async function validate(req, res, next) {
  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.sendStatus(401);

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.locals.user = user;

    next();
  } catch {
    return res.sendStatus(401);
  }
}
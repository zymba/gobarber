import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Jon 2',
    email: 'mail2@example.com',
    password_hash: '87638764',
  });

  return res.json(user);
});

export default routes;

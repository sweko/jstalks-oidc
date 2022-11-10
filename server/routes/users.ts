import {Request, Response, NextFunction} from 'express';
import express from 'express';

export const usersRouter = express.Router();

/* GET users listing. */
usersRouter.get('/', (_req: Request, res: Response, _next: NextFunction) =>   {
  res.send('respond with a resources');
});



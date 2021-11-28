import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.info('Request....');
    const allowedOrigins = [
      'http://localhost:3000',
      'https://frontend-reactjs-iw8gz4z3b-noobs-discord.vercel.app',
    ];
    if (allowedOrigins.indexOf(req.header('Origin'))) {
      res.header('Access-Control-Allow-Origin', req.header('Origin'));
      res.header('Access-Control-Allow-Headers', 'content-type');
      res.header('Access-Control-Allow-Methods', 'POST');
    }
    next();
  }
}

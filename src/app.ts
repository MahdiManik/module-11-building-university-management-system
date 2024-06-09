import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/config/middleware/globalErrorHandler';
import { notFound } from './app/config/middleware/notFound';
import router from './app/config/routes';

const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.json('Connected with database successfully');
});

app.get('/');

app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;

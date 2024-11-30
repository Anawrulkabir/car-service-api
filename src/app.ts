import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { CarRoutes } from './app/modules/car/car.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api', CarRoutes);
// app.use('/api', OrderRoutes)

const getAController = (req: Request, res: Response) => {
  res.send('Hello from car service Api');
};

app.get('/', getAController);

export default app;

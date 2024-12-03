import express from 'express';
import { OrderController } from './order.controller';

const router = express.Router();

// call the controller functions
router.post('/orders', OrderController.orderACar);
router.get('/orders/revenue', OrderController.generateRevenue);

export const OrderRoutes = router;

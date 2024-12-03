import { Request, Response } from 'express';
import orderValidationSchema from './order.validator.zod';
import { OrderServices } from './order.service';

const orderACar = async (req: Request, res: Response) => {
  try {
    console.log('Received order request:', req.body);
    const orderData = req.body;

    console.log('Validating order data...');
    const zodValidateData = orderValidationSchema.parse(orderData);

    console.log('Creating order in database...');
    const result = await OrderServices.creatAOrderIntoDB(zodValidateData);

    console.log('Order created successfully:', result);

    res.status(200).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err) {
    console.error('Error in orderACar:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err instanceof Error ? err.message : String(err),
    });
  }
};

const generateRevenue = async (req: Request, res: Response) => {
  try {
    console.log('Generating revenue...');
    const result = await OrderServices.getRevenue();

    console.log('Revenue generated:', result);

    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (err) {
    console.error('Error in generateRevenue:', err);
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err instanceof Error ? err.message : String(err),
    });
  }
};

export const OrderController = {
  orderACar,
  generateRevenue,
};

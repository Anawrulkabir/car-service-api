import { z } from 'zod';

// validator will validate the request data from body
const orderValidationSchema = z.object({
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  car: z.string().min(1, 'Car is required'),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .positive('Quantity must be greater than 0'),
  totalPrice: z
    .number()
    .positive('Total price must be greater than 0')
    .nonnegative('Total price cannot be negative'),
});

export default orderValidationSchema;

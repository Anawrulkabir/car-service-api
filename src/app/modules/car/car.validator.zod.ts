// car.validator.zod.ts
import { z } from 'zod';

// Zod Schema for validating the Car model
export const carValidationSchema = z.object({
  brand: z.string().min(1, 'Brand is required'), // Brand is required and should be a string
  year: z
    .number()
    .int('Year must be an integer')
    .min(1886, 'Year must be after the invention of cars') // Minimum year limit
    .max(new Date().getFullYear(), 'Year cannot be in the future'), // Ensures year is not in the future
  price: z.number().positive('Price must be a positive number'), // Price must be positive
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    errorMap: () => {
      return { message: 'Invalid category' };
    },
  }), // Enum validation for the category
  description: z.string().min(1, 'Description is required'), // Description cannot be empty
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .min(1, 'Quantity must be at least 1'), // Quantity must be at least 1
  inStock: z.boolean(), // Boolean for inStock status
});

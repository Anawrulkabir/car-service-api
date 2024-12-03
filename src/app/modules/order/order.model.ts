import { model, Schema } from 'mongoose';
import { Order } from './order.interface';

const orderSchema = new Schema<Order>({
  email: { type: String, required: true },
  car: { type: String, required: true },
  quantity: { type: Number, required: true },
  totalPrice: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const OrderModel = model<Order>('Orders', orderSchema);

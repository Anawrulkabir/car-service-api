import { CarModel } from '../car/car.model';
import { ObjectId } from 'mongodb';
import { OrderModel } from './order.model';
import { Order } from './order.interface';
import { Car } from '../car/car.interface';

const creatAOrderIntoDB = async (orderRequest: Order) => {
  const { email, car, quantity: requestedQuantity, totalPrice } = orderRequest;

  const carData: Car | null = await CarModel.findOne({
    _id: new ObjectId(car),
  });

  if (!carData) {
    throw new Error('Car not found');
  }

  const { quantity, inStock } = carData;
  console.log(quantity, inStock);

  if (quantity < requestedQuantity) throw new Error('Not enough stock');

  // create the order
  const order = await OrderModel.create({
    email,
    car,
    quantity: requestedQuantity,
    totalPrice,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });

  // update the car stock
  await CarModel.updateOne(
    { _id: new ObjectId(car) },
    {
      $set: {
        quantity: quantity - requestedQuantity,
        inStock: quantity - requestedQuantity > 0 ? true : false,
      },
    },
  );

  return order;
};

const getRevenue = async () => {
  // aggregate the total revenue
  const totalRevenue = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return {
    totalRevenue: totalRevenue[0].totalRevenue,
  };
};

export const OrderServices = {
  creatAOrderIntoDB,
  getRevenue,
};

import { Car } from './car.interface';
import { CarModel } from './car.model';
import { ObjectId } from 'mongodb';

// BUSINESS LOGIC

// create a car into db
const createCarIntoDB = async (car: Car) => {
  const result = await CarModel.create(car);
  return result;
};

// get a car by carId
const getSingleCarFromDB = async (carId: string) => {
  const result = await CarModel.findOne({ _id: new ObjectId(carId) });
  return result;
};

// get all cars
const getAllCarsFromDB = async () => {
  const result = await CarModel.find();
  return result;
};

// update car data
const updateCarData = async (carId: string, updatedData: Car) => {
  const id = new ObjectId(carId);
  const result = await CarModel.updateOne({ _id: id }, { $set: updatedData });
  const newData = await CarModel.find({ _id: id });

  if (result.modifiedCount === 1) {
    return newData;
  }
  return result;
};

// delete a car data
const deleteCarData = async (carId: string) => {
  const id = new ObjectId(carId);
  const result = await CarModel.deleteOne({ _id: id });

  if (result.deletedCount === 1) {
    return {};
  }
  return result;
};

export const CarService = {
  createCarIntoDB,
  getSingleCarFromDB,
  getAllCarsFromDB,
  updateCarData,
  deleteCarData,
};

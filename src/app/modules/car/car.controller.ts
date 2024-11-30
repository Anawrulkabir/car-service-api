import { Request, Response } from 'express';
import { CarService } from './car.service';
import { carValidationSchema } from './car.validator.zod';

const createCar = async (req: Request, res: Response) => {
  try {
    const carData = req.body;

    const zodValidateData = carValidationSchema.parse(carData); // validating the data from req.body using zod library

    const result = await CarService.createCarIntoDB(zodValidateData);

    res.status(200).json({
      success: true,
      message: 'Car created successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const getSingleCarByCarId = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarService.getSingleCarFromDB(carId);
    res.status(200).json({
      success: true,
      message: 'Car retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const getAllCars = async (req: Request, res: Response) => {
  try {
    const result = await CarService.getAllCarsFromDB();
    res.status(200).json({
      success: true,
      message: 'Cars retrieved successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const updateCarData = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const updateRequest = req.body;
    const result = await CarService.updateCarData(carId, updateRequest);
    res.status(200).json({
      success: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const deleteCarData = async (req: Request, res: Response) => {
  try {
    const carId = req.params.carId;
    const result = await CarService.deleteCarData(carId);
    res.status(200).json({
      success: true,
      message: 'Car deleted successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

export const CarController = {
  createCar,
  getSingleCarByCarId,
  getAllCars,
  updateCarData,
  deleteCarData,
};

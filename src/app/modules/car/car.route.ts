import express from 'express';
import { CarController } from './car.controller';

const router = express.Router();

// call the controller function
router.post('/cars', CarController.createCar); // create a car
router.get('/cars', CarController.getAllCars); // get all cars
router.get('/cars/:carId', CarController.getSingleCarByCarId); // get a car by carId
router.put('/cars/:carId', CarController.updateCarData); // update car data by carId
router.delete('/cars/:carId', CarController.deleteCarData); // delete a car by carId

// export the 'router'
export const CarRoutes = router;

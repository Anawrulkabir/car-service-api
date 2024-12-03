# **Car Store API**

A modular Node.js and TypeScript backend application for managing cars and orders in an e-commerce platform. This project implements clean architecture using services, controllers, and validators with Zod and Joi.

## **Table of Contents**

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Installation](#installation)
4. [Usage](#usage)
5. [API Endpoints](#api-endpoints)
6. [Project Structure](#project-structure)
7. [Environment Variables](#environment-variables)
8. [Available Scripts](#available-scripts)
9. [Contributing](#contributing)
10. [License](#license)

## **Features**

- **Car Management**  
  Add, update, delete, and fetch car details.
- **Order Management**  
  Manage customer orders and inventory.
- **Validation**  
  Request validation using **Zod** and **Joi** for type safety and robustness.
- **Scalable Architecture**  
  Modular design for better scalability and maintenance.

## **Technologies Used**

- **Node.js**
- **Express.js**
- **TypeScript**
- **MongoDB**
- **Zod** & **Joi** for validation
- **ESLint** and **Prettier** for linting and formatting

## **Installation**

### **1. Clone the repository**

```bash
git clone https://github.com/Anawrulkabir/car-service-api.git
cd car-store-api
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Configure environment variables**

Create a `.env` file in the root directory and add the following:

```
PORT=8080
DATABASE_URL=your_mongodb_connection_string
```

### **4. Build the project**

```bash
npm run build
```

### **5. Start the development server**

```bash
npm run start:dev
```

### **6. Start the production server**

```bash
npm run start:prod
```

## **Usage**

Use tools like [Postman](https://www.postman.com/) or [Thunder Client](https://www.thunderclient.io/) to test the API endpoints.

## **API Endpoints**

### **Car Endpoints**

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| POST   | `/api/cars`     | Add a new car              |
| GET    | `/api/cars`     | Fetch all cars             |
| GET    | `/api/cars/:id` | Fetch a specific car by ID |
| PUT    | `/api/cars/:id` | Update car details         |
| DELETE | `/api/cars/:id` | Delete a car by ID         |

### **Order Endpoints**

| Method | Endpoint          | Description                  |
| ------ | ----------------- | ---------------------------- |
| POST   | `/api/orders`     | Place a new order            |
| GET    | `/api/orders`     | Fetch all orders             |
| GET    | `/api/orders/:id` | Fetch a specific order by ID |
| DELETE | `/api/orders/:id` | Cancel an order by ID        |

## **Project Structure**

```
src/
├── app/
│   ├── config/               # Configuration files
│   │   └── index.ts          # MongoDB connection
│   ├── modules/              # Feature modules
│   │   ├── car/
│   │   │   ├── car.controller.ts   # Car controller
│   │   │   ├── car.interface.ts    # Car interfaces
│   │   │   ├── car.model.ts        # Car schema/model
│   │   │   ├── car.route.ts        # Car routes
│   │   │   ├── car.service.ts      # Car service
│   │   │   ├── car.validator.joi.ts # Joi validation for cars
│   │   │   └── car.validator.zod.ts # Zod validation for cars
│   │   ├── order/
│   │   │   ├── order.controller.ts # Order controller
│   │   │   ├── order.interface.ts  # Order interfaces
│   │   │   ├── order.model.ts      # Order schema/model
│   │   │   ├── order.route.ts      # Order routes
│   │   │   ├── order.service.ts    # Order service
│   │   │   ├── order.validator.joi.ts # Joi validation for orders
│   │   │   └── order.validator.zod.ts # Zod validation for orders
├── app.ts                    # Application setup
├── server.ts                 # Entry point for the server
```

## **Environment Variables**

| Variable    | Description               | Example                  |
| ----------- | ------------------------- | ------------------------ |
| `PORT`      | Server port number        | `5000`                   |
| `MONGO_URI` | MongoDB connection string | `mongodb://localhost...` |

## **Available Scripts**

| Script | Command | Description |
| --- | --- | --- |
| `start:prod` | `node ./dist/server.js` | Start the production server |
| `start:dev` | `ts-node-dev --respawn --transpile-only` | Start the development server with hot reload |
| `build` | `tsc` | Build the project into JavaScript |
| `lint` | `eslint src` | Lint the source files |
| `lint:fix` | `eslint src --fix` | Fix linting errors |
| `prettier` | `prettier --write` | Format source files |
| `prettier:fix` | `prettier --write src` | Format source files and fix issues |

## **Contributing**

Contributions are welcome! Here's how you can contribute:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Make changes and commit them: `git commit -m 'Added feature XYZ'`.
4. Push the changes to your branch: `git push origin feature-name`.
5. Open a pull request.

## **License**

This project is licensed under the [MIT License](LICENSE).

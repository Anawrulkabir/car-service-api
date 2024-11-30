import cors from 'cors'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

//parsers
app.use(express.json())
app.use(cors())

// application routes
// app.use('/api/v1/cars')
// app.use('/api/v1/orders')

const getAController = (req: Request, res: Response) => {
  res.send('Hello from car service backend')
}

app.get('/', getAController)

export default app

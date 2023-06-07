import { Router, Request, Response } from "express"

export const helloRouter = Router();

helloRouter.get('/', (req : Request, res : Response) => {
  res.send('Hello in hello routes !')
})


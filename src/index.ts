import express, { Request, Response} from "express"
import { helloRouter } from "./routes/hello.js"

const app = express()


const port = 3000
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use("/hello", helloRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
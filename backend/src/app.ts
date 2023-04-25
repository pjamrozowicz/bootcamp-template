import express, { Express } from "express"
import cors from "cors"

const PORT = 4001;

const app: Express = express()

app.use(cors())

app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
)

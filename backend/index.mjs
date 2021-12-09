import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import users from "./Routes/users.mjs"
import recettes from "./Routes/recettes.mjs"
import attendances from "./Routes/attendances.mjs"

const app = express()
const port = process.env | 8081

// Midlewares
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use((req, res, next) => {
    console.log(req.url)
    next()
})

app.get("/", (req, res, next) => res.send({ info: "Welcome!" }));

// Routes
app.use("/api/users", users)
app.use("/api/recettes", recettes)
app.use("/api/attendances", attendances)

app.listen(port, () => {
    console.log(`Connected on http://localhost:${port}/`)
})

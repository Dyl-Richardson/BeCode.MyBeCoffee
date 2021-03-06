import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

const pgClient = pg.Pool

const client = new pgClient({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    dialect: "postgres",
      ssl: {
        rejectUnauthorized: false // This line will fix new error
      }
})

export default client
import pg from "pg"
import dotenv from "dotenv"

dotenv.config()

pg.defaults.ssl = true

const pgClient = pg.Client

const client = new pgClient({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
})

export default client

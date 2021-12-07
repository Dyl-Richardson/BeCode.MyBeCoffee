import pg from "pg"

const pgClient = pg.Client

const client = new pgClient({
    user: "postgres",
    host: "localhost", //
    database: "poudlard",
    password: "password",
    port: 5432 // /tcp
})

client.connect()

export default client

import pg from "pg"

const pgClient = pg.Client

const client = new pgClient({
    user: "postgres",
    host: "172.17.0.2", //
    database: "becoffe",
    password: "secretpassword",
    port: 5432 // /tcp
})

client.connect()

export default client



import pg from "pg"

const pgClient = pg.Client

const client = new pgClient({
    user: "postgres",
    host: "172.17.0.2",
    database: "becoffe",
    password: "becoffe",
    port: 5432
})

export default client
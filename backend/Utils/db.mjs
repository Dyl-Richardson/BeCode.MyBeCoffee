// import pg from "pg"

// const pgClient = pg.Client

// const client = new pgClient({
//     user: "postgres",
//     host: "localhost", //
//     database: "poudlard",
//     password: "password",
//     port: 5432 // /tcp
// })

// client.connect()

// export default client

// import SQLite from "sqlite-async";

// async function test() {
//     const db = await SQLite.open("database");

//     const users = await db.all(
//         "SELECT * FROM users"
//     )
//     console.log(users);
//     db.close();
//     return users;
// }

// test()
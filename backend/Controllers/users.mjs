import client from "../Utils/db.mjs"

export const createUser = async (req, res) => {
    console.log("test") 
    client.connect()
    // try {
    //     const result = await client.query("SELECT * FROM test")
    //     console.log(result)
    //     res.send(result)

    // } catch(err) {
    //     res.send(err)
    //     console.log(err)
    // }

        const result = await client.query("SELECT * FROM test")
        console.log(result)
        res.send(result)

}



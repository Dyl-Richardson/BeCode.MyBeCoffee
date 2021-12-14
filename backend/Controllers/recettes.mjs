import pool from "../Utils/db.mjs"

// Create
export const create = async (req, res) => {
    const {idUser, name, date} = req.body
    try {
        if (idUser !== null) {
            if (name !== null) {
                if (date !== null) {
                    const result = pool.query("INSERT INTO recettes (idUser, name, date) VALUES ($1,$2,$3)",[idUser, name, date])
                } else {
                    res.status(400).send({ error: "Invalid date" })
                }
            } else {
                res.status(400).send({ error: "Invalid name" })
            }
        } else {
            res.status(400).send({ error: "Invalid user id" })
        }
    }catch (error) {
        console.log(error)
        res.status(500).send({error: "Internal server error"})
    }
}

// Read
export const allByDate = async (req, res) => {
    const {year, month} = req.body
    try {
        if (year !== null & month !== null) {
            const result = pool.query("SELECT * FROM recettes WHERE date LIKE '%$1%' AND date LIKE '%$2%'", [year, month])
        } else {
            res.status(400).send({ error: "Invalid date" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: "Internal server error"})
    }
}

// Update 
export const modify = async (req, res) => {
    const {name} = req.body
    try {
        if (name !== null) {
            const result = pool.query("UPDATE recettes SET name=$1 WHERE name=$1",[name])
        } else {
        res.status(400).send({error: "Invalid name"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({error: "Internal server error"})
    }
}

// Delete Internal server error
export const deleteRecette = async (req, res) => {
    const {idRecette} = req.body
    try{
        if (idRecette !== null) {
            const result = pool.query("DELETE FROM recettes WHERE idRecette=$1",[idRecette])
        } else {
        res.status(400).send({error: "Invalid id"})
        }
    } catch (error){
        console.log(error)
        res.status(500).send({error: "Internal server error"})
    }
}
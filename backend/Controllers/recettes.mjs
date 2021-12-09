// import client from "../Utils/db.mjs"

// Create
export const createRecette = async (idUser, name, date) => {
    const db = await SQLite.open("database")
    const recettes = await db.all(
        "INSERT INTO recettes (idUser, name, date) VALUES (?,?,?)",[idUser, name, date]
    )
    db.close()
    return recettes
}

// Read
export const readRecette = async (name, date => {
    const db = await SQLite.open("database")
    const recettes = await db.all(
        "SELECT name, date FROM recettes WHERE name=? AND date=?",[name,date]
    )
    db.close()
    return recettes
}

// Update

// Delete

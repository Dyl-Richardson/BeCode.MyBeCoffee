import SQLite from "sqlite-async";
import bcrypt from "bcrypt"
import pool from "../Utils/db.mjs";

// Register
function validateEmail(email) 
    {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }

    const regName = /^[a-zA-Z]+$/;

export async function register(req, res) {
    const { lastName, firstName, email, password } = req.body
    try {
        if ((regName.test(lastName) === true)&&(regName.test(firstName) === true))
            if (validateEmail(email) === true) {
                if (password.length >= 6) {
                    const hashedPassword = await bcrypt.hash(password, 10)
                    const users = await pool.query(
                        "INSERT INTO users (lastname, firstname, email, password, accounttype) VALUES ($1, $2, $3, $4, 'false')", [lastName, firstName, email, hashedPassword]
                    )
                    res.status(200).send(users);
                }
                else {
                    res.status(400).send({ error: "Password too short!" });
                }
            }
            else {
                res.status(400).send({ error: "Invalid email!" });
            }
        else {
            res.status(400).send({ error: "Invalid firstName or lastName" });
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Login

export async function login(req, res) {
    const users = await pool.query(
        "SELECT * FROM users"
    )
    const user = users.find(user => user.email === req.body.email)
    if (user == null) {
        return res.status(400).send({ error: "Incorret email/password!" })
    }

    try {
        if (await bcrypt.compare(req.body.password, user.password)) {

        }
        else {
            res.status(400).send({ error: "Incorret email/password!" })
        }
    } catch {
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Patch

export async function editUser() {
    const idUser = req.body.idUser
    const accountType = req.body.accountType
    const users = await pool.query(
        "UPDATE users SET accountType = ? WHERE idUser = ?", [accountType, idUser]
    )
}

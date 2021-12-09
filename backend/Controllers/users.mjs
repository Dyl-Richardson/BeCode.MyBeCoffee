import bcrypt from "bcrypt"
import pool from "../Utils/db.mjs";
import { v4 as uuid } from "uuid"


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
                        "INSERT INTO users (iduser, lastname, firstname, email, password, accounttype) VALUES ($1, $2, $3, $4, $5, 'false')", [uuid(), lastName, firstName, email, hashedPassword]
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
    try {
        const users = await pool.query("SELECT * FROM users WHERE email = $1", [req.body.email])

        if (users.rows.length === 0) {

            return res.status(400).send({ error: "Incorret email/password!" })

        } else {

            if (await bcrypt.compare(req.body.password, users.rows[0].password)) {
                res.send({userId: users.rows[0].iduser})
            }
            else {
                res.status(400).send({ error: "Incorret email/password!" })
            }

        }

    } catch {
        res.status(500).send({ error: "Internal Server Error" })
    }
}

// Patch

export async function editUser(req, res) {
    let type = ""
    try {
        const users = await pool.query("SELECT * FROM users WHERE iduser = $1", [req.body.iduser])
        if (users.rows.length === 0) {
            res.status(400).send({ error: "Incorret iduser!" })
        }
        else {
            if (users.rows[0].accounttype === "false") type = "true"
            else type = "false"

            const patch = await pool.query("UPDATE users SET accounttype = $1 WHERE iduser = $2", [type, req.body.iduser])
            res.send({accounttype: req.body.accounttype})
        }
    } catch (err){
        res.status(500).send({ error: "Internal Server Error" })
    }
}
// import client from "../Utils/db.mjs"
import SQLite from "sqlite-async";
import bcrypt from "bcrypt"
import client from "../Utils/db.mjs";

// Register
function validateEmail(email) 
    {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return re.test(email);
    }

    const regName = /^[a-zA-Z]+$/;

export async function register(req, res) {
    // const db = await SQLite.open("../Utils/database");
    // const { lastName, firstName, email, password } = req.body
    // try {
    //     if ((regName.test(lastName) === true)&&(regName.test(firstName) === true))
    //         if (validateEmail(email) === true) {
    //             if (password.length >= 6) {
    //                 const hashedPassword = await bcrypt.hash(password, 10)
    //                 const users = await db.all(
    //                     "INSERT INTO users (lastName, firstName, email, password, accountType) VALUES (?, ?, ?, ?, 0)", [lastName, firstName, email, hashedPassword]
    //                 )
    //                 res.status(200).send(users);
    //             }
    //             else {
    //                 res.status(400).send({ error: "Password too short!" });
    //             }
    //         }
    //         else {
    //             res.status(400).send({ error: "Invalid email!" });
    //         }
    //     else {
    //         res.status(400).send({ error: "Invalid firstName or lastName" });
    //     }
    // } catch (error) {
    //     console.log(error)
    //     res.status(500).send({ error: "Internal Server Error" })
    // }
    // db.close();

    client.connect()
    try {
        const result = await client.query("SELECT * FROM users")
        console.log(result)
    } catch (err) {
        console.log(err)
    }
    client.close()
    
}

// Login

export async function login(req, res) {
    const db = await SQLite.open("database");
    const users = await db.all(
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
    db.close();
    return users;
}

// Patch

export async function editUser() {
    const idUser = req.body.idUser
    const accountType = req.body.accountType
    const db = await SQLite.open("database");
    const users = await db.all(
        "UPDATE users SET accountType = ? WHERE idUser = ?", [accountType, idUser]
    )
    console.log(users);
    db.close();
    return users;
}

// post /api/users/register

// - lastName, firstName, password, email, account_type (default 0)
// - Vérification des identifiants (longueur mot de passe 6 caractères, caractères spéciaux dans les informations données (regex) )
// - Crypté le mot de passe avec bcrypt

// get /api/users/login

// - email, password
// - regex pour l'email
// - bcrypt.compare(password et le mot de passe chercher dans la bdd)
// - error Mot de passe/email invalide

// path /api/users/type

// - idUser
// - modifier le account_type si student → prof, si prof → student
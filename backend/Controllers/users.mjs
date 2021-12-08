// import client from "../Utils/db.mjs"
import SQLite from "sqlite-async";
import bcrypt from "bcrypt"

// Register

export async function register(req, res) {
    const db = await SQLite.open("database");
    try {
        const password = req.body.password
        if (password.length > 6) {
            const hashedPassword = await bcrypt.hash(req.body.password, 10)
            const lastName = req.body.lastName
            const firstName = req.body.firstName
            const email = req.body.email
            const users = await db.all(
                "INSERT INTO users (lastName, firstName, email, password, accountType) VALUES (?, ?, ?, ?, 0)", [lastName, firstName, email, hashedPassword]
            )
            // redirect to login page after creation
            res.redirect('/login')
        }
        else {
            res.status(400).send({ error: "Incorret password!" });
        }

    } catch {
        res.status(500).send({ error: "Internal Server Error" })
    }
    db.close();
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
            // redirect to home page after login
            res.redirect('/home')
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
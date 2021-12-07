import React from 'react'
import { Link } from "react-router-dom"

export default function SignIn() {
    return (
        <main className='main-login'>
            <h1>Sign In</h1>
            <form>
                <div>
                    <label htmlFor="email">Mail Adress</label>
                    <input type="email" />
                </div>
                <div>
                    <label htmlFor="email">Password</label>
                    <input type="password" />
                </div>
                <button>Connexion</button>
                <div>
                    <p>Not account ? <Link to="/signup" >Sign Up</Link></p>
                </div>
            </form>
        </main>
    )
}

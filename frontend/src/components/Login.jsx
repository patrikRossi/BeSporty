import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

/**
 * Login “leggero”:
 * 1) prova a chiamare il BE: GET /api/users/by-username/{username}
 *    (se hai aggiunto l’endpoint come suggerito)
 * 2) fallback: se in localStorage è presente un utente con lo stesso username, usa quello
 */
export default function Login({ onLoginSuccess }) {
    const [form, setForm] = useState({ username: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            // Tentativo A: endpoint BE (consigliato)
            const res = await axios.get(
                `${BASE_URL}/users/by-username/${encodeURIComponent(form.username)}`
            );
            const user = res.data; // atteso: { id, username, email, ... }
            localStorage.setItem("besporty:user", JSON.stringify(user));
            onLoginSuccess?.(user);
            // es. redirect: window.location.href = "/checkin";
            return;
        } catch (_) {
            // ignora, prova fallback
        }

        try {
            // Tentativo B: fallback su localStorage (ultimo registrato)
            const saved = localStorage.getItem("besporty:user");
            if (saved) {
                const user = JSON.parse(saved);
                if (user?.username?.toLowerCase() === form.username.toLowerCase()) {
                    onLoginSuccess?.(user);
                    return;
                }
            }
            throw new Error("Utente non trovato");
        } catch (err) {
            setError("Login fallito: utente non trovato.");
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                {error && <div className="error" style={{color:"red"}}>{error}</div>}
                <button type="submit" className="btn-accent">Login</button>
            </form>
        </div>
    );
}

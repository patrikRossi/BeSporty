import React, { useState } from "react";
import { ApiService } from "../services/ApiService";

const checkInSlots = ["6-8", "12-14", "18-20"];

export default function Register({ onRegisterSuccess }) {
    const [form, setForm] = useState({
        username: "",
        password: "",
        email: "",
        sportPreference: "",
        checkInSlot: checkInSlots[0],
    });
    const [error, setError] = useState("");
    const [ok, setOk] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); setOk("");
        try {
            // ApiService.register ritorna { id, username, email, ... }
            const data = await ApiService.register(form);

            // Salvo l’utente per riutilizzarlo in tutto il FE (prima di AuthContext)
            localStorage.setItem("besporty:user", JSON.stringify(data));

            setOk("Registrazione completata! Sei loggato.");
            onRegisterSuccess?.(data);
            // es. redirect: window.location.href = "/checkin";
        } catch (err) {
            setError(err.message || "Registrazione fallita.");
        }
    };

    return (
        <div className="register-container">
            <h2>Registrati su BeSporty!</h2>
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
                <input name="sportPreference" placeholder="Sport preferito" value={form.sportPreference} onChange={handleChange} required />
                <label>
                    Fascia oraria allenamento:
                    <select name="checkInSlot" value={form.checkInSlot} onChange={handleChange}>
                        {checkInSlots.map((slot) => (
                            <option key={slot}>{slot}</option>
                        ))}
                    </select>
                </label>

                {error && <div className="error" style={{color:"red"}}>{error}</div>}
                {ok && <div style={{color:"limegreen"}}>{ok}</div>}

                <button type="submit" className="btn-accent">Registrati</button>
            </form>
        </div>
    );
}

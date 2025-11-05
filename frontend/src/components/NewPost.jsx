import React, { useMemo, useState } from "react";
import { ApiService } from "../services/ApiService";
import { FaCamera } from "react-icons/fa";

export default function NewPost({ user, onPostCreated }) {
    // Se non passa da props, prova a leggerlo da localStorage
    const storedUser = useMemo(() => {
        try {
            const raw = localStorage.getItem("besporty:user");
            return raw ? JSON.parse(raw) : null;
        } catch {
            return null;
        }
    }, []);
    const effectiveUser = user || storedUser;

    const [form, setForm] = useState({
        text: "",
        imageUrl: "",
        sport: effectiveUser?.sportPreference || "",
        feeling: "",
        intensity: 0,
        visibility: "PUBLIC",
    });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); setSuccess("");

        if (!effectiveUser || !effectiveUser.id) {
            setError("Devi effettuare l'accesso per condividere un check-in.");
            return;
        }

        try {
            await ApiService.createPost(effectiveUser.id, form);
            setForm({
                text: "",
                imageUrl: "",
                sport: effectiveUser?.sportPreference || "",
                feeling: "",
                intensity: 0,
                visibility: "PUBLIC",
            });
            setSuccess("Check-in condiviso con successo!");
            onPostCreated?.();
        } catch (err) {
            setError(err.message || "Impossibile creare post.");
        }
    };

    return (
        <div className="newpost-container" style={{ marginTop: "20px" }}>
            <h3 style={{ color: "#2ed573" }}>
                <FaCamera style={{ marginRight: "8px" }} />
                Nuovo allenamento
            </h3>

            <form onSubmit={handleSubmit}>
        <textarea
            name="text"
            placeholder="Come è andato l'allenamento?"
            value={form.text}
            onChange={handleChange}
            required
        />

                <input
                    name="imageUrl"
                    placeholder="URL foto/video (facoltativo)"
                    value={form.imageUrl}
                    onChange={handleChange}
                />

                <input
                    name="sport"
                    placeholder="Sport praticato"
                    value={form.sport}
                    onChange={handleChange}
                    required
                />

                <input
                    name="feeling"
                    placeholder="Sensazione (es: motivato, stanco...)"
                    value={form.feeling}
                    onChange={handleChange}
                />

                <input
                    name="intensity"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="Intensità (1-10)"
                    value={form.intensity}
                    onChange={handleChange}
                />

                <select
                    name="visibility"
                    value={form.visibility}
                    onChange={handleChange}
                >
                    <option value="PUBLIC">Pubblico</option>
                    <option value="FRIENDS">Solo amici</option>
                    <option value="PRIVATE">Privato</option>
                </select>

                {error && <div className="error" style={{ color: "red", marginTop: 10 }}>{error}</div>}
                {success && <div className="success" style={{ color: "limegreen", marginTop: 10 }}>{success}</div>}

                <button
                    type="submit"
                    className="btn-accent"
                    style={{
                        marginTop: 15,
                        background: "#2ed573",
                        color: "#fff",
                        padding: "10px 16px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                    }}
                >
                    Condividi
                </button>
            </form>
        </div>
    );
}

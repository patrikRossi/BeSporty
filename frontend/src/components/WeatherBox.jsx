import React, { useState } from "react";
import axios from "axios";
import { FaCloudSun, FaSearch } from "react-icons/fa";

const API_KEY = "c387a3b9b9c9ceb02c2a7ca425f201ad"; // <--- Metti la tua vera chiave!

export default function WeatherBox() {
    const [city, setCity] = useState("Roma");
    const [data, setData] = useState(null);
    const [error, setError] = useState("");

    const getWeather = async (e) => {
        e.preventDefault();
        setError("");
        setData(null);
        try {
            const res = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=it&appid=${API_KEY}`
            );
            setData(res.data);
        } catch (err) {
            setError("Città non trovata o errore nella richiesta.");
        }
    };

    return (
        <div style={{
            background: "#181818",
            color: "#fff",
            border: "2px solid #2ed57377",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "18px",
            maxWidth: 340,
            margin: "auto"
        }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8, color: "#2ed573" }}>
                <FaCloudSun /> Meteo allenamento
            </h3>
            <form onSubmit={getWeather} style={{ marginBottom: 10 }}>
                <input
                    type="text"
                    value={city}
                    placeholder="Inserisci città"
                    onChange={e => setCity(e.target.value)}
                    style={{ marginRight: 6, width: 180, fontFamily: "Azonix, Arial, sans-serif" }}
                />
                <button className="btn-accent" type="submit" style={{ padding: "8px 12px", marginTop: 0 }}>
                    <FaSearch />
                </button>
            </form>
            {error && <div className="error">{error}</div>}
            {data && (
                <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 22 }}>{data.name} ({data.sys.country})</div>
                    <div style={{ fontWeight: "bold", color: "#fda085", fontSize: 32 }}>
                        {Math.round(data.main.temp)}°C
                    </div>
                    <div>{data.weather[0].description}</div>
                    <div>💧 Umidità: {data.main.humidity}%</div>
                    <div>🌬️ Vento: {data.wind.speed} m/s</div>
                </div>
            )}
        </div>
    );
}

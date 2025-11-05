import React from "react";
import { FaUsers } from "react-icons/fa";

export default function GroupsScreen() {
    // Qui aggiungerai l’elenco gruppi, sfide, join, ecc.
    return (
        <div style={{ padding: "24px", background: "#181818", minHeight: "100vh" }}>
            <div style={{
                background: "#222",
                color: "#fff",
                padding: "30px 18px",
                borderRadius: "22px",
                margin: "0 auto",
                maxWidth: "600px",
                boxShadow: "0 2px 18px #2ed57333"
            }}>
                <h2 style={{
                    color: "#2ed573",
                    marginBottom: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    display: "flex", alignItems: "center", gap: 10
                }}><FaUsers /> Gruppi & Challenge</h2>
                <p style={{ color: "#fda085", marginBottom: 28 }}>
                    Unisciti ai gruppi di atleti o crea il tuo!
                    Partecipa alle challenge settimanali per vincere badge esclusivi.
                </p>
                <div style={{
                    display: "flex", flexWrap: "wrap", gap: 20, justifyContent: "center"
                }}>
                    {/* Placeholder cards gruppi */}
                    <div style={{
                        background: "#181818",
                        border: "1.5px solid #2ed57388",
                        borderRadius: 15,
                        padding: "18px 22px",
                        minWidth: 180,
                        minHeight: 80,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "#2ed573",
                        fontWeight: 600
                    }}>
                        <span style={{ fontSize: 32, marginBottom: 8 }}>⚽</span>
                        Runner di Milano
                    </div>
                    <div style={{
                        background: "#181818",
                        border: "1.5px solid #fda08588",
                        borderRadius: 15,
                        padding: "18px 22px",
                        minWidth: 180,
                        minHeight: 80,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        color: "#fda085",
                        fontWeight: 600
                    }}>
                        <span style={{ fontSize: 32, marginBottom: 8 }}>🏋️‍♀️</span>
                        Donne & Crossfit
                    </div>
                    {/* Aggiungi qui altri gruppi quando vuoi */}
                </div>
            </div>
        </div>
    );
}

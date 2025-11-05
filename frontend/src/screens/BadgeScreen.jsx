import React from "react";
import { FaTrophy, FaBolt, FaMedal } from "react-icons/fa";

export default function BadgeScreen() {
    // Qui visualizzerai tutti i badge sbloccabili, motivazione, statistiche...
    return (
        <div style={{ padding: "24px", background: "#181818", minHeight: "100vh" }}>
            <div style={{
                background: "#222",
                color: "#fff",
                padding: "30px 18px",
                borderRadius: "22px",
                margin: "0 auto",
                maxWidth: "500px",
                boxShadow: "0 2px 18px #2ed57333"
            }}>
                <h2 style={{
                    color: "#2ed573",
                    marginBottom: 10,
                    fontWeight: 700,
                    letterSpacing: 2,
                    display: "flex", alignItems: "center", gap: 10
                }}><FaTrophy /> Badge & Statistiche</h2>
                <p style={{ color: "#fda085", marginBottom: 24 }}>
                    Completa check-in e challenge per ottenere badge esclusivi e monitora i tuoi progressi!
                </p>
                <div style={{
                    display: "flex", gap: 18, flexWrap: "wrap", justifyContent: "center"
                }}>
                    {/* Badge visivi placeholder */}
                    <div style={{
                        background: "#2ed573", color: "#000", borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30
                    }}>
                        <FaTrophy />
                    </div>
                    <div style={{
                        background: "#fda085", color: "#000", borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30
                    }}>
                        <FaBolt />
                    </div>
                    <div style={{
                        background: "#fff", color: "#2ed573", borderRadius: "50%", width: 56, height: 56, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30
                    }}>
                        <FaMedal />
                    </div>
                </div>
            </div>
        </div>
    );
}

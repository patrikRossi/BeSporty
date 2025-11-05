import React from "react";
import { FaSpotify } from "react-icons/fa";

export default function SpotifyBox() {
    // Cambia la playlist/track URL embeddabile sotto come preferisci!
    const playlistUrl = "https://open.spotify.com/embed/playlist/3SwWEIDl3aMTLiZG1nY4Ht?utm_source=generator";

    return (
        <div style={{
            background: "#181818",
            color: "#1db954",
            border: "2px solid #1db95499",
            borderRadius: "16px",
            padding: "18px",
            marginBottom: "18px",
            maxWidth: 340,
            margin: "auto"
        }}>
            <h3 style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <FaSpotify /> Cosa ascolti mentre ti alleni?
            </h3>
            <iframe
                title="Spotify Playlist"
                src={playlistUrl}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                style={{ borderRadius: 12, marginTop: 10 }}
            ></iframe>
            <div style={{ marginTop: 6, fontSize: 13 }}>
                Puoi personalizzare la playlist!<br />
                <a href="https://open.spotify.com/" style={{ color: "#1db954" }} target="_blank" rel="noopener noreferrer">
                    Vai su Spotify
                </a>
            </div>
        </div>
    );
}

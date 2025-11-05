import React, { useEffect, useState } from "react";
import { ApiService } from "../services/ApiService";

export default function Feed() {
    const [posts, setPosts] = useState([]);      // sempre array
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const loadFeed = async () => {
            try {
                setLoading(true);
                const data = await ApiService.getFeed();
                // doppia guardia, per sicurezza
                setPosts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error(err);
                setError(err.message || "Errore caricamento feed");
                setPosts([]); // evita crash
            } finally {
                setLoading(false);
            }
        };
        loadFeed();
    }, []);

    if (loading) {
        return <div style={{ color: "#fff", padding: 20 }}>Caricamento feed...</div>;
    }

    if (error) {
        return <div style={{ color: "red", padding: 20 }}>{error}</div>;
    }

    if (!posts.length) {
        return (
            <div style={{ marginTop: 20, color: "#ccc" }}>
                Nessun check-in trovato.
            </div>
        );
    }

    return (
        <div style={{ marginTop: "20px" }}>
            <h2 style={{ color: "#2ed573", marginBottom: 18 }}>Feed</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
                {posts.map(post => (
                    <li key={post.id} style={{
                        background: "#222",
                        padding: "18px",
                        borderRadius: "12px",
                        marginBottom: "16px",
                        boxShadow: "0 2px 8px #00000055",
                        color: "#fff"
                    }}>
                        <h3 style={{ marginTop: 0, color: "#fda085" }}>
                            {post.username || "Anonimo"}
                        </h3>
                        <p style={{ margin: "8px 0" }}>{post.text}</p>
                        <div style={{ fontSize: "0.9em", color: "#aaa" }}>
                            <strong>Sport:</strong> {post.sport} <br />
                            {post.feeling && <><strong>Sensazione:</strong> {post.feeling} <br /></>}
                            {(post.intensity ?? null) !== null && <><strong>Intensità:</strong> {post.intensity} <br /></>}
                            <strong>Visibilità:</strong> {post.visibility} <br />
                            {post.createdAt && (
                                <>
                                    <strong>Creato il:</strong>{" "}
                                    {new Date(post.createdAt).toLocaleString()}
                                </>
                            )}
                        </div>
                        {post.imageUrl && (
                            <div style={{ marginTop: "10px" }}>
                                <img
                                    src={post.imageUrl}
                                    alt="checkin"
                                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                                />
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

import React from "react";
import NewPost from "../components/NewPost";
import BannerMotivazionale from "../components/BannerMotivazionale";

export default function CheckInScreen({ user }) {
    return (
        <div style={{ padding: "24px", background: "#181818", minHeight: "100vh" }}>
            <BannerMotivazionale />
            <div style={{
                background: "#222",
                color: "#fff",
                padding: "24px 18px",
                borderRadius: "22px",
                margin: "0 auto",
                maxWidth: "500px",
                boxShadow: "0 2px 18px #fda08533"
            }}>
                <h2 style={{ color: "#2ed573", marginBottom: 18, fontWeight: 700 }}>Nuovo Check-In</h2>
                <NewPost user={user} onPostCreated={() => window.location.reload()} />
            </div>
        </div>
    );
}

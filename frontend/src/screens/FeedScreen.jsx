import React from "react";
import BannerMotivazionale from "../components/BannerMotivazionale";
import WeatherBox from "../components/WeatherBox";
import SpotifyBox from "../components/SpotifyBox";
import Feed from "../components/Feed";

export default function FeedScreen() {
    return (
        <div style={{ padding: "24px", background: "#181818", minHeight: "100vh" }}>
            <BannerMotivazionale />
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "28px",
                marginBottom: "22px",
                justifyContent: "center"
            }}>
                <WeatherBox />
                <SpotifyBox />
            </div>
            {/* Qui viene mostrato il feed vero */}
            <Feed />
        </div>
    );
}
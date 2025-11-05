import React from "react";
import { FaDumbbell, FaSmile, FaMapMarkerAlt } from "react-icons/fa";

export default function PostCard({ post }) {
    return (
        <div className="post-card">
            <div className="post-header">
                <span><FaDumbbell style={{ color: "#eecb2a" }} /> {post.sport}</span>
                <span>{post.author?.username || "Utente"}</span>
                <span style={{ float: "right", color: "#999" }}>
          {post.timestamp ? new Date(post.timestamp).toLocaleString() : ""}
        </span>
            </div>
            {post.mediaUrl && <img src={post.mediaUrl} alt="allenamento" className="post-img" />}
            <div className="post-content">{post.content}</div>
            {post.mood && <div><FaSmile /> {post.mood}</div>}
            {(post.latitude && post.longitude) ? (
                <div className="post-map">
                    <FaMapMarkerAlt /> Allenato qui: {post.latitude.toFixed(3)}, {post.longitude.toFixed(3)}
                </div>
            ) : null}
        </div>
    );
}

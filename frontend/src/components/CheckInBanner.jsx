import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function CheckInBanner({ user }) {
    return (
        <div className="checkin-banner">
            <FaCheckCircle style={{ color: "#2ed573" }} />
            Ciao {user?.username || "sportivo"}!
            È il momento del tuo check-in sportivo (fascia: {user?.checkInSlot || "?"}).
        </div>
    );
}

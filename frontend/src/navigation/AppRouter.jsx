import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import FeedScreen from "../screens/FeedScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GroupsScreen from "../screens/GroupsScreen";
import BadgeScreen from "../screens/BadgeScreen";
import CheckInScreen from "../screens/CheckInScreen";

export default function AppRouter({ user, setUser }) {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="/feed" />} />
                <Route path="/feed" element={<FeedScreen />} />
                <Route path="/profile" element={<ProfileScreen />} />
                <Route path="/groups" element={<GroupsScreen />} />
                <Route path="/badges" element={<BadgeScreen />} />
                <Route path="/checkin" element={<CheckInScreen user={user} />} />
                {/* aggiungi altre rotte se vuoi */}
            </Routes>
        </BrowserRouter>
    );
}

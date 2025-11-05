import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import AppRouter from "./navigation/AppRouter";

function App() {
    const [user, setUser] = useState(null);
    const [showRegister, setShowRegister] = useState(false);

    if (!user) {
        return showRegister
            ? <Register onRegisterSuccess={() => setShowRegister(false)} />
            : (
                <div>
                    <Login onLoginSuccess={setUser} />
                    <p style={{ color: "#fff", marginLeft: 8 }}>
                        NON HAI UN ACCOUNT?{" "}
                        <span
                            style={{ color: "#2ed573", cursor: "pointer" }}
                            onClick={() => setShowRegister(true)}
                        >Registrati</span>
                    </p>
                </div>
            );
    }

    // Dopo il login, mostra la vera app (con navbar, routing, banner, tab, ecc.)
    return <AppRouter user={user} setUser={setUser} />;
}

export default App;

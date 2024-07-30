import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import MainPage from './Components/Inicio/MainPage';
import UserManagement from './Components/Usuarios/UserManagement';

function App() {
    const handleLogin = () => {
        // Aquí puedes manejar la lógica para iniciar sesión
        console.log("Login successful");
        window.location.href = "/home"; // Redireccionar a la página principal después del inicio de sesión
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegister onLogin={handleLogin} />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/users" element={<UserManagement />} />
            </Routes>
        </Router>
    );
}

export default App;
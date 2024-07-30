import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import MainPage from './Components/Inicio/MainPage';
import UserManagement from './Components/Usuarios/UserManagement';
import AddUser from './Components/Usuarios/AddUser';
import Documentos from './Components/Documentos/Documentos';
import UploadDocument from './Components/Documentos/UploadDocument';

function App() {
    const handleLogin = () => {
        console.log("Login successful");
        window.location.href = "/home";
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginRegister onLogin={handleLogin} />} />
                <Route path="/home" element={<MainPage />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/add-user" element={<AddUser />} />
                <Route path="/documentos" element={<Documentos />} />
                <Route path="/upload-document" element={<UploadDocument />} />
            </Routes>
        </Router>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginRegister from './Components/LoginRegister/LoginRegister';
import MainPage from './Components/Inicio/MainPage';
import UserManagement from './Components/Usuarios/UserManagement';
import AddUser from './Components/Usuarios/AddUser';
import Documentos from './Components/Documentos/Documentos';
import UploadDocument from './Components/Documentos/UploadDocument';
import Expedientes from './Components/Expediente/Expedientes';
import Perfil from './Components/Usuarios/Perfil';
import ModificarUsuario from './Components/Usuarios/ModificarUsuario';
import RegistroExpediente from './Components/Expediente/RegistroExpediente';
import ModificarExpediente from './Components/Expediente/ModificarExpediente';
import AltaExpediente from './Components/Expediente/AltaExpediente';

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
                <Route path="/expedientes" element={<Expedientes />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/modificar-usuario" element={<ModificarUsuario />} />
                <Route path="/registro-expediente" element={<RegistroExpediente />} /> 
                <Route path="/modificar-expediente" element={<ModificarExpediente />} /> 
                <Route path="/alta-expediente" element={<AltaExpediente />} />
                <Route path="/upload-document" element={<UploadDocument />} />
            </Routes>
        </Router>
    );
}

export default App;

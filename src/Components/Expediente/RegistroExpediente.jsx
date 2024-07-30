// Components/Expediente/RegistroExpediente.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import './RegistroExpediente.css';

const RegistroExpediente = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/expedientes'); // Ajusta esto según tu ruta real para la gestión de expedientes
    };

    const handleRegister = () => {
        // Lógica para registrar un nuevo expediente
        console.log('Expediente registrado');
    };

    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={pageLogo} alt="Page Logo" />
                    <span>Expedium</span>
                </div>
                <ul className="nav-links">
                    <li onClick={() => navigate('/users')}>Usuarios</li>
                    <li onClick={() => navigate('/expedientes')}>Expedientes</li>
                    <li onClick={() => navigate('/documentos')}>Documentos</li>
                    <li onClick={() => navigate('/perfil')}>Perfil</li>
                </ul>
                <div className="logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div className="add-expediente-content">
                <div className="add-expediente-form">
                    <h2>Registro de Expediente</h2>
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Tipo de Expediente" required />
                    <input type="text" placeholder="Número de Expediente" required />
                    <input type="text" placeholder="Tags" />
                    <div className="form-buttons">
                        <button className="register-btn" onClick={handleRegister}>Registrar Expediente</button>
                        <button className="back-btn" onClick={handleBack}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistroExpediente;

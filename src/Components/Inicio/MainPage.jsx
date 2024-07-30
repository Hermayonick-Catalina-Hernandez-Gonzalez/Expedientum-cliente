import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainPage.css';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';

const MainPage = () => {
    const navigate = useNavigate();

    const goToUserManagement = () => {
        navigate('/users');
    };

    const goToDocumentos = () => {
        navigate('/documentos');
    };

    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={pageLogo} alt="Page Logo" />
                    Expedium
                </div>
                <ul className="nav-links">
                    <li onClick={goToUserManagement}>Usuarios</li>
                    <li>Expedientes</li>
                    <li onClick={goToDocumentos}>Documentos</li>
                    <li>Perfil</li>
                </ul>
                <div className="logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div className="main-cards">
                <div className="card" onClick={goToUserManagement}>Usuarios</div>
                <div className="card">Expedientes</div>
                <div className="card" onClick={goToDocumentos}>Documentos</div>
            </div>
        </div>
    );
}

export default MainPage;


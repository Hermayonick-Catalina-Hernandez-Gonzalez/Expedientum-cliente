import React from 'react';
import './MainPage.css';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png'; 

const MainPage = () => {
    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={pageLogo} alt="Page Logo" />
                    Expedium
                </div>
                <ul className="nav-links">
                    <li>Usuarios</li>
                    <li>Expedientes</li>
                    <li>Documentos</li>
                    <li>Perfil</li>
                </ul>
                <div className="logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div className="main-cards">
                <div className="card">Usuarios</div>
                <div className="card">Expedientes</div>
                <div className="card">Documentos</div>
            </div>
        </div>
    );
}

export default MainPage;

// Components/Expediente/Expedientes.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import editIcon from '../assets/lapiz.png';
import deleteIcon from '../assets/basura.png';
import logoutIcon from '../assets/cerrar.png';
import searchIcon from '../assets/buscar.png';
import './Expedientes.css';

const Expedientes = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/home');
    };

    const goToUserManagement = () => {
        navigate('/users');
    };

    const goToDocumentos = () => {
        navigate('/documentos');
    };

    const goToExpedientes = () => {
        navigate('/expedientes');
    };

    const goToPerfil = () => {
        navigate('/perfil');
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
                    <li onClick={goToExpedientes}>Expedientes</li>
                    <li onClick={goToDocumentos}>Documentos</li>
                    <li onClick={goToPerfil}>Perfil</li>
                </ul>
                <div className="logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div className="docContent">
                <div className="search-bar">
                    <div className="search-input-wrapper">
                        <input type="text" placeholder="Buscar" className="search-input" />
                        <img src={searchIcon} alt="Buscar" className="search-icon" />
                    </div>
                    <button className="add-user-btn" >Subir expediente</button>
                    <button className="back-btn" onClick={handleBack}>Regresar</button>
                </div>
            </div>
            <div className="user-table">
                <table>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo de Expediente</th>
                            <th>Número de Expediente</th>
                            <th>Tags</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Expediente 1</td>
                            <td>Tipo A</td>
                            <td>12345</td>
                            <td>Tag1, Tag2</td>
                            <td className="actions">
                                <button className="action-btn">
                                    <img src={editIcon} alt="Modificar" />
                                </button>
                                <button className="action-btn">
                                    <img src={deleteIcon} alt="Eliminar" />
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Expedientes;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import viewIcon from '../assets/ojo.png';
import deleteIcon from '../assets/basura.png';
import logoutIcon from '../assets/cerrar.png';
import searchIcon from '../assets/buscar.png';
import './Documentos.css';

const Documentos = () => {
    const navigate = useNavigate();

    const goToUserManagement = () => {
        navigate('/users');
    };

    const goToUploadDocument = () => {
        navigate('/upload-document');
    };

    const handleBack = () => {
        navigate('/home');
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
                    <li>Documentos</li>
                    <li>Perfil</li>
                </ul>
                <div className="logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div  className="docContent">
                <div className="search-bar">
                    <div className="search-input-wrapper">
                        <input type="text" placeholder="Buscar" className="search-input" />
                        <img src={searchIcon} alt="Buscar" className="search-icon" />
                    </div>
                    <button className="add-user-btn" onClick={goToUploadDocument}>Subir documento</button>
                    <button className="back-btn" onClick={handleBack}>Regresar</button>
                </div>
            </div>
            <div className="user-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Título del documento</th>
                                <th>Tipo de archivo</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Proyecto final</td>
                                <td>PDF</td>
                                <td className="actions">
                                    <button className="action-btn">
                                        <img src={viewIcon} alt="Ver" />
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

export default Documentos;

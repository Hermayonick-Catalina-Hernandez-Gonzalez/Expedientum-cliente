import React from 'react';
import { useNavigate } from 'react-router-dom';
import './UserManagement.css';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import viewIcon from '../assets/ojo.png';
import editIcon from '../assets/lapiz.png';
import deleteIcon from '../assets/basura.png';
import searchIcon from '../assets/buscar.png';

const UserManagement = () => {
    const navigate = useNavigate();

    const handleAddUser = () => {
        navigate('/add-user');
    };

    const handleBack = () => {
        navigate('/home'); 
    };

    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={pageLogo} alt="Page Logo" />
                    <span>Expedium</span>
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
            <div className="user-management-content">
                <div className="search-bar">
                    <div className="search-input-wrapper">
                        <input type="text" placeholder="Buscar" className="search-input" />
                        <img src={searchIcon} alt="Buscar" className="search-icon" />
                    </div>
                    <button className="add-user-btn" onClick={handleAddUser}>Agregar usuario</button>
                    <button className="back-btn" onClick={handleBack}>Regresar</button>
                </div>
                <div className="user-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo</th>
                                <th>Tipo de Usuario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Pérez</td>
                                <td>juan.perez@example.com</td>
                                <td>Admin</td>
                                <td className="actions">
                                    <button className="action-btn">
                                        <img src={viewIcon} alt="Ver" />
                                    </button>
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
        </div>
    );
}

export default UserManagement;


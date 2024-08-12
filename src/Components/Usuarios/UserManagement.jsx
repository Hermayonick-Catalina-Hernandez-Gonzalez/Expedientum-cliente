import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import './UserManagement.css';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import viewIcon from '../assets/ojo.png';
import editIcon from '../assets/lapiz.png';
import deleteIcon from '../assets/basura.png';
import searchIcon from '../assets/buscar.png';

const UserManagement = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [usuarios, setUsuarios] = useState([]);

    const handleAddUser = () => {
        navigate('/add-user');
    };

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();

                if (response.ok) {
                    setUsuarios(data.usuarios);
                } else {
                    console.error('Error al obtener usuarios:', data);
                    setUsuarios([]); // Establece un arreglo vacío en caso de error
                }
            } catch (error) {
                console.error('Hubo un error con la solicitud:', error);
                setUsuarios([]); // Establece un arreglo vacío en caso de error en la solicitud
            }
        };

        fetchUsuarios();
    }, [token]);
    const handleBack = () => {
        navigate('/home'); 
    };

    const handleModifyUser = () => {
        navigate('/modificar-usuario');
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
                    <span>Expedium</span>
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
                        {usuarios.map(usuario => (
                            <tr key={usuario.id}>
                                <td>{usuario.username}</td>
                                <td>{usuario.nombre} {usuario.apellidos}</td>
                                <td>{usuario.email}</td>
                                <td>{usuario.tipoUsuario}</td>
                                <td className="actions">
                                    <button className="action-btn" onClick={() => handleModifyUser(usuario.id)}>
                                        <img src={editIcon} alt="Modificar" />
                                    </button>
                                    <button className="action-btn">
                                        <img src={deleteIcon} alt="Eliminar" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserManagement;

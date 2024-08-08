import React, { useState } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import editIcon from '../assets/lapiz.png';
import deleteIcon from '../assets/basura.png';
import logoutIcon from '../assets/cerrar.png';
import searchIcon from '../assets/buscar.png';
import './Expedientes.css';

// Estilos básicos para el modal
Modal.setAppElement('#root');

const Expedientes = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [permissions, setPermissions] = useState([]);

    const usersOptions = [
        { value: 'user1', label: 'Usuario 1' },
        { value: 'user2', label: 'Usuario 2' },
        { value: 'user3', label: 'Usuario 3' },
    ];

    const roleOptions = [
        { value: 'lector', label: 'Lector' },
        { value: 'editor', label: 'Editor' },
    ];

    const handleBack = () => {
        navigate('/home');
    };

    const handleAddExpediente = () => {
        navigate('/registro-expediente');
    };

    const handleEditExpediente = () => {
        navigate('/modificar-expediente');
    };

    const handleGrantPermissions = () => {
        setIsModalOpen(true);
    };

    const handleAddPermission = () => {
        setPermissions([...permissions, { user: null, role: null }]);
    };

    const handleChange = (index, type, value) => {
        const updatedPermissions = [...permissions];
        updatedPermissions[index][type] = value;
        setPermissions(updatedPermissions);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="main-container">
            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Conceder permisos"
                className="permissions-modal"
                overlayClassName="permissions-overlay"
            >
                <h2>Conceder permisos</h2>
                {permissions.map((permission, index) => (
                    <div key={index} className="permission-row">
                        <Select
                            options={usersOptions}
                            onChange={(selectedOption) => handleChange(index, 'user', selectedOption)}
                            placeholder="Seleccionar usuario"
                            className="select-user"
                        />
                        <Select
                            options={roleOptions}
                            onChange={(selectedOption) => handleChange(index, 'role', selectedOption)}
                            placeholder="Seleccionar rol"
                            className="select-role"
                        />
                    </div>
                ))}
                <button onClick={handleAddPermission} className="add-permission-btn">Agregar permiso</button>
                <button onClick={closeModal} className="close-modal-btn">Cerrar</button>
            </Modal>

            {/* Resto del código */}
            <nav className="navbar">
                <div className="logo">
                    <img src={pageLogo} alt="Page Logo" />
                    Expedium
                </div>
                <ul className="nav-links">
                    <li onClick={handleBack}>Usuarios</li>
                    <li>Expedientes</li>
                    <li>Documentos</li>
                    <li>Perfil</li>
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
                    <button className="add-user-btn" onClick={handleAddExpediente}>Subir expediente</button>
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
                            <th>Permisos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Expediente 1</td>
                            <td>Tipo A</td>
                            <td>12345</td>
                            <td>Tag1, Tag2</td>
                            <td className="actions">
                                <button className="action-btn" onClick={handleEditExpediente}>
                                    <img src={editIcon} alt="Modificar" />
                                </button>
                                <button className="action-btn">
                                    <img src={deleteIcon} alt="Eliminar" />
                                </button>
                            </td>
                            <td>
                                <button className="grant-permissions-btn" onClick={handleGrantPermissions}>
                                    Dar Permisos
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

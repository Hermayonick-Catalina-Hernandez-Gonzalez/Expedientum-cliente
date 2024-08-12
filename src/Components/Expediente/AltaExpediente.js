import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/context';
import pageLogo from '../assets/logo.png';
import editIcon from '../assets/lapiz.png';
import deleteIcon from '../assets/basura.png';
import logoutIcon from '../assets/cerrar.png';
import searchIcon from '../assets/buscar.png';
import './Expedientes.css';

// Estilos básicos para el modal
Modal.setAppElement('#root');

const Expedientes = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [permissions, setPermissions] = useState([]);
    const [userRole, setUserRole] = useState(null);
    const [expedientes, setExpedientes] = useState([]);

    useEffect(() => {
        const fetchExpedientes = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/expedientesPorAdmitir', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();

                const dataExpedientes = data.expedientes;
                console.log('Datos obtenidos:', dataExpedientes); // Verifica los datos obtenidos
                if (response.ok) {
                    // Asegúrate de que `data` es un arreglo
                    if (Array.isArray(dataExpedientes)) {
                        setExpedientes(dataExpedientes);
                    } else {
                        console.error('La respuesta no es un arreglo:', data);
                        setExpedientes([]); // Establece un arreglo vacío en caso de respuesta no esperada
                    }
                } else {
                    console.error('Error al obtener expedientes:', data);
                    setExpedientes([]); // Establece un arreglo vacío en caso de error
                }
            } catch (error) {
                console.error('Hubo un error con la solicitud:', error);
                setExpedientes([]); // Establece un arreglo vacío en caso de error en la solicitud
            }
        };

        fetchExpedientes();
    }, [token]);

    const usersOptions = [
        { value: 'user1', label: 'Usuario 1' },
        { value: 'user2', label: 'Usuario 2' },
        { value: 'user3', label: 'Usuario 3' },
    ];

    // Configura opciones de rol condicionalmente basado en `userRole`
    const roleOptions = [
        { value: 'lector', label: 'Lector' },
        { value: 'Propietario', label: 'Propietario' },
    ];

    const handleBack = () => {
        navigate('/expedientes');
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

    // Navegación
    const goToUserManagement = () => {
        navigate('/usuarios');
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
                        {expedientes.map(expediente => (
                            <tr key={expediente.id}>
                                <td>{expediente.nombre}</td>
                                <td>{expediente.tipoExpediente}</td>
                                <td>{expediente.numeroExpediente}</td>
                                <td>{expediente.tags}</td>
                                <td className="actions">
                                    <button className="action-btn" onClick={() => handleEditExpediente(expediente.id)}>
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
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Expedientes;

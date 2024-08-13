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

Modal.setAppElement('#root');

const Expedientes = () => {
    const { token, userRole } = useContext(AuthContext); // Obtener el rol del usuario
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [permissions, setPermissions] = useState([]);
    const [expedientes, setExpedientes] = useState([]);
    const [usersOptions, setUsersOptions] = useState([]);
    const [selectedExpedienteId, setSelectedExpedienteId] = useState(null);

    // Opciones para los selects
    const roleOptions = [
        { value: 'lector', label: 'Lector' },
        { value: 'propietario', label: 'Propietario' } // Mostrar Propietario solo si es admin
    ];

    useEffect(() => {
        const fetchExpedientes = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/expedientes', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    setExpedientes(Array.isArray(data.expedientes) ? data.expedientes : []);
                } else {
                    setExpedientes([]);
                }
            } catch (error) {
                setExpedientes([]);
            }
        };

        const fetchUsers = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                if (response.ok) {
                    const options = data.usuarios.map(user => ({
                        value: user.id,
                        label: user.nombre
                    }));
                    setUsersOptions(options);
                } else {
                    setUsersOptions([]);
                }
            } catch (error) {
                setUsersOptions([]);
            }
        };

        fetchExpedientes();
        fetchUsers();
    }, [token]);

    const handleBack = () => {
        navigate('/home');
    };

    const handleAddExpediente = () => {
        navigate('/registro-expediente');
    };

    const handleAltaExpediente = () => {
        navigate('/alta-expediente');
    };

    const handleEditExpediente = (id) => {
        navigate(`/modificar-expediente/${id}`);
    };

    const handleGrantPermissions = (expedienteId) => {
        setSelectedExpedienteId(expedienteId);
        setIsModalOpen(true);
    };

    const handleAddPermission = () => {
        setPermissions([...permissions, { user: null, role: null }]);
    };

    const handleDeletePermission = (index) => {
        setPermissions(permissions.filter((_, i) => i !== index));
    };

    const handleDeleteExpediente = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/expedientes/${id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                setExpedientes(expedientes.filter(expediente => expediente.id !== id));
                console.log(`Expediente con ID ${id} eliminado correctamente`);
            } else {
                const data = await response.json();
                console.error('Error al eliminar el expediente:', data.error);
            }
        } catch (error) {
            console.error('Hubo un error con la solicitud:', error);
        }
    };

    const handleAssignPermissions = async () => {
        console.log('Permissions:', permissions);
        console.log('Selected Expediente ID:', selectedExpedienteId);
    
        try {
            const response = await fetch('http://localhost:8000/api/asignarPermisos', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    permissions: permissions.map(permission => ({
                        expediente_ID: selectedExpedienteId,
                        usuario_ID: permission.user?.value,
                        rol: permission.role?.value
                    }))
                })
            });
    
            // Convertir la respuesta a JSON para obtener los datos completos
            const responseData = await response.json();
    
            if (response.ok) {
                console.log('Permisos asignados correctamente');
                console.log('Respuesta completa:', responseData); // Mostrar la respuesta completa en la consola
                closeModal();
            } else {
                console.error('Error al asignar permisos:', responseData); // Mostrar el error completo
            }
        } catch (error) {
            console.error('Hubo un error con la solicitud:', error);
        }
    };    

    const handleChange = (index, type, value) => {
        const updatedPermissions = [...permissions];
        updatedPermissions[index][type] = value;
        setPermissions(updatedPermissions);

        console.log('Updated Permissions:', updatedPermissions);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
                            value={permission.user} // Asegúrate de que el valor se mantenga después de la selección
                            placeholder="Seleccionar usuario"
                            className="select-user"
                        />
                        <Select
                            options={roleOptions}
                            onChange={(selectedOption) => handleChange(index, 'role', selectedOption)}
                            value={permission.role} // Asegúrate de que el valor se mantenga después de la selección
                            placeholder="Seleccionar rol"
                            className="select-role"
                        />
                        <button onClick={() => handleDeletePermission(index)} className="delete-permission-btn">
                            Eliminar
                        </button>
                    </div>
                ))}
                <button onClick={handleAddPermission} className="add-permission-btn">Agregar permiso</button>
                <button onClick={handleAssignPermissions} className="confirm-permissions-btn">Confirmar</button>
                <button onClick={closeModal} className="close-modal-btn">Cerrar</button>
            </Modal>

            {/* Navegación */}
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
                    <button className="add-user-btn" onClick={handleAddExpediente}>Subir expediente</button>
                    <button className="add-user-btn" onClick={handleAltaExpediente}>Dar de alta expediente</button>
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
                                    <button className="action-btn" onClick={() => handleDeleteExpediente(expediente.id)}>
                                        <img src={deleteIcon} alt="Eliminar" />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleGrantPermissions(expediente.id)} className="confirm-permissions-btn">
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

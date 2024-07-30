import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';

const AddUser = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/users'); // Ajusta esto según tu ruta real para la gestión de usuarios
    };

    const handleRegister = () => {
        // Lógica para registrar un nuevo usuario
        console.log('Usuario registrado');
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
            <div className="add-user-content">
                <div className="add-user-form">
                    <h2>Registrar Usuario</h2>
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    <input type="text" placeholder="Nombre" required />
                    <input type="text" placeholder="Apellidos (opcional)" />
                    <select>
                        <option value="">Género (opcional)</option>
                        <option value="male">Masculino</option>
                        <option value="female">Femenino</option>
                        <option value="other">Otro</option>
                    </select>
                    <input type="date" placeholder="Fecha de nacimiento (opcional)" />
                    <input type="email" placeholder="Email" required />
                    <input type="text" placeholder="Tipo de usuario" required />
                    <input type="text" placeholder="Departamento (opcional)" />
                    <div className="form-buttons">
                        <button className="register-btn" onClick={handleRegister}>Registrar</button>
                        <button className="back-btn" onClick={handleBack}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;

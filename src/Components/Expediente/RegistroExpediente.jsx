import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import './RegistroExpediente.css';
import { AuthContext } from '../context/context';

const RegistroExpediente = () => {
    const navigate = useNavigate();
    const { token } = useContext(AuthContext);
    const [tipoExpediente, setTipoExpediente] = useState('');
    const [numeroExpediente, setNumeroExpediente] = useState('');
    const [tags, setTags] = useState('');

    const ExpedienteData = {
        tipoExpediente: tipoExpediente,
        numeroExpediente: numeroExpediente,
        tags: tags
    };
    const handleBack = () => {
        navigate('/expedientes'); // Ajusta esto según tu ruta real para la gestión de expedientes
    };

    const handleRegister  = async () =>  {

        // Lógica para registrar un nuevo expediente
        try {      
            const response = await fetch('http://localhost:8000/api/expedientes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(ExpedienteData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Expediente registrado:', data);
                navigate('/expedientes');

            } else {
                console.error('Error al registrar expediente:', data);
            }
        } catch (error) {
            console.error('Hubo un error con la solicitud:', error);
        }
    };

    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="logo">
                    <img src={pageLogo} alt="Page Logo" />
                    <span>Expedium</span>
                </div>
                <ul className="nav-links">
                    <li onClick={() => navigate('/users')}>Usuarios</li>
                    <li onClick={() => navigate('/expedientes')}>Expedientes</li>
                    <li onClick={() => navigate('/documentos')}>Documentos</li>
                    <li onClick={() => navigate('/perfil')}>Perfil</li>
                </ul>
                <div className="logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div className="add-expediente-content">
                <div className="add-expediente-form">
                    <h2>Registro de Expediente</h2>
                    <input
                        type="text"
                        placeholder="tipoExpediente"
                        value={tipoExpediente}
                        onChange={(e) => setTipoExpediente(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Número de Expediente"
                        value={numeroExpediente}
                        onChange={(e) => setNumeroExpediente(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Tags"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                    <div className="form-buttons">
                        <button className="register-btn" onClick={handleRegister}>Registrar Expediente</button>
                        <button className="back-btn" onClick={handleBack}>Regresar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistroExpediente;

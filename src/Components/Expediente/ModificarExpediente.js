import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import viewIcon from '../assets/ojo.png';
import deleteIcon from '../assets/basura.png';
import './ModificarExpedientes.css';

const ModificarExpediente = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/expedientes');
    };

    return (
        <div className="main-container">
            <nav className="mod-exp-navbar">
                <div className="mod-exp-logo">
                    <img src={pageLogo} alt="Page Logo" />
                    Expedium
                </div>
                <ul className="mod-exp-nav-links">
                    <li onClick={() => navigate('/users')}>Usuarios</li>
                    <li onClick={() => navigate('/expedientes')}>Expedientes</li>
                    <li onClick={() => navigate('/documentos')}>Documentos</li>
                    <li onClick={() => navigate('/perfil')}>Perfil</li>
                </ul>
                <div className="mod-exp-logout-icon">
                    <img src={logoutIcon} alt="Logout" />
                </div>
            </nav>
            <div className="mod-exp-expediente-content">
                <div className="mod-exp-expediente-details">
                    <h3>Datos del expediente</h3>
                    <p><strong>Nombre:</strong> Expediente 1</p>
                    <p><strong>Tipo de Expediente:</strong> Tipo A</p>
                    <p><strong>Número de Expediente:</strong> 123344</p>
                    <p><strong>Tags:</strong> Tag1, Tag2</p>
                    <button className="mod-exp-add-doc-btn">Agregar documento al expediente</button>
                </div>
                <div className="mod-exp-document-list">
                    <h3>Lista de documentos</h3>
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
                                <td className="mod-exp-actions">
                                    <button className="mod-exp-action-btn">
                                        <img src={viewIcon} alt="Ver" />
                                    </button>
                                    <button className="mod-exp-action-btn">
                                        <img src={deleteIcon} alt="Eliminar" />
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="mod-exp-back-btn" onClick={handleBack}>Regresar</button>
                </div>
            </div>
        </div>
    );
}

export default ModificarExpediente;

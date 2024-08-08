import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import viewIcon from '../assets/ojo.png';
import deleteIcon from '../assets/basura.png';
import AgregarDocumentoModal from './AgregarDocumentoModal';
import AgregarDocumentosExistentesModal from './AgregarDocumentosExistentesModal'; // Nuevo modal
import './ModificarExpedientes.css';

const ModificarExpediente = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isExistingDocsModalOpen, setIsExistingDocsModalOpen] = useState(false); // Nuevo estado para el nuevo modal

    const handleBack = () => {
        navigate('/expedientes');
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenExistingDocsModal = () => {
        setIsExistingDocsModalOpen(true);
    };

    const handleCloseExistingDocsModal = () => {
        setIsExistingDocsModalOpen(false);
    };

    const handleSaveDocument = (data) => {
        console.log('Documento guardado:', data);
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
                    <button className="mod-exp-add-doc-btn" onClick={handleOpenModal}>Subir documento al expediente</button>
                    <button className="mod-exp-add-existing-doc-btn" onClick={handleOpenExistingDocsModal}>Agregar documentos existentes</button>
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
            <AgregarDocumentoModal isOpen={isModalOpen} onClose={handleCloseModal} onSave={handleSaveDocument} />
            <AgregarDocumentosExistentesModal isOpen={isExistingDocsModalOpen} onClose={handleCloseExistingDocsModal} /> {/* Nuevo modal */}
        </div>
    );
};

export default ModificarExpediente;

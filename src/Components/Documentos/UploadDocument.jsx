import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import './UploadDocument.css';

const UploadDocument = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        fileType: '',
        fileSize: '',
        originalFileName: '',
        url: '',
        sha256: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        navigate('/documentos');
    };

    const goBack = () => {
        navigate('/documentos');
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
            <nav className="navegacion">
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
            <div className="form-wrapper">
                <div className="form-container">
                    <form className="upload-form" onSubmit={handleSubmit}>
                        <h1>Subir Documento</h1>
                        <label>
                            <span>Título del documento:</span>
                            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                        </label>
                        <label>
                            <span>Descripción del documento (opcional):</span>
                            <textarea name="description" value={formData.description} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Fecha del documento (opcional):</span>
                            <input type="date" name="date" value={formData.date} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Tipo de archivo:</span>
                            <input type="text" name="fileType" value={formData.fileType} onChange={handleChange} required />
                        </label>
                        <label>
                            <span>Tamaño (opcional):</span>
                            <input type="text" name="fileSize" value={formData.fileSize} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Nombre de archivo original (opcional):</span>
                            <input type="text" name="originalFileName" value={formData.originalFileName} onChange={handleChange} />
                        </label>
                        <label>
                            <span>URL o Enlace (opcional):</span>
                            <input type="url" name="url" value={formData.url} onChange={handleChange} />
                        </label>
                        <label>
                            <span>SHA256 (opcional):</span>
                            <input type="text" name="sha256" value={formData.sha256} onChange={handleChange} />
                        </label>
                        <label>
                            <span>Subir archivo:</span>
                            <input type="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.tiff,.gif" onChange={handleFileChange} required />
                        </label>
                        <div className="form-buttons">
                            <button type="submit" className="upload-btn">Subir Documento</button>
                            <button type="button" className="back-btn" onClick={goBack}>Regresar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UploadDocument;

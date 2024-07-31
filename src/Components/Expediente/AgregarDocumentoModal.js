import React, { useState } from 'react';
import './AgregarDocumentoModal.css';

const AgregarDocumentoModal = ({ isOpen, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        file: null,
        title: '',
        description: '',
        date: '',
        fileType: '',
        size: '',
        originalName: '',
        url: '',
        sha256: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'file') {
            setFormData({ ...formData, file: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Agregar Documento</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Subir archivo:</label>
                        <input type="file" name="file" accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpeg,.jpg,.png,.tiff,.gif" onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Título del documento:</label>
                        <input type="text" name="title" value={formData.title} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Descripción del documento (opcional):</label>
                        <input type="text" name="description" value={formData.description} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Fecha del documento (opcional):</label>
                        <input type="date" name="date" value={formData.date} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Tipo de archivo:</label>
                        <input type="text" name="fileType" value={formData.fileType} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                        <label>Tamaño (opcional):</label>
                        <input type="text" name="size" value={formData.size} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Nombre de archivo original (opcional):</label>
                        <input type="text" name="originalName" value={formData.originalName} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>URL o Enlace (opcional):</label>
                        <input type="text" name="url" value={formData.url} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>SHA256 (opcional):</label>
                        <input type="text" name="sha256" value={formData.sha256} onChange={handleChange} />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="close-button" onClick={onClose}>Cerrar</button>
                        <button type="submit" className="save-button">Agregar documento al expediente</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AgregarDocumentoModal;

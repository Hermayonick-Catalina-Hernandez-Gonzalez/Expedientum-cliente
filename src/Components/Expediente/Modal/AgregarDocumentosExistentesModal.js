import React, { useState } from 'react';
import Select from 'react-select';
import './AgregarDocumentosExistentesModal.css';

const AgregarDocumentosExistentesModal = ({ isOpen, onClose }) => {
    const [selectedDocuments, setSelectedDocuments] = useState([]);

    const documentosDisponibles = [
        { value: 'doc1', label: 'Documento 1 - PDF' },
        { value: 'doc2', label: 'Documento 2 - DOCX' },
        { value: 'doc3', label: 'Documento 3 - XLSX' },
        // Agrega más opciones según sea necesario
    ];

    const handleDocumentChange = (selectedOptions) => {
        setSelectedDocuments(selectedOptions);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Documentos agregados:', selectedDocuments);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2>Agregar Documentos Existentes</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Seleccione documentos:</label>
                        <Select
                            options={documentosDisponibles}
                            isMulti
                            value={selectedDocuments}
                            onChange={handleDocumentChange}
                        />
                    </div>
                    <div className="modal-actions">
                        <button type="button" className="close-button" onClick={onClose}>Cerrar</button>
                        <button type="submit" className="save-button">Agregar documentos</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AgregarDocumentosExistentesModal;

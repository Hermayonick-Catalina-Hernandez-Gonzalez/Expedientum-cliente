import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddUser.css';
import pageLogo from '../assets/logo.png';
import logoutIcon from '../assets/cerrar.png';
import { AuthContext } from '../../context/context';

const AddUser = () => {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [genero, setGenero] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    const [email, setEmail] = useState('');
    const [tipoUsuario, setTipoUsuario] = useState('');
    const [departamento, setDepartamento] = useState('');

    const usuarioData = {
        username: username,
        password: password,
        nombre: nombre,
        apellidos: apellidos,
        genero: genero,
        fechaNacimiento: fechaNacimiento,
        email: email,
        tipoUsuario: tipoUsuario,
        departamento: departamento
    };

    const handleBack = () => {
        navigate('/add-user');
    };

    const handleRegister  = async () =>  {

        // Lógica para registrar un nuevo expediente
        try {      
            const response = await fetch('http://localhost:8000/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(usuarioData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Usuario registrado:', data);
                navigate('/addUser');

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
            <div className="add-user-content">
                <div className="add-user-form">
                    <h2>Registrar Usuario</h2>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirmar Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Apellidos (opcional)"
                        value={apellidos}
                        onChange={(e) => setApellidos(e.target.value)}
                    />
                    <select
                        value={genero}
                        onChange={(e) => setGenero(e.target.value)}
                    >
                        <option value="">Género (opcional)</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>

                    <input
                        type="date"
                        placeholder="Fecha de nacimiento (opcional)"
                        value={fechaNacimiento}
                        onChange={(e) => setFechaNacimiento(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Tipo de usuario"
                        value={tipoUsuario}
                        onChange={(e) => setTipoUsuario(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Departamento"
                        value={departamento}
                        onChange={(e) => setDepartamento(e.target.value)}
                    />
                    <div className="form-buttons">
                        <button className="register-btn" onClick={handleRegister}>
                            Registrar
                        </button>
                        <button className="back-btn" onClick={handleBack}>
                            Regresar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddUser;
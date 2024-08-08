import React, { useState } from 'react';
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import fondoImage from '../assets/imagen.jpg';

const LoginRegister = ({ onLogin }) => {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const loginData = {
        username: username,
        password: password
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Realizar la solicitud POST a la API de Laravel
        try {
            const response = await fetch('http://localhost:8000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Inicio de sesión exitoso:', data);
                localStorage.setItem('token', data.token);
                onLogin(); // Llamar a la función de login si la autenticación es exitosa
            } else {
                console.error('Error en el inicio de sesión:', data);
            }
        } catch (error) {
            console.error('Hubo un error con la solicitud:', error);
        }
    };

    return (
        <div className="caja-login">
            {isForgotPassword ? (
                <form className="formulario-login" onSubmit={(e) => { e.preventDefault(); /* Lógica para manejar la recuperación */ }}>
                    <h2>Recuperar Contraseña</h2>
                    <div className="caja-input">
                        <FaUser className="icono" />
                        <input type="email" placeholder="Correo electrónico" required />
                        <label>Correo electrónico</label>
                    </div>
                    <button type="submit">Enviar enlace de recuperación</button>
                    <p><a href="# " onClick={() => setIsForgotPassword(false)}>Volver al inicio de sesión</a></p>
                </form>
            ) : (
                <form className="formulario-login" onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>
                    <div className="caja-input">
                        <FaUser className="icono" />
                        <input
                            type="text"
                            placeholder="username"
                            value={username}  // Asociar el estado 'username' al valor del input
                            onChange={(e) => setUsername(e.target.value)} // Actualizar el estado 'username' cuando el input cambie
                            required
                        />
                        <label>Usuario</label>
                    </div>
                    <div className="caja-input">
                        <FaLock className="icono" />
                        <input
                            type="password"
                            placeholder="password"
                            value={password}  // Asociar el estado 'password' al valor del input
                            onChange={(e) => setPassword(e.target.value)} // Actualizar el estado 'password' cuando el input cambie
                            required
                        />
                        <label>Contraseña</label>
                    </div>
                    <div className="opciones-login">
                        <div className="recordar">
                            <input type="checkbox" id="recordar" />
                            <label htmlFor="recordar">Recordar</label>
                        </div>
                        <a href="# " onClick={() => setIsForgotPassword(true)} className="olvido-contraseña">¿Olvidaste tu Contraseña?</a>
                    </div>
                    <button type="submit">Iniciar</button>
                </form>
            )}
            <div className="imagen-login">
                <img src={fondoImage} alt="Login" />
            </div>
        </div>
    );
};

export default LoginRegister;

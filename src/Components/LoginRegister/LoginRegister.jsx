import React, { useState } from 'react';
import "./LoginRegister.css";
import { FaUser, FaLock } from "react-icons/fa";
import fondoImage from '../assets/imagen.jpg';

const LoginRegister = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);

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
                <form className="formulario-login" onSubmit={(e) => { e.preventDefault(); /* Lógica para manejar el inicio de sesión/registro */ }}>
                    {isRegister ? (
                        <>
                            <h2>Registrarse</h2>
                            <div className="caja-input">
                                <FaUser className="icono" />
                                <input type="text" placeholder="Nombre" required />
                                <label>Nombre</label>
                            </div>
                            <div className="caja-input">
                                <FaUser className="icono" />
                                <input type="text" placeholder="Apellido" required />
                                <label>Apellido</label>
                            </div>
                            <div className="caja-input">
                                <FaUser className="icono" />
                                <input type="text" placeholder="Usuario" required />
                                <label>Usuario</label>
                            </div>
                            <div className="caja-input">
                                <FaUser className="icono" />
                                <input type="email" placeholder="Correo electrónico" required />
                                <label>Correo electrónico</label>
                            </div>
                            <div className="caja-input">
                                <FaLock className="icono" />
                                <input type="password" placeholder="Contraseña" required />
                                <label>Contraseña</label>
                            </div>
                            <div className="caja-input">
                                <FaLock className="icono" />
                                <input type="password" placeholder="Confirmar contraseña" required />
                                <label>Confirmar contraseña</label>
                            </div>
                            <button type="submit">Registrar</button>
                            <p>¿Ya tienes cuenta? <a href="# " onClick={() => setIsRegister(false)}>Iniciar sesión</a></p>
                        </>
                    ) : (
                        <>
                            <h2>Iniciar sesión</h2>
                            <div className="caja-input">
                                <FaUser className="icono" />
                                <input type="text" placeholder="Usuario" required />
                                <label>Usuario</label>
                            </div>
                            <div className="caja-input">
                                <FaLock className="icono" />
                                <input type="password" placeholder="Contraseña" required />
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
                            <p>¿Aún no tienes cuenta? <a href="# " onClick={() => setIsRegister(true)}>Registrar</a></p>
                        </>
                    )}
                </form>
            )}
            <div className="imagen-login">
                <img src={fondoImage} alt="Login" />
            </div>
        </div>
    );
};

export default LoginRegister;

import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData} from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/modalInfo";
import { useState } from "react";

const LoginForm = () => {
    const [values, handleChange, resetForm] = useForm({ username: '', email: '', password: ''});
    const [ showModalInfo, setShowModalInfo ] = useState(false);
    const [modalMessage, setModalMessage] = useState(''); 
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const [showLogoutModal, setShowLogoutModal] = useState(false);
    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        // Validar contraseña
        if (values.password === 'modulo1') {
            console.log('Login exitoso');
            dispatch(saveFormData(values));
            //setModalMessage('Bienvenido al Módulo 7');
        } else {
            setModalMessage('Password incorrecto');
            setShowModalInfo(true);
            resetForm();
        }
    }

    const hideModalInfo= () =>{
        setShowModalInfo(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogoutClick = () => {
        setShowLogoutModal(true); // Mostrar el modal de confirmación de logout
    };

    const handleLogoutConfirm = () => {
        dispatch(clearFormData()); // Limpiar los datos en Redux
        setShowLogoutModal(false); // Ocultar el modal de confirmación
    };

    const handleLogoutCancel = () => {
        setShowLogoutModal(false); // Ocultar el modal de confirmación
    };

   /* const showModal = () => {
        setShowModalInfo(true);
    };*/

    return (
      
        <motion.div
            initial={{opacity: 0, y: -70}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1}}
        >
       
        <div className="container">
            <ModalInfo 
                visible = { showModalInfo }
                message = { modalMessage }
                onClose = { hideModalInfo } 
            />
                 {showLogoutModal && (
                    <div className="logout-modal">
                        <p>¿Estás seguro que quieres cerrar sesión?</p>
                        <button onClick={handleLogoutConfirm} className="logout-confirm-button">Presiona para salir!!!</button>
                        <button onClick={handleLogoutCancel} className="logout-cancel-button">X</button>
                    </div>
                )}
            <form onSubmit={handleSubmit}>
                <h5>username: {form.formData.username}</h5>
                <h5>email: {form.formData.email}</h5> 
              
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type={passwordVisible ? 'text' : 'password'}
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="password-toggle"
                    >
                        {passwordVisible ? 'Hide' : 'Show'}
                    </button>
                </div>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <a href="#" onClick={handleLogoutClick} className="logout-link">Logout</a>
                    {/* <button type="button" onClick={showModal}>Mostrar modal</button> */}
                </div>
                
            </form>
        </div>
        </motion.div>
    );
};

export default LoginForm;
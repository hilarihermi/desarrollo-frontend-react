import useForm from "../../hooks/useForm";
import { useSelector, useDispatch } from 'react-redux';
import {saveFormData, clearFormData } from "../../redux/form/formActions";
import { motion } from "framer-motion";
import ModalInfo from "../../components/modalInfo";
import { useState } from "react";
import LogoutModal from "../../components/LogoutModal";

const LoginForm = () => {
    const [values, handleChange, resetForm, clearForm] = useForm({ username: '', email: '', password: ''});
    const [ showModalInfo, setShowModalInfo ] = useState(false);
    const [modalMessage, setModalMessage] = useState(''); 
    const [passwordVisible, setPasswordVisible] = useState(false); 
    const [showModalLogout, setShowModalLogout] = useState(false);

    const form = useSelector(state => state.form);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
        if (values.password === 'mod7ReactUSIP') {
            console.log('Login exitoso');
            dispatch(saveFormData(values));
        } else {
            setModalMessage('Password incorrecto');
            setShowModalInfo(true);
            resetForm();
        }
    }

    const hideModalInfo= () =>{
        setShowModalInfo(false);
    };

    const handleLogoutConfirm = () => {
        dispatch(clearFormData());
        clearForm();
        setShowModalLogout(false);
    };
  
    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const hideModalLogout = () => setShowModalLogout(false);

    const showModalLogoutConfirm = () =>{
         setShowModalLogout(true);
    }

  
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
            <LogoutModal
                    visible={showModalLogout}
                    onClose={hideModalLogout}
                    onConfirm={handleLogoutConfirm}
            />

            <form onSubmit={handleSubmit}>
                <h1> Login Form</h1>
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
                    <button type="submit"> Submit </button>&nbsp;&nbsp;
                    <a href="#!" onClick={showModalLogoutConfirm} className="logout-link"> Logout </a>
                    
                    {/* <button type="button" onClick={showModal}>Mostrar modal</button> */}
                </div> 
            </form>
        </div>
        </motion.div>
    );
};

export default LoginForm;
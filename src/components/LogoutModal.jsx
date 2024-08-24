
import {motion} from 'framer-motion';

const LogoutModal = ({ visible, onClose, onConfirm  }) => {
    if(!visible){
       return null;
    }
    return(
        <div className=" modal-overlay">
            <motion.div
                className="notification-success"
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <div >
                    <span className="close" onClick={onClose}>&times;</span>
                    <p>¿Estás seguro que quieres cerrar sesión?</p>
                    <button onClick={onConfirm}>Presiona para salir!!!</button>
                </div>
            </motion.div>   
        </div>
    );
}

export default LogoutModal;
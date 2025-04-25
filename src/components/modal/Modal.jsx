// src/components/modal/Modal.jsx
import React from 'react';
import styles from './Modal.module.css';
import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = ({ children, isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
{/*                 <button className={styles.closeBtn} onClick={onClose}>
                    <IoIosCloseCircleOutline />
                </button> */}
                {children}

                <div className={styles.botones}>
                    <button onClick={onClose} className='btnVolver'>Volver</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;

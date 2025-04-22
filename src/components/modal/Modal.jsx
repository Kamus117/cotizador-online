import React from 'react'
import style from './Modal.module.css'

const Modal = ({model}) => {
    return (
        <div  className={style.modal} >
            <h2>{model.marca} {model.nombre}</h2>
            <div className={style.imagen}>
                <img src={model.imagen} alt={model.marca} />
        </div>
        </div>
    )
}

export default Modal
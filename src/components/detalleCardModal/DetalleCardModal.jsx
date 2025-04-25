// src/components/detalleCardModal/DetalleCardModal.jsx
import React, { useState, useEffect } from 'react';
import Modal from '../modal/Modal';
import style from './DetalleCardModal.module.css';
import trad from '../../tools/trad';
import { usePedido } from '../../context/PedidoContext';

const DetalleCardModal = ({ isOpen, onClose, data, cantidadInicial, setCantidad }) => {

    const { pedido } = usePedido();
    const [cantidad, setCantidadLocal] = useState(pedido[data.id] || 0);


    useEffect(() => {
        setCantidadLocal(cantidadInicial || 0);
    }, [cantidadInicial]);

    const handleAgregar = () => {
        setCantidad(cantidad);
        onClose();
    };

    const handleBorrar = () => {
        setCantidad(0);
        setCantidadLocal(0);
    };

    return (
        <>
            <div className={style.contenedor}>
                <h2 className={style.modelo}>{data.marca} {data.nombre}</h2>
                <p>Índice de carga: {data.indiceCarga}</p>
                <p>Precio total: ${trad.precio(data.precio)}</p>
                <p>En 5 cheques de: ${trad.precio(data.precio / 5)}</p>

                <div className={style.controlesCantidad}>
                    <button className={style.boton} onClick={() => setCantidadLocal(Math.max(0, cantidad - 1))}>−</button>

                    <input
                        type="number"
                        min="0"
                        value={cantidad}
                        onChange={(e) => setCantidadLocal(Math.max(0, parseInt(e.target.value) || 0))}
                        className={style.inputCantidad}
                    />

                    <button className={style.boton} onClick={() => setCantidadLocal(cantidad + 1)}>+</button>
                </div>

                <div className={style.acciones}>
                    <button className={'btn'} onClick={handleAgregar}>Agregar al pedido</button>
                    {/* <button className={`${'btn'} ${style.borrar}`} onClick={handleBorrar}>Borrar selección</button> */}
                </div>
            </div>
        </>
    );
};

export default DetalleCardModal;

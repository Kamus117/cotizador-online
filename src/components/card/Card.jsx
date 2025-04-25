// src/components/card/Card.jsx
import React, { useState } from 'react';
import trad from '../../tools/trad';
import style from './Card.module.css';
import DetalleCardModal from '../detalleCardModal/DetalleCardModal';
import { usePedido } from '../../context/PedidoContext';

const Card = (data) => {
    const { abrirDetallePorId } = usePedido();


    return (
        <div className={style.card} onClick={() => abrirDetallePorId(data.id)}>

            <p className={style.marca}>
                {data.marca} {data.nombre}{' '}
                {data.oferta && <b className={style.oferta}>Oferta🔥</b>}
            </p>
            <p className={style.indice}>Índice: {data.indiceCarga}</p>
            <div className={style.precio}>
                En 5 cuotas de ${trad.precio(data.precio / 5)}{' '}
                <span className={style.total}>
                    Total: ${trad.precio(data.precio)}
                </span>
            </div>
        </div>
    );
};

export default Card;

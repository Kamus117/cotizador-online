// src/context/PedidoContext.jsx
import React, { createContext, useContext, useState } from 'react';

const PedidoContext = createContext();

export const usePedido = () => useContext(PedidoContext);

export const PedidoProvider = ({ children }) => {
    const [pedido, setPedido] = useState({});
    const [modalDetalleAbierto, setModalDetalleAbierto] = useState(null);

    const [modalDetalleId, setModalDetalleId] = useState(null);

    const abrirDetallePorId = (id) => {
        setModalDetalleId(id);
    };


    const actualizarCantidad = (id, cantidad) => {
        setPedido(prev => {
            const nuevoPedido = { ...prev };
            if (cantidad === 0) {
                delete nuevoPedido[id];
            } else {
                nuevoPedido[id] = cantidad;
            }
            return nuevoPedido;
        });
    };

    return (
        <PedidoContext.Provider
            value={{
                pedido,
                actualizarCantidad,
                modalDetalleAbierto,
                setModalDetalleAbierto,
                abrirDetallePorId,
                modalDetalleId,
                setModalDetalleId
            }}
        >
            {children}
        </PedidoContext.Provider>
    );
};

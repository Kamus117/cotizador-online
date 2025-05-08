// src/components/barraPedido/BarraPedido.jsx
import React, { useState } from 'react';
import { usePedido } from '../../context/PedidoContext';
import styles from './BarraPedido.module.css';
import Modal from '../modal/Modal';
import trad from '../../tools/trad';
import { listaCompleta } from '../../data/modelos';
import { BsTrash3 } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const BarraPedido = () => {
    const { pedido, actualizarCantidad, setModalDetalleAbierto, setModalDetalleId } = usePedido();
    const [mostrarModal, setMostrarModal] = useState(false);

    const modelosElegidos = Object.entries(pedido).map(([id, cantidad]) => {
        const modelo = listaCompleta
            .flatMap(m => m.modelos)
            .find(mod => mod.id === parseInt(id));
        return { ...modelo, cantidad };
    });

    const total = modelosElegidos.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
    );

    const vaciarPedido = () => {
        modelosElegidos.forEach(item => actualizarCantidad(item.id, 0));
        setMostrarModal(false);
    };

    const urlWhatsApp = `https://wa.me/541121819431?text=${encodeURIComponent(
        `Hola! Quiero pedir:\n\n${modelosElegidos
            .map(
                item =>
                    `• ${item.marca} ${item.nombre} (${item.medidas}) x${item.cantidad} - $${trad.precio(item.precio * item.cantidad)}`
            )
            .join('\n')}\n\nTotal: $${trad.precio(total)}`
    )}`;


    const volverEditar = (item) => {
        setMostrarModal(false); // Cierra modal resumen
        setTimeout(() => {
            setModalDetalleId(item.id); // <- ¡Este es el que abre el modal correcto!
        }, 300); // Espera para evitar solapamiento de modales
    };


    if (modelosElegidos.length === 0) return null;

    const cantidadTotal = modelosElegidos.reduce((acc, item) => acc + item.cantidad, 0);

    return (
        <>
            <div className={styles.barra} onClick={() => setMostrarModal(true)}>
                <p>Ver mi pedido · {cantidadTotal} {cantidadTotal === 1 ? 'cubierta' : 'cubiertas'}</p>
            </div>

            <Modal isOpen={mostrarModal} onClose={() => setMostrarModal(false)}>
                <div className={styles.modalContent}>
                    <h2>Resumen del Pedido</h2>
                    <ul className={styles.ulContainer}>
                        {modelosElegidos.map(item => (
                            <li key={item.id}>
                                <div className={styles.contenedorLi}>
                                    <div className={styles.contenedorItem}>
                                        <p className={styles.itemInfo}>
                                            <span className={styles.itemModelo}>{item.marca} {item.nombre}</span>
                                        </p>
                                        <b className={styles.itemCantidad}>x {item.cantidad}</b>
                                    </div>

                                    <div className={styles.contenedorBotones}>
                                        <button className={styles.editar} onClick={() => volverEditar(item)}>
                                            Editar{/* <MdEdit /> */}
                                        </button>
                                        <button className={styles.editar} onClick={() => actualizarCantidad(item.id, 0)}>
                                            <BsTrash3 />
                                        </button>

                                    </div>
                                </div>
                                <span className={styles.itemMedidas}>{trad.nombre(item.tipo)}  {item.medidas}</span>
                            </li>
                        ))}
                    </ul>

                    <div>
                        
                    </div>
                    {/* <p className={styles.total}>En 5 pagos de: ${trad.precio(total / 5)}</p> */}
                    <p className={styles.total}>Total: ${trad.precio(total)}</p>

                    <div className={styles.acciones}>
                        <a className={styles.btnWsp} href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
                            <p>Enviar por WhatsApp</p> <FaWhatsapp />
                        </a>
                        {/*                         <button className={styles.vaciar} onClick={vaciarPedido}>
                            Vaciar pedido
                        </button> */}
                    </div>
                </div>
            </Modal>
        </>
    );
};

export default BarraPedido;

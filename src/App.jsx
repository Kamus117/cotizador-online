import { listaCompleta } from "./data/modelos"
import Lista from "./components/lista/Lista"
import { useEffect, useState } from "react";
import BarraPedido from "./components/barraPedido/BarraPedido";
import Modal from "./components/modal/Modal";
import DetalleCardModal from "./components/detalleCardModal/DetalleCardModal";
import { usePedido } from "./context/PedidoContext";

function App() {
  const [markUp, setMarkUp] = useState(0);
  const [medidas, setMedidas] = useState([]);
  const { modalDetalleAbierto, setModalDetalleAbierto, pedido, actualizarCantidad, modalDetalleId, setModalDetalleId } = usePedido();

  const [dataDetalle, setDataDetalle] = useState(null);

  useEffect(() => {
    if (modalDetalleId) {
      const encontrado = listaCompleta.flatMap(m => m.modelos).find(mod => mod.id === modalDetalleId);
      setDataDetalle(encontrado || null);
    } else {
      setDataDetalle(null);
    }
  }, [modalDetalleId]);


  console.log(dataDetalle);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    // Obtener y convertir markup
    const markupParam = parseFloat(params.get("markup"));
    setMarkUp(!isNaN(markupParam) ? markupParam : 0);

    // Obtener medidas (puede venir como string separado por comas)
    const medidasParam = params.get("medidas");
    if (medidasParam) {
      const medidasArray = medidasParam.split(",").map(m => m.trim());
      setMedidas(medidasArray);
    }
  }, []);

  return (
    <>
      <div className="fondo"></div>
      <a className="wsp" href="https://wa.me/541121819431">
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="whatsapp"
          className="whatsapp"
        />
      </a>
      <main>
        <div className="container">
          <div className="text-center">
            <h1 className="title">Tirenostic</h1>
            {/*             <p className="subtitle">Cotización de Cubiertas {medidas.length > 0 ? `${medidas.join(", ")}` : ""}</p> */}
            <p className="subtitle">¡Haz click en los productos y arma tu pedido!</p>
            <p className="subtitle">Precios finales en cinco pagos con IVA ya incluido · 0-30-60-90-120</p>
          </div>

          {medidas.length > 0 ? (
            medidas.map((medida, i) => (
              <Lista arr={listaCompleta.filter(item => item.medida.includes(medida))} key={i} />
            ))
          ) : (
            <p>No se han especificado medidas</p>
          )}
          <div className="footer">
            Tirenostic · Especialistas en neumáticos para camiones.
          </div>
        </div>
      </main>

      {dataDetalle && (
        <Modal isOpen={true} onClose={() => setModalDetalleId(null)}>
          <DetalleCardModal
            data={dataDetalle}
            onClose={() => setModalDetalleId(null)}
            cantidadInicial={pedido[dataDetalle.id] || 0}
            setCantidad={(cant) => actualizarCantidad(dataDetalle.id, cant)}
          />
        </Modal>
      )}


      <BarraPedido />
    </>
  );
}

export default App;

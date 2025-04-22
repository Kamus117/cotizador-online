import { listaCompleta } from "./data/modelos"
import Lista from "./components/lista/Lista"
import { useEffect, useState } from "react";

function App() {
  const [markUp, setMarkUp] = useState(0);
  const [medidas, setMedidas] = useState([]);

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

  console.log(medidas)

  return (
    <>
      <div class="fondo"></div>
      <a className="wsp" href="https://wa.me/541121819431">
        <img
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
          alt="whatsapp"
          class="whatsapp"
        />
      </a>
      <main>
        <div className="container">
          <div class="text-center">
            <h1 class="title">Tirenostic</h1>
            <p class="subtitle">Cotización de Cubiertas {medidas.length > 0 ? `${medidas.join(", ")}` : ""}</p>
            <p class="subtitle">Precios finales en cinco cheques IVA incluido · 0-30-60-90-120</p>
          </div>

          {medidas.length > 0 ? (
            medidas.map((medida, i) => (
              <Lista arr={listaCompleta.filter(item => item.medida.includes(medida))} key={i} />
            ))
          ) : (
            <p>No se han especificado medidas</p>
          )}
          <div class="footer">
            Tirenostic · Especialistas en neumáticos para camiones.
          </div>
        </div>
      </main>
    </>
  );
}

export default App;

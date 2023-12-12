import axios from "axios";
import Tarjeta from "../../elements/Tarjeta/Tarjeta";
import "./tarjetas.css";
import { useEffect, useState } from "react";

const Tarjetas = () => {
  //datos para la solicitud a la api
  const timestamp = 1;
  const key = "f1213e3b7cd76bc1318e3e426304997c";
  const hash = "7de8a3085cce2ba453998e9e1f638562";
  const categoria = "comics";
  const url = `https://gateway.marvel.com:443/v1/public/${categoria}?ts=${timestamp}&apikey=${key}&hash=${hash}`;

  const [datos, setDatos] = useState([]);

  //llamado a la API
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
        console.log(datos);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    solicitud();
  }, []);
  //renderizado del componente
  return (
    <main className="container text-center contenedortarjeta">
      {datos.length === 0 ? (
        <div
          className="spinner-border text-danger carga"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        datos.map((item) => (
          <Tarjeta
            key={item.id}
            id={item.id}
            titulo={item.title}
            ruta={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
            descripcion={`${item.stories.collectionURI}?ts=${timestamp}&apikey=${key}&hash=${hash}`}
          />
        ))
      )}
    </main>
  );
};

export default Tarjetas;

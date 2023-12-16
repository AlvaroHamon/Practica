import axios from "axios";
import Tarjeta from "../../elements/Tarjeta/Tarjeta";
import "./tarjetas.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Tarjetas = () => {
  const { categoria } = useParams();
  const login = JSON.parse(localStorage.getItem("login"));

  const [datos, setDatos] = useState([]);
  const navigate = useNavigate();
  const url = `https://gateway.marvel.com:443/v1/public/${categoria}?ts=1&apikey=f1213e3b7cd76bc1318e3e426304997c&hash=7de8a3085cce2ba453998e9e1f638562`;

  //llamado a la API
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    solicitud();
  }, [categoria]);

  //renderizado del componente
  return (
    <main className="container text-center contenedortarjeta">
      {login === true ? (
        datos.length === 0 ? (
          <div
            className="spinner-border text-danger carga"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          datos.map(({ id, title, thumbnail, stories, name }) => (
            <Tarjeta
              key={id}
              id={id}
              titulo={title ? title : name}
              ruta={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
              descripcion={`${stories.collectionURI}?ts=1&apikey=f1213e3b7cd76bc1318e3e426304997c&hash=7de8a3085cce2ba453998e9e1f638562`}
            />
          ))
        )
      ) : (
        navigate("/")
      )}
    </main>
  );
};

export default Tarjetas;

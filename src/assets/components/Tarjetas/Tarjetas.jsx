import axios from "axios";
import Tarjeta from "../../elements/Tarjeta/Tarjeta";
import "./tarjetas.css";
import { useEffect, useState } from "react";

const Tarjetas = () => {
  const [datos, setDatos] = useState([]);
  const [imagen, setImagen] = useState([]);
  const timestamp = 1;
  const key = "f1213e3b7cd76bc1318e3e426304997c";
  const hash = "7de8a3085cce2ba453998e9e1f638562";
  const url = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${key}&hash=${hash}`;

  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        console.log(respuesta.data.data.results[3]);
        setDatos(respuesta.data.data.results[3]);
        setImagen(respuesta.data.data.results[3].images[0].path);
        console.log(respuesta.data.data.results[3].images[0].path);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    solicitud();
  }, []);

  return (
    <main className="contenedor">
      <Tarjeta
        ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/3/30/6531859313abc/portrait_uncanny.jpg"
        titulo="titulo del comic"
        descripcion="descripcion del comic"
      />
      <Tarjeta
        ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/5/d0/651c3e3b55c03/portrait_uncanny.jpg"
        titulo="titulo del comic"
        descripcion="descripcion del comic"
      />
      <Tarjeta
        ruta={imagen + "/portrait_xlarge.jpg"}
        titulo={datos.title}
        descripcion="descripcion del comic"
      />
      <Tarjeta
        ruta="https://cdn.marvel.com/u/prod/marvel/i/mg/5/d0/651c3e3b55c03/portrait_uncanny.jpg"
        titulo="titulo del comic"
        descripcion="descripcion del comic"
      />
    </main>
  );
};

export default Tarjetas;

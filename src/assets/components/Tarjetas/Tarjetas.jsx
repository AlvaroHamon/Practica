import axios from "axios";
import Tarjeta from "../../elements/Tarjeta/Tarjeta";
import "./tarjetas.css";
import { useEffect, useState } from "react";

const Tarjetas = () => {
  //datos para la solicitud a la api
  const timestamp = 1;
  const key = "f1213e3b7cd76bc1318e3e426304997c";
  const hash = "7de8a3085cce2ba453998e9e1f638562";
  const url = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${key}&hash=${hash}`;

  // variable useState para almacernar los datos recibidos por la Api
  const [datos, setDatos] = useState([]);
  //datos useState de prueba para ejemplo
  // const [titulo, setTitulo] = useState("");
  // const [imagen, setImagen] = useState("");

  //lamado a la API
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDatos(respuesta.data.data.results);

        //datos de prueba para ejemplo
        // const comic = respuesta.data.data.results[3];
        // setTitulo(comic.title);
        // setImagen(`${comic.thumbnail.path}/portrait_uncanny.jpg`);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    solicitud();
  }, []);

  return (
    <main className="contenedor">
      {datos.map((item) => (
        <Tarjeta
          key={item.id}
          titulo={item.title}
          ruta={`${item.thumbnail.path}/portrait_uncanny.jpg`}
        />
      ))}

      {/* TARJETA DE PRUEBA PARA EJEMPLO*/}
      {/* <Tarjeta
        ruta={imagen}
        titulo={titulo}
        descripcion="descripcion del comic"
      /> */}
    </main>
  );
};

export default Tarjetas;

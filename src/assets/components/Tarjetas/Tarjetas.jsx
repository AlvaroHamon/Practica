import axios from "axios";
import Tarjeta from "../../elements/Tarjeta/Tarjeta";
import "./tarjetas.css";

const Tarjetas = () => {
  const url = "http(s)://gateway.marvel.com/";

  // axios.get(url);
  // try {
  //   const respuesta=
  // } catch (e) {
  //   console.log("error en la solicitud: " + e);
  // }
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
    </main>
  );
};

export default Tarjetas;

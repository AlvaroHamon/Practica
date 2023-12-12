import axios from "axios";
import "./detail.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  //datos para la solicitud a la api
  const timestamp = 1;
  const key = "f1213e3b7cd76bc1318e3e426304997c";
  const hash = "7de8a3085cce2ba453998e9e1f638562";
  const categoria = "comics";
  const url = `https://gateway.marvel.com:443/v1/public/${categoria}/${id}?ts=${timestamp}&apikey=${key}&hash=${hash}`;

  const [detail, setDetail] = useState([]);

  //llamado a la API
  useEffect(() => {
    const solicitud = async () => {
      try {
        const respuesta = await axios.get(url);
        setDetail(respuesta.data.data.results[0]);
        console.log(detail);
      } catch (error) {
        console.log("error: " + error);
      }
    };
    solicitud();
  }, [url]);

  return (
    <main className="contenedordetalle">
      {!detail.thumbnail ? (
        <div
          className="spinner-border text-danger carga"
          style={{ width: "5rem", height: "5rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="contentdetail">
          <img
            src={`${detail.thumbnail.path}/portrait_uncanny.${detail.thumbnail.extension}`}
            alt=""
          />
          <div className="descriptiondetail">
            <h5>{detail.title}</h5>
            <h5>Description:</h5>
            {detail.description ? (
              <p>{detail.description}</p>
            ) : (
              <p>Not Available</p>
            )}
          </div>
        </div>
      )}
    </main>
  );
};

export default Detail;

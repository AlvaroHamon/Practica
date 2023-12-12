import { NavLink } from "react-router-dom";

const Tarjeta = (props) => {
  return (
    <>
      <div className="card col" style={{ width: "15rem" }}>
        <img
          src={props.ruta}
          className="card-img-top img-fluid"
          alt={props.titulo}
          title={props.titulo}
        />
        <div className="card-body">
          <h5 className="card-title">{props.titulo}</h5>
          <NavLink to={`/detalle/${props.id}`} className="btn btn-danger">
            More Information
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;

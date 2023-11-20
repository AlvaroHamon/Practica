import "./campo.css";

export default function Campo(props) {
  return (
    <>
      <label htmlFor={props.identificador}>{props.nombre}</label>
      <input
        type={props.tipo}
        id={props.identificador}
        placeholder={props.placeholder}
      />
    </>
  );
}

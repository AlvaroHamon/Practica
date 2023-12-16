export default function Campo(props) {
  return (
    <>
      <div className="form-floating mb-3">
        <input
          className="form-control"
          type={props.tipo}
          id={props.identificador}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
        <label htmlFor={props.identificador}>{props.nombre}</label>
      </div>
    </>
  );
}

export default function Boton({ texto, funcion }) {
  return (
    <>
      <button type="submit" className="btn btn-danger" onClick={funcion}>
        {texto}
      </button>
    </>
  );
}

export default function Boton({ texto }) {
  return (
    <>
      <button type="submit" className="btn btn-danger">
        {texto}
      </button>
    </>
  );
}

import "./index.css";

export default function Boton({ texto }) {
  return (
    <>
      <button type="submit" className="boton">
        {texto}
      </button>
    </>
  );
}

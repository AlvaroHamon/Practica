import "./page.css";
import imagen from "./error.png";

const Page404 = () => {
  return (
    <div className="contenterror">
      <img
        src={imagen}
        className="img-fluid"
        alt="pagina no encontrada"
        title="pagina no encontrada"
      />
    </div>
  );
};

export default Page404;

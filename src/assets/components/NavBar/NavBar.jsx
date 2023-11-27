import { Link } from "react-router-dom";
import "./index.css";
import Boton from "../../elements/Boton/Boton";

const NavBar = () => {
  return (
    <header className="contenedorheader">
      <nav>
        <ul>
          <li>
            <Link to="/" className="link">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="login" className="link">
              Iniciar sesion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

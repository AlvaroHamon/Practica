import Boton from "../../elements/Boton/Boton";
import "./index.css";

const NavBar = () => {
  return (
    <header className="contenedorheader">
      <Boton texto="Inicio" />
      <Boton texto="Iniciar Sesion" />
      {/* <ul>
        <li>Inicio</li>
        <li>Iniciar sesion</li>
      </ul> */}
      {/* <nav>
      </nav> */}
    </header>
  );
};

export default NavBar;

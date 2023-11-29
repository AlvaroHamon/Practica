import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import "./index.css";

const NavBar = () => {
  return (
    <header className="contenedorheader">
      <nav>
        <ul>
          <li>
            <NavLink to="/" className="link" activeclassname="active">
              <HomeIcon />
              Inicio
            </NavLink>
          </li>
          <li>
            <h3>Marvel</h3>
          </li>
          <li>
            <NavLink to="login" className="link" activeclassname="active">
              Iniciar Sesión
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;

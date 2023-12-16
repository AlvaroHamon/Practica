import { NavLink } from "react-router-dom";
import { useAuth } from "../../services/useContext";

const NavBar = () => {
  const { handleLogout, login } = useAuth();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-bg-danger" to="/">
            Marvel Api
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {login && (
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-bg-danger"
                    to="contenedor/comics"
                  >
                    Comics
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-bg-danger"
                    to={`contenedor/series`}
                  >
                    Series
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-bg-danger"
                    to="contenedor/characters"
                  >
                    Personajes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link text-bg-danger"
                    to="/"
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    Cerrar Sesión
                  </NavLink>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;

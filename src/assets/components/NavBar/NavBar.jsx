import { NavLink } from "react-router-dom";

const NavBar = () => {
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-bg-danger" href="#">
                  Comics
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-bg-danger" href="#">
                  Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-bg-danger" href="#">
                  Personajes
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-bg-danger" to="/login">
                  Iniciar Sesión
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;

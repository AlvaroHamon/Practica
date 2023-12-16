import { Link, NavLink } from "react-router-dom";
import Boton from "../../elements/Boton/Boton";
import Campo from "../../elements/Campo/Campo";
import "./login.css";
import { useAuth } from "../../services/useContext";

export default function Login() {
  const { usuario, setUsuario, contrasena, setContrasena, handleLogin, error } =
    useAuth();
  return (
    <main className="contenedorprincipal">
      <div className="contenedorLog">
        <h2>Iniciar Sesión</h2>
        <form
          className="formularioLog"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <Campo
            identificador="nombre"
            tipo="text"
            nombre="Nombre"
            placeholder="Ingrese el nombre de usuario"
            value={usuario}
            onChange={(evento) => {
              setUsuario(evento.target.value);
            }}
          />
          <Campo
            identificador="contrasena"
            tipo="password"
            nombre="contraseña"
            placeholder="Ingrese su contraseña"
            value={contrasena}
            onChange={(e) => {
              setContrasena(e.target.value);
            }}
          />
          {error && <p className="text-danger">{error}</p>}
          <Boton texto="Iniciar Sesión" />
          <p className="parrafo">
            No tienes cuenta,{" "}
            <NavLink to="/registro" className="linklogin">
              Crear una
            </NavLink>
            .
          </p>
        </form>
      </div>
    </main>
  );
}

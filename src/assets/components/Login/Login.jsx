import Boton from "../../elements/Boton/Boton";
import Campo from "../../elements/Campo/Campo";
import "./login.css";

export default function Login() {
  return (
    <>
      <main className="contenedorLog">
        <h2>Iniciar Sesión</h2>
        <form className="formularioLog">
          <Campo
            identificador="nombre"
            tipo="text"
            nombre="Nombre"
            placeholder="Ingrese el nombre de usuario"
          />
          <Campo
            identificador="contrasena"
            tipo="password"
            nombre="contraseña"
            placeholder="Ingrese su contraseña"
          />
          <Boton texto="Iniciar Sesión" />
          <p>
            No tienes cuenta, <a href="#">Crear una</a>.
          </p>
        </form>
      </main>
    </>
  );
}

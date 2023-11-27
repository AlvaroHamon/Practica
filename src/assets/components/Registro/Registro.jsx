import "./registro.css";
import Boton from "../../elements/Boton/Boton";
import Campo from "../../elements/Campo/Campo";

export default function Registro() {
  return (
    <main className="contentprincipalr">
      <div className="contenedorreg">
        <h2>Crear Usuario</h2>
        <form action="" className="formularioreg">
          <Campo
            identificador="nombre"
            tipo="text"
            nombre="Nombre"
            placeholder="Ingrese su nombre"
          />
          <Campo
            identificador="apellido"
            tipo="text"
            nombre="Apellido"
            placeholder="Ingrese su apellido completo"
          />
          <Campo
            identificador="email"
            tipo="email"
            nombre="Email"
            placeholder="Ingrese su correo electrónico"
          />
          <Campo
            identificador="confiemail"
            tipo="email"
            nombre="Confirme su email"
            placeholder="Confirme su correo electrónico"
          />
          <Campo
            identificador="contrasena"
            tipo="password"
            nombre="Contraseña"
            placeholder="Ingrese su contraseña"
          />
          <Campo
            identificador="conficontrasena"
            tipo="password"
            nombre="Confirme su contraseña"
            placeholder="Confirme su contraseña"
          />
          <Boton texto="Crear Usuario" />
        </form>
      </div>
    </main>
  );
}

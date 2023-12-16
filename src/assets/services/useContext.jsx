import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  //info login
  const [login, setLogin] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");
  const [categoria, setCategoria] = useState("comics");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (usuario === "" || contrasena === "") {
      setError("Los campos no pueden estar vacíos");
    } else {
      setLogin(true);
      localStorage.setItem("login", true);
      navigate(`/contenedor/comics`);
    }
  };

  const handleLogout = () => {
    setLogin(false);
    localStorage.removeItem("login");
    setError(null);
    setUsuario("");
    setContrasena("");
    navigate("/");
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        categoria,
        handleLogin,
        handleLogout,
        setCategoria,
        usuario,
        setUsuario,
        contrasena,
        setContrasena,
        error,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

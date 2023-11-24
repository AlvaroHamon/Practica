import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import NavBar from "./assets/components/NavBar/NavBar";
import Footer from "./assets/components/Footer/Footer";
// import Login from "./assets/components/Login/Login";
import Registro from "./assets/components/Registro/Registro";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <Registro />
    <Footer />
  </React.StrictMode>
);

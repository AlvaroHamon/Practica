import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./assets/components/NavBar/NavBar";
import Tarjetas from "./assets/components/Tarjetas/Tarjetas";
import Login from "./assets/components/Login/Login";
import Registro from "./assets/components/Registro/Registro";
import Footer from "./assets/components/Footer/Footer";
import "./index.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Detail from "./assets/components/Detail/Detail";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tarjetas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detalle/:id" element={<Detail />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./assets/components/NavBar/NavBar";
import Tarjetas from "./assets/components/Tarjetas/Tarjetas";
import Login from "./assets/components/Login/Login";
import Registro from "./assets/components/Registro/Registro";
import Footer from "./assets/components/Footer/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tarjetas />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
    <Footer />
  </React.StrictMode>
);

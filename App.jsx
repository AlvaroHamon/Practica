import NavBar from "./src/assets/components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Tarjetas from "./src/assets/components/Tarjetas/Tarjetas";
import Login from "./src/assets/components/Login/Login";
import Registro from "./src/assets/components/Registro/Registro";
import Detail from "./src/assets/components/Detail/Detail";
import Footer from "./src/assets/components/Footer/Footer";
import Page404 from "./src/assets/components/Page404/Page404";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path={`/contenedor/:categoria`} element={<Tarjetas />} />
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/detalle/:categoria/:id" element={<Detail />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

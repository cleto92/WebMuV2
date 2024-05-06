import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Inicio from "./Pages/Inicio";
import CrearCuenta from "./Pages/CrearCuenta";
import Rankings from "./Pages/Rankings";
import Descargas from "./Pages/Descargas";
import Informacion from "./Pages/Informacion";
import RankingClanes from "./Pages/RankingClanes";
import RecuperarCuenta from "./Pages/RecuperarCuenta";
import Login from "./Pages/LoginOff";
import MiCuenta from "./Pages/MiCuenta";
import MisPersonajes from "./Cuenta/MisPersonajes";
import ComprarVip from "./Cuenta/ComprarVip";
import CambiarContraseña from "./Cuenta/CambiarContraseña";
import Admin from "./Admin/Admin";
import CrearNoticia from "./Admin/CrearNoticia";
import NoticiaID from "./Pages/Noticia";
import TodasNoticias from "./Pages/TodasNoticias";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/crearCuenta" element={<CrearCuenta />} />
        <Route path="/ranking" element={<Rankings />} />
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/rankingClanes" element={<RankingClanes />} />
        <Route path="/RecuperarCuenta" element={<RecuperarCuenta />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/MiCuenta" element={<MiCuenta />} />
        <Route path="/MisPersonajes" element={<MisPersonajes />} />
        <Route path="/ComprarVip" element={<ComprarVip />} />
        <Route path="/cambiarContraseña" element={<CambiarContraseña />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/CrearNoticia" element={<CrearNoticia />} />
        <Route path="/Noticia/:id" element={<NoticiaID />} />
        <Route path="/mas-noticias" element={<TodasNoticias />} />
      </Routes>
    </Router>
  );
};

export default App;

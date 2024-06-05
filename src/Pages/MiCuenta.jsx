import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const MiCuenta = () => {
  const { cerrarSesion, usuarioActual } = useAuth(); 
  const navigate = useNavigate();
  const [cargando, setCargando] = useState(true);

  const CerrandoSesion = async () => {
    await cerrarSesion();
    navigate('/');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
        <Spinner />
        <h1 className="text-white mt-4">Ingresando</h1>
      </div>
    );
  }

  return (
    <Layout>
      <div className="text-white font-bold">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to='/cambiarContraseña' className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Cambiar Contraseña</Link>
          {usuarioActual && usuarioActual.memb___id && (
            <Link to={`/MisPersonajes/${usuarioActual.memb___id}`} className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Mis Personajes</Link>
          )}
          <Link to='/ComprarVip' className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Comprar Vip</Link>
          <Link onClick={CerrandoSesion} className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Cerrar Sesión</Link>
        </nav>
      </div>
    </Layout>
  );
};

export default MiCuenta;

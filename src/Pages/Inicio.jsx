import Layout from "../Components/Layout";
import PortalNoticias from "../Pages/PortalNoticias";
import Estadisticas from "../Components/Estadisticas";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";


const Inicio = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (cargando) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <Spinner />
    </div>
    );
  }

  return (
    <div>
      <Layout>
        <PortalNoticias />
        <Estadisticas />
      </Layout>
    </div>
  );
};

export default Inicio;

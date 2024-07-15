import Layout from "../Components/Layout";
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import ListadoNoticias from "../Components/ListadoNoticias";
import { getObtenerTodasNoticias } from "../Api/ApiNoticias";

const TodasNoticias = () => {
  const [cargando, setCargando] = useState(true);
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerTodasNoticias = async () => {
      const fetchNoticias = await getObtenerTodasNoticias();
      setNoticias(fetchNoticias);
      setTimeout(() => {
        setCargando(false);
      }, 3000);
    };
    obtenerTodasNoticias();
  }, []);

  if (cargando) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
        <Spinner />
      </div>
    );
  }

  return (
    <Layout>
      <div>
        <ListadoNoticias noticias={noticias} />
      </div>
    </Layout>
  );
};

export default TodasNoticias;

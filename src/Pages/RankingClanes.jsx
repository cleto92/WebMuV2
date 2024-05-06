/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";
import RankingClan from "../Components/RankingClan";

const RankingClanes = () => {
  const [cargando, setCargando] = useState(true);
  const [clanes, setClanes] = useState([]);

  useEffect(() => {
    const obtenerClanes = async () => {
      try {
        const respuesta = await fetch(
          "http://localhost:5555/api/obtenerClanes"
        );
        const resultado = await respuesta.json();
        setClanes(resultado.clanes);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClanes();
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      <Layout>
        <div>
          <Link
            to="/ranking"
            className="inline-block px-2 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
          >
          RANKING DE JUGADORES
          </Link>
        </div>
        <div className="overflow-x-auto mt-10">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-transparent">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  NOMBRE DEL CLAN
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PUNTOS
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  LIDER
                </th>
                
              </tr>
            </thead>

            <RankingClan clanes={clanes} />
          </table>
        </div>
      </Layout>
    </div>
  );
};

export default RankingClanes;

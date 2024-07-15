import Layout from "../Components/Layout";
import Ranking from "../Components/Ranking";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { getObtenerPersonajesRanking } from "../Api/ApiRanking";

const Rankings = () => {
  const [rankingJugadores, setRankingJugadores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerJugadores = async () => {
      const fetchgetObtenerJugadores = await getObtenerPersonajesRanking();
      setRankingJugadores(fetchgetObtenerJugadores);
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    obtenerJugadores();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
          <Spinner />
        </div>
      ) : (
        <Layout>
          <div>
            <Link
              to="/rankingClanes"
              className="inline-block px-2 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
            >
              RANKING DE CLANES
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
                    CLASE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NOMBRE
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    RESET
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    NIVEL
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    FUERZA
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    AGILIDAD
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    VITALIDAD
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ENERGIA
                  </th>
                </tr>
              </thead>

              <Ranking rankingJugadores={rankingJugadores} />
            </table>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Rankings;

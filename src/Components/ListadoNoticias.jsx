/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";

const ListadoNoticias = ({ noticias }) => {
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
    <div className="bg-gray-800 rounded-lg p-4 shadow-lg">
      <div className="border-b-2 border-gray-700 pb-2">
        <h2 className="text-left mb-2 text-2xl font-bold text-white md:text-3xl">
          Todas las Noticias
        </h2>
      </div>
      <ul className="list-none mb-2 pl-0 space-y-3">
        {noticias.map((noticia) => (
          <li key={noticia.id} className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-2">
            <span className="text-sm text-gray-400">
              [{noticia.fecha}]
            </span>
            <Link to={`/Noticia/${noticia._id}`} className="hover:text-gray-300">
              <span className="text-lg text-white font-semibold hover:text-blue-400">
                {noticia.titulo}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListadoNoticias;
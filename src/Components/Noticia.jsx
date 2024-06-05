/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Noticia = ({ noticia }) => {
  const { fecha, titulo, autor } = noticia;

  return (
    <div className="flex mt-8 flex-col bg-gray-900 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full">
      <div className="flex flex-1 flex-col p-4 md:p-6 justify-between">
        <h2 className="mb-2 text-lg md:text-xl font-semibold text-white leading-tight">
          {titulo}
        </h2>
        <div className="flex justify-between items-center">
          <div>
            <span className="text-lg font-medium text-indigo-400">{autor}</span>
            <span className="block text-xs text-gray-400">{fecha}</span>
          </div>
          <Link
            to={`/Noticia/${noticia._id}`}
            className="rounded-lg inline-block font-medium border border-transparent bg-indigo-600 px-3 py-2 text-sm text-white hover:border-indigo-600 hover:text-indigo-600 hover:bg-white transition-all duration-300"
          >
            Leer más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Noticia;

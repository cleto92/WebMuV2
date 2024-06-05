/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";

const NoticiaId = ({ noticia }) => {
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
    <div className="bg-transparent py-6 sm:py-8 lg:py-12 ">
      <div className="mx-auto max-w-screen-md px-4 md:px-8">
        <h1 className="mb-3 text-center text-3xl font-bold text-white sm:text-4xl lg:mb-6">
          {noticia.titulo}
        </h1>
        <p className="mb-4 text-center text-sm text-gray-500">
          <span className="font-semibold text-white">Autor:</span>
          <span className="mx-2 font-semibold text-red-600">
            {noticia.autor}
          </span>
          | <span className="font-semibold text-white">Fecha:</span>
          <span className="mx-2 font-semibold text-blue-400">
            {noticia.fecha}
          </span>
        </p>
        <hr className="mb-8 border-gray-300" />
        <div className="text-gray-700 leading-relaxed">
        <div className="flex justify-center">
  <div className="max-w-lg w-full whitespace-pre-line text-white" dangerouslySetInnerHTML={{ __html: noticia.contenido }}></div>
</div>


        </div>
      </div>
    </div>
  );
};

export default NoticiaId;

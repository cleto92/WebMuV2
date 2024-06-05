import Noticia from "../Components/Noticia";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PortalNoticias = () => {
  const [noticia, setNoticia] = useState([]);

  useEffect(() => {
    const obtenerNoticiaPorId = async () => {
      try {
        const respuesta = await fetch(
          "https://backendv2-7a61b60e5f29.herokuapp.com/api/obtenerNoticias"
        );
        if (!respuesta.ok) {
          throw new Error("No se pudo obtener la noticia");
        }
        let noticias = await respuesta.json();

        noticias.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

        noticias = noticias.slice(0, 4);

        setNoticia(noticias);
      } catch (error) {
        console.error("Error al obtener la noticia:", error);
      }
    };

    obtenerNoticiaPorId();
  }, []);

  return (
<div className="bg-transparent py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
  <div className="border-b-2 border-gray-200 pb-2">
            <h2 className=" text-left text-2xl font-bold text-white md:text-3xl">
              Portal de Noticias
            </h2>
          </div>
    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
    {noticia && noticia.length > 0 ? (
        noticia.map((item, index) => (
            <Noticia key={index} noticia={item} />
        ))
    ) : (
        <div className="text-white font-semibold text-2xl mt-4">NO HAY NOTICIAS</div>
    )}
</div>
    <Link to="/mas-noticias">
      <button className="mt-32 px-2 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105">VER MAS NOTICIAS</button>
    </Link>
  </div>
</div>
  );
};

export default PortalNoticias;

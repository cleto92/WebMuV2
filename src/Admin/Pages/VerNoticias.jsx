import Layout from "../../Components/Layout";
import { useState, useEffect } from "react";
import VerNoticia from "../Components/VerNoticia";


const VerNoticias = () => {
  const [noticias, setNoticias] = useState([]);


  useEffect(() => {
    const obtenerNoticias = async () => {
      try {
        const data = await fetch("https://backendv2-7a61b60e5f29.herokuapp.com/api/obtenerNoticias");
        const response = await data.json();
        const noticiasOrdenadas = response.sort((a, b) => {
          const fechaA = new Date(a.fecha);
          const fechaB = new Date(b.fecha);
          return fechaB - fechaA;
        });

        setNoticias(noticiasOrdenadas);
        console.log(noticiasOrdenadas);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerNoticias();
  }, []);

  return (
    <Layout>
      <div className="text-white bg-transparent ">
        <table className="min-w-full divide-y divide-gray-200 bg-transparent text-sm">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 font-medium text-left">Título</th>
              <th className="px-4 py-2 font-medium text-left">
                Fecha de Creación
              </th>
              <th className="px-4 py-2 font-medium text-left">Autor</th>
              <th className="px-28 py-2 font-medium text-left">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {noticias.map((noticia) => (
              <VerNoticia key={noticia.id} noticia={noticia}  />
            ))}
            <td className="px-16  py-2"></td>
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default VerNoticias;

import Layout from "../../Components/Layout";
import { useState, useEffect } from "react";
import VerNoticia from "../Components/VerNoticia";
import {obtenerNoticiaPanelAdmin} from "../../Api/ApiNoticias"


const VerNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const obtenerNoticias = async () => {
      const fetchNoticias = await obtenerNoticiaPanelAdmin()
      setNoticias(fetchNoticias)
    }
    obtenerNoticias()
  }, [])
  



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

/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';

const VerNoticia = ({ noticia }) => {
  const { _id, fecha, titulo, autor } = noticia;

  const [noticiaId, setNoticiaId] = useState(null)

  useEffect(() => {
    const obtenerNoticiaId = async () => {
      try {
        const response = await fetch(`https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/obtenerNoticiaId/${_id}`);
        const data = await response.json(); 
        setNoticiaId(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (_id) {
      obtenerNoticiaId();
    }
}, [_id]); 
  

  const eliminarNoticia = async (id) => {
    if (window.confirm("¿Desea eliminar la noticia?")) {
      try {
        const response = await fetch(
          `https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/eliminarNoticia/${id}`,
          {
            method: "DELETE",
          }
        );
        const data = await response.json();
        if (response.ok) {
          console.log("Noticia eliminada con éxito", data);
          window.location.reload();
        } else {
          throw new Error(data.mensaje || "Error al eliminar la noticia");
        }
      } catch (error) {
        console.log("Error al eliminar la noticia:", error);
      }
    } else {
      console.log("Eliminación cancelada.");
    }
  };

  return (
    <>
      <tr>
        <td className="px-4 py-2">{titulo}</td>
        <td className="px-4 py-2">{fecha}</td>
        <td className="px-4 py-2">{autor}</td>
        <td className="px-16 py-2">
        <Link
  to={{
    pathname: `/EditarNoticia/${_id}`,
    state: { noticiaId: noticiaId }
  }}
  className="rounded mx-2 bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
>
  Editar Noticia
</Link>
           <button
            onClick={() => eliminarNoticia(_id)}
            className="rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            type="submit"
           >
            Eliminar
          </button>
        </td>
      </tr>
    </>
  );
};

export default VerNoticia;

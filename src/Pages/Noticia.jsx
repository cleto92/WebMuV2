import Layout from '../Components/Layout'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NoticiaID from '../Components/NoticiaId'

const Noticia = () => {

    const [noticia, setNoticia] = useState([]);
    const { id } = useParams(); 
  
    useEffect(() => {
      const obtenerNoticia = async () => {
        try {
          const respuesta = await fetch(`https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/obtenerNoticiaId/${id}`); 
          const datos = await respuesta.json();
          setNoticia(datos);
          console.log([datos])
        } catch (error) {
          console.error("Error al obtener la noticia:", error);
        }
      };
  
      obtenerNoticia();
    }, [id]); 

  return (
    <Layout>
        <div>
          <NoticiaID noticia={noticia} />
        </div>
    </Layout>
  )
}

export default Noticia
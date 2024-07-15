import Layout from '../Components/Layout'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NoticiaID from '../Components/NoticiaId'
import { getObtenerNoticia } from '../Api/ApiNoticias';

const Noticia = () => {

    const [noticia, setNoticia] = useState([]);
    const { id } = useParams(); 
  
    useEffect(() => {
      const fetchNoticia = async () => {
        const datos = await getObtenerNoticia(id);
        setNoticia(datos);
      };
  
      fetchNoticia();
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
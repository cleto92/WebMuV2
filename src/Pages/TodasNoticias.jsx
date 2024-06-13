import Layout from "../Components/Layout"
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import ListadoNoticias from '../Components/ListadoNoticias'


const TodasNoticias = () => {

  const [cargando, setCargando] = useState(true);
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const obtenerTodasLasNoticias = async () => {
          try {
            const respuesta = await fetch(`https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/obtenerNoticias`)
            const resultado = await respuesta.json()
            const ordenarNoticia = resultado.sort((a, b) => {
              const fechaA = new Date(a.fecha)
              const fechaB = new Date(b.fecha)
              return fechaB - fechaA
            })
            setNoticias(ordenarNoticia)
          } catch (error) {
            console.log(error)
          }
    }
  
    obtenerTodasLasNoticias()
  }, [])
  

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

      <Layout>
          <div>
            <ListadoNoticias noticias={noticias} />
          </div>

      </Layout>


  )
}

export default TodasNoticias
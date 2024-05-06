import Layout from "../Components/Layout"
import { Link } from "react-router-dom"
import { Spinner } from "@nextui-org/react"
import { useState, useEffect } from "react"
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";


const Admin = () => {
    const {cerrarSesion} = useAuth()
    const navigate = useNavigate()
    const [cargando, setCargando] = useState(true);
  
    useEffect(() => {
        const token = sessionStorage.getItem("token");
        if (!token) {
          navigate("/Login");
        }
      }, [navigate]);
    
  
    const CerrandoSesion = async () => {
      await cerrarSesion();
      navigate('/'); 
    }
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCargando(false);
      }, 3000);
  
      return () => clearTimeout(timer);
    }, []);
  
    if (cargando) {
      return (
  <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
    <Spinner />
    <h1 className="text-white mt-4">Ingresando</h1>
  </div>
      );
    }

  return (
    <Layout>
        <h1 className="text-white text-center mb-8" >PANEL DE ADMINISTRACION</h1>
        <div className="text-white font-bold">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link to='/CrearNoticia' className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Crear Noticia</Link>
        <Link to='#' className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Editar Personaje</Link>
        <Link onClick={CerrandoSesion} className="mr-5 hover:text-red-600 cursor-pointer font-semibold">Cerrar Sesión</Link>
      </nav>
        </div>
    </Layout>
  )
}

export default Admin
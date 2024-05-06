import Layout from '../Components/Layout'
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ComprarVip = () => {

    const [cargando, setCargando] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
  
      const token = sessionStorage.getItem('token');
      if (!token) {
  
        navigate('/Login');
      }
    }, [navigate]);

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
        <h1 className='flex justify-center text-xl text-white font-bold items-center'>Próximamente</h1>
    </Layout>
  )
}

export default ComprarVip
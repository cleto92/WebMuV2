import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Personaje from "../Components/Personaje";
import { Spinner } from "@nextui-org/react";
import { getObtenerPersonajesCuenta } from "../Api/ApiCuenta";

const MisPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { accountID } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/Login");
    }
  }, [navigate]);

  useEffect(() => {
    const fetchObtenerPersonajesCuenta = async () => {
      setLoading(true);
      const token = sessionStorage.getItem("token");
      if (!token) {
        throw new Error("Error al obtener los datos");
      }
      try {
        const fetchObtenerPersonajes = await getObtenerPersonajesCuenta(
          accountID,
          token
        );
        setPersonajes(fetchObtenerPersonajes);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchObtenerPersonajesCuenta();
  }, [accountID]);

  return (
    <Layout>
      <div className="text-white">
        {loading ? (
          <Spinner className="flex items-center justify-center" />
        ) : personajes.length > 0 ? (
          <Personaje personajes={personajes} />
        ) : (
          <p>No se encontraron personajes para esta cuenta.</p>
        )}
      </div>
    </Layout>
  );
};

export default MisPersonajes;

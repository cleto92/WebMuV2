import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../Components/Layout";
import Personaje from "../Components/Personaje";
import { Spinner } from "@nextui-org/react";

const MisPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { accountID } = useParams();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (!token) {
      navigate('/Login');
    }
  }, [navigate]);

  useEffect(() => {
    const obtenerPersonajesDeLaCuenta = async () => {
      setLoading(true);
      try {
        const token = sessionStorage.getItem("token");
        if (!token) {
          throw new Error("No se encontró el token. Por favor, inicia sesión.");
        }

        const url = `https://backendv2-7a61b60e5f29.herokuapp.com/api/obtenerPersonajesCuenta/${accountID}`;

        const response = await fetch(url, {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!response.ok) {
          throw new Error("Falló la solicitud al servidor");
        }

        const data = await response.json();

        setPersonajes(data.personajes);
      } catch (error) {
        console.error("Error al obtener personajes:", error.message);
      } finally {
        setLoading(false);
      }
    };

    obtenerPersonajesDeLaCuenta();
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

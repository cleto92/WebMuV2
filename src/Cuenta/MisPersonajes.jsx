

import { useState, useEffect } from "react";
import Layout from "../Components/Layout";
import Personaje from "../Components/Personaje";
import { Spinner } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const MisPersonajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
        const memb___id = sessionStorage.getItem("memb___id");
        if (!memb___id) {
          throw new Error(
            "No se encontró el ID de la cuenta. Por favor, inicia sesión."
          );
        }

        const token = sessionStorage.getItem("token");
        if (!token) {
          throw new Error("No se encontró el token. Por favor, inicia sesión.");
        }

        const url = `http://localhost:5555/api/obtenerPersonajesCuenta/${memb___id}`;

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
  }, []);

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

import Layout from "../Components/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Spinner } from "@nextui-org/react";
import { useAuth } from "../Context/AuthContext";

const CambiarContraseña = () => {
  const [nuevopassword, setNuevoPassword] = useState("");
  const [confirmarpassword, setConfirmarPassword] = useState("");
  const navigate = useNavigate();
  const [mensajeExito, setMensajeExito] = useState("");
  const [mensajeError, setMensajeError] = useState("");

  const { cerrarSesion } = useAuth();
  const token = sessionStorage.getItem("token");
  const [cargando, setCargando] = useState(true);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/Login");
    }
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/cambiarPassword`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            nuevopassword,
            confirmarpassword,
          }),
        }
      );

      const resultado = await response.json();

      if (!response.ok) {
        throw new Error(resultado.mensaje);
      }

      setMensajeExito(resultado.mensaje);
      setMensajeError("");
      setTimeout(() => {
        cerrarSesion();
        navigate("/Login");
      }, 3000);
    } catch (error) {
      setMensajeError(error.message);
    }
  };

  if (cargando) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-700 via-gray-900 to-black">
        <Spinner />
      </div>
    );
  }

  return (
    <Layout>
      <div className="bg-transparent py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-blue-500 md:mb-8 lg:text-3xl">
            Cambiar Contraseña
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-lg rounded-lg border"
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-white font-semibold sm:text-base"
                >
                  Nueva Contraseña
                </label>
                <input
                  required
                  name="password"
                  type="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={nuevopassword}
                  onChange={(e) => setNuevoPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmarpassword"
                  className="mb-2 inline-block text-sm text-white font-semibold sm:text-base"
                >
                  Confirmar Contraseña
                </label>
                <input
                  required
                  name="confirmarpassword"
                  value={confirmarpassword}
                  onChange={(e) => setConfirmarPassword(e.target.value)}
                  type="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
            </div>
            <div className="flex items-center justify-center bg-transparent p-2 ">
              <button
                type="submit"
                className="block rounded-lg bg-gray-800 px-12 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
              >
                Cambiar Contraseña
              </button>
            </div>
          </form>
          {mensajeExito ? (
            <div className="mt-4 text-center font-semibold text-white">
              {mensajeExito}
            </div>
          ) : (
            <div className="mt-4 text-center font-semibold text-red-600">
              {mensajeError}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CambiarContraseña;

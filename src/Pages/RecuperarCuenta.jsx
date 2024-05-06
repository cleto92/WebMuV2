import Layout from "../Components/Layout";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";

const RecuperarCuenta = () => {
  const [cargando, setCargando] = useState(true);
  const [email, setEmail] = useState("");
  const [IDUnico, setIDUnico] = useState("");
  const [memb___id, setMemb___id] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://club5backend-89b9966266b1.herokuapp.com/api/recuperarCuenta",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, IDUnico, memb___id }),
        }
      );

      if (!response.ok) {
        throw new Error("Hubo un error al recuperar la cuenta");
      }

      const result = await response.json();
      setMensaje(result.mensaje);
    } catch (error) {
      setMensaje(error.message);
    }
    setIsLoading(false);
  };

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
      {mensaje && <div className="mb-12 rounded py-4 text-center bg-green-600 items-center text-white">{mensaje}</div>}
      <form onSubmit={handleSubmit} className="space-y-2 max-w-lg mx-auto">
        <div>
          <label
            htmlFor="cuenta"
            className="block text-sm font-semibold text-white"
          >
            CUENTA
          </label>
          <input
            value={memb___id}
            required
            onChange={(e) => setMemb___id(e.target.value)}
            type="text"
            name="cuenta"
            className="mt-1 block w-full rounded-lg border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-semibold text-white"
          >
            EMAIL
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            name="email"
            className="mt-1 block w-full rounded-lg border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="apellido"
            className="block text-sm font-semibold text-white"
          >
            ID UNICO
          </label>
          <input
            required
            type="text"
            name="IDUnico"
            onChange={(e) => setIDUnico(e.target.value)}
            value={IDUnico}
            className="mt-1 block w-full rounded-lg border-gray-300 px-3 py-2 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div className="flex mb-10">
          {isLoading ? (
            <Spinner className="items-center text-center justify-center" />
          ) : (
            <button
              type="submit"
              className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
            >
              RECUPERAR CUENTA
            </button>
          )}
        </div>
      </form>
    </Layout>
  );
};

export default RecuperarCuenta;

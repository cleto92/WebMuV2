import { useState, useEffect } from "react";
import {
  getServerEstado,
  getObtenerPersonajes,
  getObtenerUsuarios,
  getObtenerCuentas,
} from "../Api/ApiEstadisticas";

const Estadisticas = () => {
  const [usuariosOnline, setUsuariosOnline] = useState(0);
  const [totalCuentas, setTotalCuentas] = useState();
  const [totalPersonajes, setTotalPersonajes] = useState(0);
  const [serverEstado, setServerEstado] = useState("");

  useEffect(() => {
      const fetchEstadoServer = async () => {
        const obtenerEstado = await getServerEstado()
        setServerEstado(obtenerEstado)
      }

    const fetchPersonajes = async () => {
      const obtenerPersonajes = await getObtenerPersonajes();
      setTotalPersonajes(obtenerPersonajes);
    };

    const fetchObtenerUsuarios = async () => {
      const obtenerUsuarios = await getObtenerUsuarios();
      setUsuariosOnline(obtenerUsuarios);
    };

    const fetchgetObtenerCuentas = async () => {
      const obtenerCuentas = await getObtenerCuentas();
      setTotalCuentas(obtenerCuentas);
    };

    fetchgetObtenerCuentas();
    fetchPersonajes();
    fetchEstadoServer();
    fetchObtenerUsuarios();
  }, []);

  return (
    <div className="bg-transparent py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <div className="border-b-2 border-gray-200 pb-2">
            <h2 className="text-left text-2xl font-bold text-white md:text-3xl">
              Estadisticas del Servidor
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              {usuariosOnline}
            </div>
            <div className="text-sm text-white font-semibold sm:text-base">
              Usuarios Online
            </div>
          </div>

          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              {totalCuentas}
            </div>
            <div className="text-sm font-semibold text-white sm:text-base">
              Cuentas
            </div>
          </div>

          <div className="flex flex-col items-center md:p-4">
            <div className="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">
              {totalPersonajes}
            </div>
            <div className="text-sm text-white font-semibold sm:text-base">
              Personajes
            </div>
          </div>
          <div className="flex flex-col items-center md:p-4">
            <div>
              {serverEstado === "Cargando..." ? (
                <div className="text-xl font-bold text-yellow-700 sm:text-2xl md:text-3xl">
                  {serverEstado}
                </div>
              ) : serverEstado === "ONLINE" ? (
                <div className="text-xl font-bold text-green-700 sm:text-2xl md:text-3xl">
                  {serverEstado}
                </div>
              ) : (
                <div className="text-xl font-bold text-red-700 sm:text-2xl md:text-3xl">
                  {serverEstado}
                </div>
              )}
            </div>
            <div className="text-sm font-semibold text-white sm:text-base">
              Estado del Servidor
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Estadisticas;

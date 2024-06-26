import { useState, useEffect } from "react";

const Estadisticas = () => {
  const [usuariosOnline, setUsuariosOnline] = useState(0);
  const [totalCuentas, setTotalCuentas] = useState();
  const [totalPersonajes, setTotalPersonajes] = useState(0);

  const [serverEstado, setServerEstado] = useState('')

  useEffect(() => {
    const serverEstadoGet = async () => {
      try {
        const respuesta = await fetch(
          "https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/estado-servidor",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
          }
        );
        const resultado = await respuesta.json();
        if (resultado.estado === 'online') {
          setServerEstado('ONLINE');
        } else {
          setServerEstado('OFFLINE');
        }
      } catch (error) {
        console.log(error);
        setServerEstado('OFFLINE'); 
      }
    };

    serverEstadoGet();
  }, []);

  useEffect(() => {
    const ObtenerPersonajes = async () => {
      try {
        const respuesta = await fetch(
          "https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/obtenerPersonajes",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
          }
        );
        const resultado = await respuesta.json();
        setTotalPersonajes(resultado.personajes);
      } catch (error) {
        console.log(error);
      }
    };

    ObtenerPersonajes();
  }, []);

  useEffect(() => {
    const obtenerUsuarios = async () => {
      try {
        const respuesta = await fetch(
          "https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/usuariosOnlineSlow",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            cache: "no-cache",
          }
        );
        const resultado = await respuesta.json();
        setUsuariosOnline(resultado.cantidad);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerUsuarios();
  }, []);

  useEffect(() => {
    const obtenerCuentas = async () => {
      try {
        const respuesta = await fetch(
          "https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/ObtenerCuentas"
        );
        const resultado = await respuesta.json();
        setTotalCuentas(resultado.cuentas);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerCuentas();
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
        {serverEstado === 'Cargando...' ? (
          <div className="text-xl font-bold text-yellow-700 sm:text-2xl md:text-3xl">
            {serverEstado}
          </div>
        ) : serverEstado === 'ONLINE' ? (
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

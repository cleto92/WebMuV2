/* eslint-disable react-hooks/exhaustive-deps */
import Layout from "../Components/Layout";
import { useAuth } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Spinner } from "@nextui-org/react";
import { jwtDecode } from "jwt-decode";


const LoginOff = () => {
  const [memb___id, setMemb___id] = useState("");
  const [memb__pwd, setMemb__pwd] = useState("");
  const [cargando, setCargando] = useState(true);
  const [mensajeError, setMensajeError] = useState("");

  const { iniciarSesion } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const timerCarga = setTimeout(() => {
      setCargando(false);
    }, 3000);

    return () => clearTimeout(timerCarga);
  }, []);

  useEffect(() => {
    let timerError;
    if (mensajeError) {
      timerError = setTimeout(() => {
        setMensajeError('');
      }, 5000);
    }

    return () => clearTimeout(timerError);
  }, [mensajeError]);

  const Login = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch("http://localhost:5555/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          memb___id,
          memb__pwd,
        }),
      });

      const data = await respuesta.json();

      if (respuesta.ok && data.token) {
        iniciarSesion(data.token, memb___id);
        

        const decodedToken = jwtDecode(data.token);
        const accountLevel = decodedToken.AccountLevel;
        

        if (accountLevel === 0) {
          navigate('/MiCuenta');
        } else if (accountLevel === 3) {
          navigate('/Admin');
        } else {
          navigate('/Login'); 
        }
      } else {
        throw new Error(data.mensaje || "Error desconocido");
      }
    } catch (error) {
      console.error("Error al intentar loguear", error);
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
          <h2 className="mb-4 text-center text-2xl font-bold text-green-800  00 md:mb-8 lg:text-3xl">
            Ingresar a mi Cuenta
          </h2>
          {mensajeError && (
            <div className="mx-auto mb-12 max-w-md rounded py-4 text-center bg-red-600 items-center text-white">
              {mensajeError}
            </div>
          )}
          <form onSubmit={Login} className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label className="mb-2 inline-block text-sm text-white font-semibold sm:text-base">
                  Cuenta
                </label>
                <input
                  required
                  value={memb___id}
                  onChange={(e) => setMemb___id(e.target.value)}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm text-white font-semibold sm:text-base">
                  Password
                </label>
                <input
                  required
                  type="password"
                  value={memb__pwd}
                  onChange={(e) => setMemb__pwd(e.target.value)}
                  name="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <button
                type="submit"
                className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
              >
                Ingresar
              </button>
              <div className="relative flex items-center justify-center"></div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginOff;

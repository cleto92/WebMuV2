// src/pages/CambiarContraseña.js

import Layout from "../Components/Layout";
import { Spinner } from "@nextui-org/react";
import { useCambiarContraseña } from "../Api/Api";

const CambiarContraseña = () => {
  const { cargando, mensajeExito, mensajeError, formik } = useCambiarContraseña();

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
          <form onSubmit={formik.handleSubmit} className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label htmlFor="nuevopassword" className="mb-2 inline-block text-sm text-white font-semibold sm:text-base">
                  Nueva Contraseña
                </label>
                <input
                  required
                  name="nuevopassword"
                  type="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  value={formik.values.nuevopassword}
                  onChange={formik.handleChange}
                />
              </div>
              <div>
                <label htmlFor="confirmarpassword" className="mb-2 inline-block text-sm text-white font-semibold sm:text-base">
                  Confirmar Contraseña
                </label>
                <input
                  required
                  name="confirmarpassword"
                  value={formik.values.confirmarpassword}
                  onChange={formik.handleChange}
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

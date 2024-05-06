import Layout from "../Components/Layout";
import { useCrearCuenta } from "../Api/Api";
import { Spinner } from "@nextui-org/react";
import { useState, useEffect } from "react";

const CrearCuenta = () => {
  const { formik, mensajeExito, mensajeError, loading } = useCrearCuenta();
  
  const [cargando, setCargando] = useState(true);

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
    <div>
      <Layout>
        <div className="bg-transparent py-6 sm:py-8 lg:py-12">
          <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
            <div className="mb-10 md:mb-16">
              <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
                CREAR CUENTA
              </h2>
            </div>
            {mensajeExito ? (
  <div
    className="bg-green-500 text-white text-sm p-2 rounded-lg mb-4 mx-auto text-center max-w-lg"
  >
    {mensajeExito}
  </div>
) : mensajeError ? (
  <div
    className="bg-red-500 text-white text-sm p-2 rounded-lg mb-4 mx-auto text-center max-w-lg"
  >
    {mensajeError}
  </div>
) : null}
            <form
              onSubmit={formik.handleSubmit}
              className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
            >
              <div className="sm:col-span-2">
                <label className="mb-2 inline-block text-sm font-semibold text-white sm:text-base">
                  CUENTA
                </label>
                <input
                required
                  type="text"
                  name="cuenta"
                  value={formik.values.cuenta}
                  onChange={formik.handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm font-semibold text-white sm:text-base">
                  NOMBRE
                </label>
                <input
                      required
                  type="text"
                  name="nombre"
                  value={formik.values.nombre}
                  onChange={formik.handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm font-semibold text-white sm:text-base">
                  APELLIDO
                </label>
                <input
                      required
                  type="text"
                  name="apellido"
                  value={formik.values.apellido}
                  onChange={formik.handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div className="sm:col-span-2">
                <label
           
                  className="mb-2 inline-block text-sm font-semibold text-white sm:text-base"
                >
                  EMAIL
                </label>
                <input
                      required
                  type="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm font-semibold text-white sm:text-base">
                  CONTRASEÑA
                </label>
                <input
                      required
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label className="mb-2 inline-block text-sm font-semibold text-white sm:text-base">
                  REPETIR CONTRASEÑA
                </label>
                <input
                      required
                  type="password"
                  name="passwordconfirmacion"
                  value={formik.values.passwordconfirmacion}
                  onChange={formik.handleChange}
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-black outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>

              <div className="flex items-center justify-between sm:col-span-2">
                <button
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                  type="submit"
                >
                  {loading ? <Spinner /> : "Registrarme" }
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default CrearCuenta;

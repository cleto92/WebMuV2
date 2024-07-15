// src/pages/LoginOff.js
import Layout from "../Components/Layout";
import { Spinner } from "@nextui-org/react";
import { useLogin } from "../Api/Api";

const LoginOff = () => {
  const { cargando, mensajeError, formik } = useLogin();

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
          <h2 className="mb-4 text-center text-2xl font-bold text-green-800 md:mb-8 lg:text-3xl">
            Ingresar a mi Cuenta
          </h2>
          {mensajeError && (
            <div className="mx-auto mb-12 max-w-md rounded py-4 text-center bg-red-600 items-center text-white">
              {mensajeError}
            </div>
          )}
          <form onSubmit={formik.handleSubmit} className="mx-auto max-w-lg rounded-lg border">
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label htmlFor="memb___id" className="mb-2 inline-block text-sm text-white font-semibold sm:text-base">
                  Cuenta
                </label>
                <input
                  value={formik.values.memb___id}
                  required
                  onChange={formik.handleChange}
                  type="text"
                  name="memb___id"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div>
                <label htmlFor="memb__pwd" className="mb-2 inline-block text-sm text-white font-semibold sm:text-base">
                  Password
                </label>
                <input
                  value={formik.values.memb__pwd}
                  required
                  onChange={formik.handleChange}
                  type="password"
                  name="memb__pwd"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
              <div className="relative flex items-center justify-center mb-10">
                {formik.isSubmitting ? (
                  <Spinner className="items-center text-center justify-center" />
                ) : (
                  <button
                    type="submit"
                    className="inline-block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base"
                  >
                    Ingresar
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginOff;

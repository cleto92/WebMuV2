import Layout from "../../Components/Layout";
import { Spinner } from "@nextui-org/react";
import { useEditarNoticia } from "../../Api/Api";

const EditarNoticia = () => {
  const { cargando, mensaje, formik } = useEditarNoticia();

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
        <div className="max-w-4xl mx-auto py-8 px-6 bg-transparent shadow-lg rounded-lg">
          <h1 className="text-center text-red-600 text-3xl font-bold mb-8">
            Editar Noticia
          </h1>
          {mensaje && (
            <div className="mb-4 text-center font-semibold text-green-600 bg-green-100 p-3 rounded">
              {mensaje}
            </div>
          )}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              <label htmlFor="fecha" className="block">
                <span className="text-red-600 font-bold">Fecha:</span>
                <input
                  required
                  name="fecha"
                  type="date"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                  value={formik.values.fecha}
                  onChange={formik.handleChange}
                />
              </label>
              <label htmlFor="titulo" className="block">
                <span className="text-red-600 font-bold">Título:</span>
                <input
                  required
                  name="titulo"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                  value={formik.values.titulo}
                  onChange={formik.handleChange}
                />
              </label>
              <label htmlFor="subtitulo" className="block">
                <span className="text-red-600 font-bold">Subtítulo:</span>
                <input
                  required
                  name="subtitulo"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                  value={formik.values.subtitulo}
                  onChange={formik.handleChange}
                />
              </label>
              <label htmlFor="autor" className="block">
                <span className="text-red-600 font-bold">Autor:</span>
                <input
                  required
                  name="autor"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                  value={formik.values.autor}
                  onChange={formik.handleChange}
                />
              </label>
              <label htmlFor="contenido" className="block">
                <span className="text-red-600 font-bold">Contenido:</span>
                <textarea
                  className="w-full h-96 p-2 border border-gray-300 rounded-md resize-none"
                  placeholder="Escribe algo aquí..."
                  name="contenido"
                  value={formik.values.contenido}
                  onChange={formik.handleChange}
                />
              </label>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Editar Noticia
            </button>
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default EditarNoticia;

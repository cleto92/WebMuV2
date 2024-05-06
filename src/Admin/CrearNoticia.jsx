import Layout from "../Components/Layout";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CrearNoticia = () => {
  const navigate = useNavigate();
  const [fecha, setFecha] = useState("");
  const [titulo, setTitulo] = useState("");
  const [subtitulo, setSubtitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [contenido, setContenido] = useState("");
  const [mensajeExito, setMensajeExito] = useState("");

  const handleCrearNoticia = async (e) => {
    e.preventDefault();
    try {
      const respuesta = await fetch("http://localhost:5555/api/crearNoticia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fecha,
          titulo,
          subtitulo,
          contenido,
          autor
        }),
      });
      const resultado = await respuesta.json();
      if (respuesta.ok) {
        setMensajeExito(resultado.mensaje);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/Login");
    }
  }, [navigate]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8 px-6 bg-transparent shadow-lg rounded-lg">
        <h1 className="text-center text-red-600 text-3xl font-bold mb-8">
          Crear Noticia
        </h1>
        {mensajeExito && (
          <div className="mb-4 text-center font-semibold text-green-600 bg-green-100 p-3 rounded">
            {mensajeExito}
          </div>
        )}
        <form onSubmit={handleCrearNoticia} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <label htmlFor="fecha" className="block">
              <span className="text-red-600 font-bold">Fecha:</span>
              <input
                required
                name="fecha"
                type="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
            </label>
            <label htmlFor="titulo" className="block">
              <span className="text-red-600 font-bold">Título:</span>
              <input
                required
                name="titulo"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </label>
            <label htmlFor="subtitulo" className="block">
              <span className="text-red-600 font-bold">Subtítulo:</span>
              <input
                required
                name="subtitulo"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                value={subtitulo}
                onChange={(e) => setSubtitulo(e.target.value)}
              />
            </label>
            <label htmlFor="subtitulo" className="block">
              <span className="text-red-600 font-bold">Autor:</span>
              <input
                required
                name="subtitulo"
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-3 text-base"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
              />
            </label>
            <label htmlFor="contenido" className="block">
              <span className="text-red-600 font-bold">Contenido:</span>
              <CKEditor
                editor={ClassicEditor}
                data={contenido}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContenido(data);
                }}
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Crear Noticia
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default CrearNoticia;

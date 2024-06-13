import Layout from "../../Components/Layout";
import Select from "react-select";
import { useState, useEffect } from "react";

const EditarPersonaje = () => {
  const [personajes, setPersonajes] = useState([]);
  const [personajeSeleccionado, setPersonajeSeleccionado] = useState(null);

  useEffect(() => {
    const obtenerPersonajes = async () => {
      try {
        const response = await fetch(
          "https://webmubackend2-59ca8aeb5ade.herokuapp.com/api/obtenerTodosLosPersonajes"
        );
        const respuesta = await response.json();
        setPersonajes(respuesta.personajes);
      } catch (error) {
        console.error("Error al obtener personajes:", error);
      }
    };
    obtenerPersonajes();
  }, []);

  const seleccionarPersonaje = (personaje) => {
    setPersonajeSeleccionado(personaje);
  };

  return (
    <Layout>
      <div className="flex justify-center items-center flex-col p-4">
        <Select
          className="w-full md:w-80 mb-4"
          options={personajes}
          onChange={seleccionarPersonaje}
          getOptionValue={(personaje) => personaje.AccountID}
          getOptionLabel={(personaje) => personaje.Name}
          placeholder="Selecciona un personaje"
          noOptionsMessage={() => "No hay resultados"}
        />
        {personajeSeleccionado && (
          <div className="w-full md:w-80 bg-gray-800 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <label className="w-1/3 text-gray-300" htmlFor="strength">
                Fuerza:
              </label>
              <span className="w-1/3 text-gray-300">
                [{personajeSeleccionado.Strength}]
              </span>
              <input
                id="strength"
                type="text"
                className="w-1/3 p-2 bg-gray-700 border border-gray-600 rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/3 text-gray-300" htmlFor="dexterity">
                Destreza:
              </label>
              <span className="w-1/3 text-gray-300">
                [{personajeSeleccionado.Dexterity}]
              </span>
              <input
                id="dexterity"
                type="text"
                className="w-1/3 p-2 bg-gray-700 border border-gray-600 rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/3 text-gray-300" htmlFor="vitality">
                Vitalidad:
              </label>
              <span className="w-1/3 text-gray-300">
                [{personajeSeleccionado.Vitality}]
              </span>
              <input
                id="vitality"
                type="text"
                className="w-1/3 p-2 bg-gray-700 border border-gray-600 rounded"
              />
            </div>
            <div className="flex items-center mb-4">
              <label className="w-1/3 text-gray-300" htmlFor="energy">
                Energía:
              </label>
              <span className="w-1/3 text-gray-300">
                [{personajeSeleccionado.Energy}]
              </span>
              <input
                id="energy"
                type="text"
                className="w-1/3 p-2 bg-gray-700 border border-gray-600 rounded"
              />
            </div>
          </div>
          
        )}
        <button className="text-white mt-4">Editar Personaje</button>
      </div>
    </Layout>
  );
};

export default EditarPersonaje;

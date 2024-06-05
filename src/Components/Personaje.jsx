/* eslint-disable react/prop-types */
import DK from "../assets/dk.webm";
import DW from "../assets/mago.webm";
import ELF from "../assets/elfa.webm";
import MG from "../assets/mg.webm";

const razas = {
  16: DK,
  17: DK,
  0: DW,
  1: DW,
  32: ELF,
  33: ELF,
  48: MG,
};

const estados = {
  0: 'Ciudadano',
  1: 'Baneado',
  8: 'Game Master',
  32: 'Administrador'
}

const mapas = {
  0: 'Lorencia',
  1: 'Dungeon',
  2: 'Devias',
  3: 'Noria',
  4: 'Lost Tower',
  5: 'Exilio',
  6: 'Stadium',
  7: 'Atlans',
  8: 'Tarkan',
  10: 'Icarus',
}

const Personaje = ({ personajes }) => {


  const moverPersonaje = async (nombrePersonaje) => {
    try {
      const url = "https://backendv2-7a61b60e5f29.herokuapp.com/api/moverPersonaje"; 
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ Name: nombrePersonaje }), 
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.mensaje || "Falló la solicitud al servidor para mover el personaje");
      }

      const data = await response.json();
      alert(data.mensaje); 
    } catch (error) {
      console.error("Error al mover el personaje:", error.mensaje);
      alert(error.message); 
    }
  };


  return (
    <section className="text-gray-100 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-red-400">
              Mis Personajes
            </h1>

            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {personajes.map((personaje, index) => {
            return (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                  <video
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={razas[personaje.Class]}
                    alt="content"
                    autoPlay
                    muted
                    playsInline
                  />
                  <h3 className="tracking-widest text-indigo-400 text-2xl text-center font-medium title-font my-8">
                    {personaje.Name}
                  </h3>
                  <ul className="text-white bg-gray-800 rounded-lg shadow-lg p-6 leading-none">
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Nivel:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.cLevel}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Reset:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.ResetCount}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Fuerza:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.Strength}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Agilidad:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.Dexterity}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Vitalidad:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.Vitality}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Energía:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.Energy}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Zen:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.Money}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Asesinatos:</span>
                      <span className="ml-4 text-indigo-400">
                        {personaje.PkCount}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Mapa:</span>
                      <span className="ml-4 text-indigo-400">
                        {mapas[personaje.MapNumber]}
                      </span>
                    </li>
                    <li className="flex justify-between items-center py-2">
                      <span className="font-semibold">Estado:</span>
                      <span className="ml-4 text-indigo-400">
                        {estados[personaje.CtlCode]}
                      </span>
                    </li>
                    
                  </ul>
                  <button  className="inline-block mx-10 my-8 px-2 py-2 text-white font-semibold bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-lg hover:bg-gradient-to-br focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105" onClick={() => moverPersonaje(personaje.Name)}>Mover Personaje</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Personaje;

/* eslint-disable react/prop-types */
import DK from "../assets/dk.webm";
import DW from "../assets/mago.webm";
import ELF from "../assets/elfa.webm";
import MG from "../assets/mg.webm";

const Ranking = ({ rankingJugadores }) => {
  const razas = {
    16: DK,
    17: DK,
    0: DW,
    1: DW,
    32: ELF,
    33: ELF,
    48: MG,
  };

  return (
    <tbody className="bg-transparent divide-y divide-gray-200">
      {rankingJugadores.map((jugador) => (
        <tr key={jugador.id} className="font-bold hover:bg-gray-700">
          <td className="px-6 py-4 whitespace-nowrap text-white">
            {razas[jugador.Class] && (
              <div className="flex items-center">
                <div className="flex-shrink-0 h-28 w-28">
                  <video
                    className="h-full w-full  object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={razas[jugador.Class]} type="video/mp4" />

                  </video>
                </div>
              </div>
            )}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.Name}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.ResetCount}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.cLevel}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.Strength}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.Dexterity}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.Vitality}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{jugador.Energy}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default Ranking;

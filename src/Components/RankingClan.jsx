/* eslint-disable react/prop-types */
const RankingClan = ({ clanes }) => { 
  return (
    <tbody className="bg-transparent divide-y divide-gray-200">
      {clanes.map((clan, index) => (
        <tr key={index} className="font-bold hover:bg-gray-700">

          <td className="px-6 py-4 whitespace-nowrap text-white">{clan.G_Name}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{clan.G_Score}</td>
          <td className="px-6 py-4 whitespace-nowrap text-white">{clan.G_Master}</td>
          
        </tr>
      ))}
    </tbody>
  );
}

export default RankingClan;
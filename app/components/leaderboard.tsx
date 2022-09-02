export function Leaderboard() {
  return (
    <div className="">
      <h2 className="relative mb-2.5 text-xl font-bold text-gray-900">
      <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 block w-full h-0 border-t-2 border-gray-300" aria-hidden="true" role="presentation"></span>
        <span className="relative z-10 inline-block pr-2.5 bg-gray-50">
          Leaderboard
        </span>
      </h2>
      <p className="mb-2.5">
        Who's who in the world of <span className="font-bold text-indigo-600">cornhole</span>.
      </p>
      <div className="mb-2.5">
        <table className="w-full mb-2.5">
          <thead className="text-sm font-bold text-white bg-indigo-600">
            <tr>
              <th className="px-2.5 py-1 text-left">
                Player
              </th>
              <th className="px-2.5 py-1 text-right">
                Points
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100 hover:bg-gray-300">
              <td className="px-2.5 py-0.5">
                Player 1
              </td>
              <td className="px-2.5 py-0.5 text-right">
                321
              </td>
            </tr>
            <tr className="bg-gray-200 hover:bg-gray-300">
              <td className="px-2.5 py-0.5">
                Player 2
              </td>
              <td className="px-2.5 py-0.5 text-right">
                123
              </td>
            </tr>
          </tbody>
        </table>
        <p className="text-xs text-gray-500">
          Based on a total of XX games played.
        </p>
      </div>
    </div>
  );
}

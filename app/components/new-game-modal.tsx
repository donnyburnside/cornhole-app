import { useState } from "react";

export function NewGameModal({ onDismiss }) {
  const [formData, setFormData] = useState({
    player1: '',
    player2: '',
    rounds: [
      [0, 0]
    ]
  });

  const onAddRound = (event) => {
    const updated_rounds = [...formData.rounds];
    updated_rounds.push([0,0]);

    setFormData({ ...formData, rounds: updated_rounds });
  };

  const onChange = (
    event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    const re = new RegExp(/([^[]+(?=]))/g);
    const name_indices = name.match(re)?.map(x => Number(x));

    if (name_indices && name_indices.length) {
      const round_index = Number(name_indices[0]);
      const player_index = Number(name_indices[1]);
      const updated_rounds = [...formData.rounds];
      updated_rounds[round_index][player_index] = Number(value);

      setFormData({ ...formData, rounds: updated_rounds });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  
  return (
    <div className="w-full h-full fixed inset-0 z-50 flex flex-col items-center justify-center p-2.5 sm:p-5 bg-black bg-opacity-50">
      <div className="w-full max-w-2xl max-h-full flex flex-col bg-gray-50">
        <div className="flex flex-row flex-nowrap justify-between p-2.5 sm:p-5">
          <h3 className="font-bold text-gray-800">
            New Game
          </h3>
          <button type="button" onClick={onDismiss}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">
              Close
            </span>
          </button>
        </div>
        <div className="flex-grow flex-shrink overflow-y-auto p-2.5 sm:p-5 bg-white border-t-2 border-b-2">
          <form id="new-game-form" className="grid gap-2.5 sm:gap-5" method="post" action="/dashboard/new">
            <fieldset className="grid grid-cols-2 gap-2.5 sm:gap-5">
              <legend className="col-span-2 block w-full mb-2.5 text-md font-bold uppercase text-center">
                Players
              </legend>
              <div className="col-span-2 sm:col-span-1">
                <label>
                  <span className="block mb-2.5 text-xs font-bold uppercase">
                    Player 1
                  </span>
                  <input className="block w-full px-2 py-1 border-2 border-gray-300 focus:outline-none focus:border-indigo-600" name="player1" type="text" value={formData.player1} onChange={onChange} required />
                </label>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <label>
                  <span className="block mb-2.5 text-xs font-bold uppercase">
                    Player 2
                  </span>
                  <input className="block w-full px-2 py-1 border-2 border-gray-300 focus:outline-none focus:border-indigo-600" name="player2" type="text" value={formData.player2} onChange={onChange} required />
                </label>
              </div>
            </fieldset>
            <fieldset className="grid grid-cols-2 gap-2.5 sm:gap-5">
              <legend className="col-span-2 block w-full mb-2.5 text-md font-bold uppercase text-center">
                Rounds
              </legend>
              {formData.rounds.map((round, index) => {
                const roundNumber = (index + 1);
                const field1_name = `rounds[${index}][0]`;
                const field1_value = Number(round[0]);
                const field2_name = `rounds[${index}][1]`;
                const field2_value = Number(round[1]);

                return (
                  <div className="col-span-2 flex flex-row flex-nowrap items-center gap-2.5 sm:gap-5" key={index}>
                    <div className="w-full">
                      <label>
                        <span className="sr-only">
                          Player 1 score for round {roundNumber}
                        </span>
                        <input className="block w-full px-2 py-1 border-2 border-gray-300 focus:outline-none focus:border-indigo-600" name={field1_name} type="number" min="0" max="3" value={field1_value} onChange={onChange} required />
                      </label>
                    </div>
                    <div className="w-auto">
                      <div className="w-10 h-10 flex items-center justify-center mx-auto text-white bg-indigo-600 rounded-full">
                        {roundNumber}
                      </div>
                    </div>
                    <div className="w-full">
                      <label>
                        <span className="sr-only">
                          Player 2 score for round {roundNumber}
                        </span>
                        <input className="block w-full px-2 py-1 border-2 border-gray-300 focus:outline-none focus:border-indigo-600" name={field2_name} type="number" min="0" max="3" value={field2_value} onChange={onChange} required />
                      </label>
                    </div>
                  </div>
                );
              })}
              <div className="col-span-2 text-center">
                <button type="button" onClick={onAddRound}>
                  Add another round
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <div className="flex flex-row flex-nowrap justify-between p-2.5 sm:p-5">
          <button className="inline-flex flex-row flex-nowrap justify-center items-center w-full sm:w-auto px-6 py-3 text-sm leading-none text-center text-white bg-indigo-600" type="submit" form="new-game-form">
            Save Game
          </button>
        </div>
      </div>
    </div>
  );
}

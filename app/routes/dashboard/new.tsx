import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { NewGameModal } from "~/components/new-game-modal";

export const action: ActionFunction = async ({
  request,
}) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const updatedData = Object.entries(data).reduce((prev: any, [name, value]) => {
    const re = new RegExp(/([^[]+(?=]))/g);
    const name_indices = name.match(re)?.map(x => Number(x));

    if (name_indices && name_indices.length) {
      const round_index = Number(name_indices[0]);
      const player_index = Number(name_indices[1]);

      if (!prev.hasOwnProperty('rounds')) {
        prev.rounds = new Array();
      };
      if (!prev.rounds[round_index]) {
        prev.rounds[round_index] = new Array();
      }

      prev.rounds[round_index][player_index] = Number(value);
    } else {
      prev[name] = value;
    }

    return prev;
  }, {});

  console.log('Save Game:', updatedData);

  return redirect("/dashboard");
};

const onCloseModal = () => {
  if ( confirm("Are you sure you want to abandon this game? Any progress will be lost.") ) {
    console.log('Close Modal');
  }
};

export default function New() {
  return (
    <NewGameModal onDismiss={onCloseModal} />
  );
}

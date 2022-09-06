const fs = require('fs');

export const getGames = async () => {
  const data = fs.readFileSync('./database/games.json');
  return JSON.parse(data);
}

export const saveGame = async (game: any) => {
  const data = await getGames();
  data.push(game);
    
  const json = JSON.stringify(data);
  fs.writeFileSync('./database/games.json', json);
  return game;
}

export const getLeaders = async () => {
  const data = await getGames();

  const leaders = data.reduce((prev, curr, index) => {
    const player1_points = curr.rounds.reduce((prev2, curr2) => Number(prev2 + curr2[0]), 0);
    const player2_points = curr.rounds.reduce((prev2, curr2) => Number(prev2 + curr2[1]), 0);
    const winning_player = player1_points > player2_points ? curr.player1 : curr.player2;
    const winning_points = player1_points > player2_points ? player1_points : player2_points;

    const existing_record = prev.find((player) => (player.name === winning_player));

    if (!existing_record) {
      // Add a new record for this player
      prev.push({
        name: winning_player,
        victories: 1,
        points: winning_points,
      });
    } else {
      // Update an existing record for this player
      existing_record.points = existing_record.points + winning_points;
      existing_record.victories++;
    }

    // Sort the records by points, desc
    prev.sort((a: any, b: any) => b.points - a.points);

    return prev;
  }, []);

  return leaders;
}

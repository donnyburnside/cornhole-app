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

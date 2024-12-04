// code your solution here
const games = [
    { year: 2018, result: "L" },
    { year: 2019, result: "W" },
    { year: 2020, result: "L" },
  ];
  function superbowlWin(games) {
    const win = games.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  console.log(superbowlWin(games)); // Output: 2019
  

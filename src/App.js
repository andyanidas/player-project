import "./style/App.css";
import Header from "./components/Header";
import Player from "./components/Player";
let players = [
  {
    name: "erhes",
    age: 15,
    gender: "male",
    score: 10,
  },
  {
    name: "miigaa",
    age: 25,
    gender: "male",
    score: 20,
  },
  {
    name: "odko",
    age: 19,
    gender: "female",
    score: 30,
  },
  {
    name: "burmaa",
    age: 27,
    gender: "female",
    score: 40,
  },
];

function App() {
  function modifyScore(name, plusMinus) {
    if (plusMinus == "+") {
      playerObj["erhes"].score++;
    } else {
      players[findPlayerIndex(name)].score--;
    }
    console.log(players);
  }
  function findPlayerIndex(playerName) {
    let foundIndex = 0;
    players.map((player, index) => {
      if (player.name == playerName) {
        foundIndex = index;
      }
    });
    return foundIndex;
  }
  return (
    <div className="App">
      <Header />
      {players.map((player, index) => {
        return (
          <Player key={index} playerData={player} modifyScore={modifyScore} />
        );
      })}
    </div>
  );
}

export default App;

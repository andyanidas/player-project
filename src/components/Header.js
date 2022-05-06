import "../style/header.css";

function Header() {
  let playerNumber = 4;
  return (
    <div className="header">
      <h1>SCOREBOARD</h1> <p>Player: {playerNumber}</p>
    </div>
  );
}
export default Header;

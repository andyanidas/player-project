import Score from "./Score";
import "../style/player.css";

function Player(props) {
  return (
    <div className="player">
      <div className="playerName">{props.playerData.name}</div>{" "}
      <Score playerData={props.playerData} modifyScore={props.modifyScore} />
    </div>
  );
}

export default Player;

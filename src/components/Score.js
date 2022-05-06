function Score(props) {
  function handler(event) {
    props.modifyScore(props.playerData.name, event.target.textContent);
  }
  return (
    <div className="score">
      <button onClick={handler}>+</button>
      {props.playerData.score}
      <button onClick={handler}>-</button>
    </div>
  );
}

export default Score;

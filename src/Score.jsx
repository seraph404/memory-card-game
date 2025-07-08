function Score({ currentScore, highScore }) {
  return (
    <div className="score">
      <div>
        <span>Score: </span>
        <span>{currentScore}</span>
      </div>
      <div>
        <span>High score: </span>
        <span>{highScore}</span>
      </div>
    </div>
  );
}

export default Score;

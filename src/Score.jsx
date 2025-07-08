function Score({ currentScore, highScore }) {
  return (
    <div>
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

function Card({ image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} />
    </div>
  );
}

export default Card;

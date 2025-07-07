function Card({ id, name, image, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} />
      <div>{name}</div>
    </div>
  );
}

export default Card;

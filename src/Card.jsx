function Card({ id, name, image }) {
  return (
    <div className="card" key={id}>
      <img src={image} />
      <div>{name}</div>
    </div>
  );
}

export default Card;

import "./Card.scss";

const Card = ({ title }) => {
  return (
    <>
      <p style={{ padding: "10px", border: "1px solid black" }}>this is my card {title}</p>
    </>
  );
};

export default Card;

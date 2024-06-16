import "./DigitalArtCard.css";

const ArtCard = ({ ...props }) => {
  return (
    <div className="art-card-main art-card-gradient-outline">
      <div className="art-card-image">
        <img src={props.imgURL} />
      </div>
      <div className="art-card-title art-card-gradient-outline">
        <h2>{props.name}</h2>
      </div>
    </div>
  );
};

export default ArtCard;

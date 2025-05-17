import "./DigitalArtCard.css";

const ArtCard = ({ name, imgURL }) => {
  return (
    <div className="art-card-main art-card-gradient-outline">
      <div className="art-card-image">
        <img src={imgURL} alt={name} width="100%" height="auto" loading="lazy" />
      </div>
      <div className="art-card-title art-card-gradient-outline">
        <h2>{name}</h2>
      </div>
    </div>
  );
};

export default ArtCard;

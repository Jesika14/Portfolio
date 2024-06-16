import "./DigitalArt.css";
import { artData } from "../components/data";
import ArtCard from "../components/DigitalArtCard";

const Art = () => {
  return (
    <div className="art-main">
      <div className="art-title">
        <h2>Digital Art Work</h2>
      </div>
      <div className="art-cards">
        {artData.map((art, index) => (
          <ArtCard
            key={index} // Add a unique key for each ProjectCard
            {...art}
          />
        ))}
      </div>
    </div>
  );
};

export default Art;

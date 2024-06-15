import "./Social.css";
import { SocialIcon } from "react-social-icons";

const Social = () => {
  return (
    <div className="social-main">
        <div className="social-title">Follow Me</div>
      <div className="social-icons">
        <SocialIcon
          url="https://www.instagram.com/jesika_rai_/"
          target="_blank"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/jesika-rai-84942a228/"
          target="_blank"
        />
        <SocialIcon
          url="https://www.behance.net/jesikab21ci0"
          target="_blank"
        />
        <SocialIcon url="https://dribbble.com/jesika_14" target="_blank" />
        <SocialIcon url="mailto:rai.8@iitj.ac.in" target="_blank" />
      </div>
    </div>
  );
};

export default Social;

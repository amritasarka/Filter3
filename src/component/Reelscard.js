import React from "react";
import reels from "./filterbutton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { InstagramEmbed } from "react-social-media-embed";
import { TikTokEmbed } from "react-social-media-embed";


const ReelsCard = ({ url, title, likes, comments, icons }) => {
  const reactions = [likes, comments];
  const [socialMedia, setSocialMedia] = React.useState(null);

  React.useEffect(() => {
    if (url.includes('instagram.com')) {
      setSocialMedia(<InstagramEmbed url={url} maxWidth={500} />);
    } else if (url.includes('tiktok.com')) {
      setSocialMedia(<TikTokEmbed url={url} />);
    } else {
      setSocialMedia(<p>Invalid URL</p>);
    }
  }, [url]);

  
  return (
    <>
    <div className={reels.fulldiv}>
      <div className={reels.card}>
        <div className={reels.cardmedia}>
        <div style={{ overflow: "hidden" }}>
        {socialMedia}
           </div>
        </div>
       

       
         
        </div>
        <div className={reels.cardactions}>
            <div className={reels.icon}>
              {icons.map((icon, index) => (
                <div className={reels.cardicon} key={index}>
                  <FontAwesomeIcon icon={icon} />
                </div>
              ))}
            </div>
            <div className={reels.icon}>
              {reactions.map((item) => (
                <div className={reels.cardlikes}>{item}</div>
              ))}
            </div>
          </div>
          </div>
    </>
  );
};

export default ReelsCard;

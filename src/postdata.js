import React from 'react'
import instagram from "./instadata_v5.json";
import tiktok from "./tiktokData.json";

const Postdata = () => {
    let [socialmedia_type, setSocialmedia_type] = useState("tiktok");
    const [newmap, setNewmap] = useState([]);
    const [data, setData] = useState([]);


    
    const socialmedia_data = {
      tiktok: tiktok,
      instagram: instagram,
      // add other social media platforms here
    };


    
const apply = () => {
    const onedimension = [];
    console.log("this is data", data);

    const posts =
      socialmedia_data[socialmedia_type]?.stats[socialmedia_type]?.timelineStats
        ?.timeline[0]?.posts || [];

    for (let i = 0; i < posts.length; i++) {
      const likes = posts[i][socialmedia_fieldmapping[socialmedia_type].likes];
      const followers =
        posts[i][socialmedia_fieldmapping[socialmedia_type].followers];
      const postlink =
        posts[i][socialmedia_fieldmapping[socialmedia_type].postlink];
      const comments =
        posts[i][socialmedia_fieldmapping[socialmedia_type].comments] || 0;
      const dateStr = posts[i][socialmedia_fieldmapping[socialmedia_type].date];

      const date = new Date(dateStr);
      const dateInt = date.toISOString();
      // const date = parseInt(dateStr);

      console.log("dateinteger", dateInt);
      const downloadcount =
        posts[i][socialmedia_fieldmapping[socialmedia_type].downloadcount];
      const playcount =
        posts[i][socialmedia_fieldmapping[socialmedia_type].playcount];
      const engagement =
        posts[i][socialmedia_fieldmapping[socialmedia_type].engagement];
      const sharecount =
        posts[i][socialmedia_fieldmapping[socialmedia_type].sharecount];

      const obj = {
        likes: likes,
        followers: followers,
        comments: comments,
        date: dateInt,
        postlink: postlink,
        downloadcount: downloadcount,
        playcount: playcount,
        engagement: engagement,
        sharecount: sharecount,
      };
      onedimension.push(obj);
    }
    setNewmap(onedimension);
  };

  console.log("newmap", newmap);

  useEffect(() => {
    setData(socialmedia_data[socialmedia_type]);
  }, [socialmedia_data, socialmedia_type]);

  useEffect(() => {
    apply();
  }, [socialmedia_type]);

  useEffect(() => {
    apply();
  }, [socialmedia_type])
  return (
    <>
    
    
    
    
    </>
  )
}

export default Postdata


;
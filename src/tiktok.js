import React, { useState, useEffect } from "react";
import Filterbutton from "./component/Filterbutton";
import Slidercomponent from "./component/Slidercomponent";
import Tiktokheader from "./component/tiktokheader";
import ReelsCard from "./component/Reelscard";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";
import Header from "./component/header";
import instagram from "./instadata_v5.json";
import tiktok from "./tiktokData.json";

import Datecomponent from "./component/datecomponent";


import "./tiktok.css";

const Tiktok = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const [newmap, setNewmap] = useState([]);
  const [list, setList] = useState();
  const [data, setData] = useState([]);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  let [socialmedia_type, setSocialmedia_type] = useState("tiktok");

  const socialmedia_data = {
    tiktok: tiktok,
    instagram: instagram,
    // add other social media platforms here
  };

  const socialmedia_fieldmapping = {
    tiktok: {
      likes: "digg_count",
      followers: "followers",
      comments: "comment_count",
      postlink: "url",
      date: "date",
      playcount: "play_count",
      sharecount: "share_count",
      downloadcount: "download_count",
      engagement: "engagement",
    },
    instagram: {
      likes: "like_count",
      followers: "followers",
      comments: "newCommentCount",
      postlink: "postLink",
      date: "date",
      engagement: "engagement",
    },
  };

  const likesarr = [];
  const commentsarr = [];
  const downloadcountarr = [];
  const playcountarr = [];
  const sharecountarr = [];
  const engagementarr = [];

  for (let i = 0; i < newmap.length; i++) {
    likesarr.push(newmap[i].likes);
    commentsarr.push(newmap[i].comments);
    downloadcountarr.push(newmap[i].downloadcount);
    playcountarr.push(newmap[i].playcount);
    sharecountarr.push(newmap[i].sharecount);
    engagementarr.push(newmap[i].engagement);
  }

  const maxLikes = Math.max(...likesarr);
  const minLikes = Math.min(...likesarr);

  const maxComments = Math.max(...commentsarr);
  const minComments = Math.min(...commentsarr);

  const maxSharecount = Math.max(...sharecountarr);
  const minSharecount = Math.min(...sharecountarr);

  const maxPlaycount = Math.max(...playcountarr);
  const minPlaycount = Math.min(...playcountarr);

  const maxDownloadcount = Math.max(...downloadcountarr);
  const minDownloadcount = Math.min(...downloadcountarr);

  const maxEngagement = Math.max(...engagementarr);
  const minEngagement = Math.min(...engagementarr);

  const [likevalue, setLikevalue] = React.useState([23, 37]);
  const likehandleChange = (event, newValue) => {
    setLikevalue(newValue);
  };
  console.log(likevalue);

  const [commentvalue, setCommentvalue] = React.useState([20, 500]);
  const commenthandleChange = (event, newValue) => {
    setCommentvalue(newValue);
  };

  const [sharecountvalue, setSharecountvalue] = React.useState([23, 37]);
  const sharecounthandleChange = (event, newValue) => {
    setSharecountvalue(newValue);
  };
  console.log(sharecountvalue);

  const [playcountvalue, setPlaycountvalue] = React.useState([23, 37]);
  const playcounthandleChange = (event, newValue) => {
    setPlaycountvalue(newValue);
  };
  console.log("playcountvalue", playcountvalue);
  const [downloadcountvalue, setDownloadcountvalue] = React.useState([23, 37]);
  const downloadcounthandleChange = (event, newValue) => {
    setDownloadcountvalue(newValue);
  };
  console.log("downloadvalue", downloadcountvalue);
  const [engagementvalue, setEngagementvalue] = React.useState([23, 37]);
  const engagementhandleChange = (event, newValue) => {
    setEngagementvalue(newValue);
  };
  console.log(engagementvalue);

  const handleFromDateChange = (event) => {
    console.log("From date changed:", event.target.value);
    setFromDate(event.target.value);
  };

  const handleToDateChange = (event) => {
    console.log("To date changed:", event.target.value);
    setToDate(event.target.value);
  };

  const applyFilters = () => {
    let updatedList = newmap;

    // Insta Filter for likes
    if (
      likevalue[0] !== "" &&
      likevalue[1] !== "" &&
      !isNaN(likevalue[0]) &&
      !isNaN(likevalue[1])
    ) {
      const minlikes = likevalue[0];
      const maxlikes = likevalue[1];

      // filter only if likes field is present
      updatedList = updatedList.filter(
        (item) =>
          item.hasOwnProperty("likes") &&
          item.likes !== null &&
          item.likes >= minlikes &&
          item.likes <= maxlikes
      );
    }

    // Insta Filter for comments
    if (
      commentvalue[0] !== "" &&
      commentvalue[1] !== "" &&
      !isNaN(commentvalue[0]) &&
      !isNaN(commentvalue[1])
    ) {
      const mincomments = commentvalue[0];
      const maxcomments = commentvalue[1];

      // filter only if comments field is present
      updatedList = updatedList.filter(
        (item) =>
          item.hasOwnProperty("comments") &&
          item.comments !== null &&
          item.comments >= mincomments &&
          item.comments <= maxcomments
      );
    }
   
    if (socialmedia_type === "tiktok") {
      // Insta Filter for sharecount
      if (
        sharecountvalue[0] !== "" &&
        sharecountvalue[1] !== "" &&
        !isNaN(sharecountvalue[0]) &&
        !isNaN(sharecountvalue[1])
      ) {
        const minshare = sharecountvalue[0];
        const maxshare = sharecountvalue[1];

        // filter only if sharecount field is present
        updatedList = updatedList.filter(
          (item) =>
            item.hasOwnProperty("sharecount") &&
            item.sharecount !== null &&
            item.sharecount >= minshare &&
            item.sharecount <= maxshare
        );
      }
    }

    if (socialmedia_type === "tiktok") {
      // Insta Filter for playcount
      if (
        playcountvalue[0] !== "" &&
        playcountvalue[1] !== "" &&
        !isNaN(playcountvalue[0]) &&
        !isNaN(playcountvalue[1])
      ) {
        const minplaycount = playcountvalue[0];
        const maxplaycount = playcountvalue[1];

        // filter only if playcount field is present
        updatedList = updatedList.filter(
          (item) =>
            item.hasOwnProperty("playcount") &&
            item.playcount !== null &&
            item.playcount >= minplaycount &&
            item.playcount <= maxplaycount
        );
      }
    }

    // Insta Filter for engagement
    if (
      engagementvalue[0] !== "" &&
      engagementvalue[1] !== "" &&
      !isNaN(engagementvalue[0]) &&
      !isNaN(engagementvalue[1])
    ) {
      const minengagement = engagementvalue[0];
      const maxengagement = engagementvalue[1];

      // filter only if engagement field is present
      updatedList = updatedList.filter(
        (item) =>
          item.hasOwnProperty("engagement") &&
          item.engagement !== null &&
          item.engagement >= minengagement &&
          item.engagement <= maxengagement
      );
    }

    if (socialmedia_type === "tiktok") {
      // Insta Filter for downloadcount
      if (
        downloadcountvalue[0] !== "" &&
        downloadcountvalue[1] !== "" &&
        !isNaN(downloadcountvalue[0]) &&
        !isNaN(downloadcountvalue[1])
      ) {
        const mindownloadcount = downloadcountvalue[0];
        const maxdownloadcount = downloadcountvalue[1];

        // filter only if downloadcount field is present
        updatedList = updatedList.filter(
          (item) =>
            item.hasOwnProperty("downloadcount") &&
            item.downloadcount !== null &&
            item.downloadcount >= mindownloadcount &&
            item.downloadcount <= maxdownloadcount
        );
      }
    }

    if (fromDate && toDate) {
      const minD = fromDate;
      const maxD = toDate;

      updatedList = updatedList.filter(
        (item) => item.date >= minD && item.date <= maxD
      );
    }

    setList(updatedList);
  };

  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", list);

  useEffect(() => {
    applyFilters();
  }, [
    likevalue,
    commentvalue,
    fromDate,
    toDate,
    downloadcountvalue,
    sharecountvalue,
    playcountvalue,
    engagementvalue,
  ]);

  console.log("this is list value", list);

  const sliderArray = [
    {
      id: 1,
      value: likevalue,
      handlechange: likehandleChange,
      min: minLikes,
      max: maxLikes,
      name: "likes",
    },

    {
      id: 2,
      value: commentvalue,
      handlechange: commenthandleChange,
      min: minComments,
      max: maxComments,
      name: "Comments",
    },
    {
      id: 3,
      value: sharecountvalue,
      handlechange: sharecounthandleChange,
      min: minSharecount,
      max: maxSharecount,
      name: "sharecount",
    },
    {
      id: 4,
      value: downloadcountvalue,
      handlechange: downloadcounthandleChange,
      min: minDownloadcount,
      max: maxDownloadcount,
      name: "downloadcount",
    },
    {
      id: 5,
      value: playcountvalue,
      handlechange: playcounthandleChange,
      min: minPlaycount,
      max: maxPlaycount,
      name: "playcount",
    },
    {
      id: 6,
      value: engagementvalue,
      handlechange: engagementhandleChange,
      min: minEngagement,
      max: maxEngagement,
      name: "Engagement",
    },
  ];


 
  
  

  const ontiktokclick = () => {
    setSocialmedia_type("tiktok");
    console.log("socialmedia_type", socialmedia_type);
  };
  const oninstagramclick = () => {
    setSocialmedia_type("instagram");
    console.log("socialmedia_type", socialmedia_type);
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

  useEffect(() => {
    setData(socialmedia_data[socialmedia_type]);
  }, [socialmedia_data, socialmedia_type]);

  useEffect(() => {
    apply();
  }, [socialmedia_type]);

  useEffect(() => {
    apply();
  }, [socialmedia_type]);

  const middlearray = ["Following", "Followers", "Likes"];
  const icons = [faHeart, faComment];

  const handleSliderButtonClick = () => {
    setShowSlider(!showSlider);
  };
  const handleFilterButtonClick = () => {
    setIsFiltered(!isFiltered);
  };

  const handleButtonClick = () => {
    handleFilterButtonClick();
    handleSliderButtonClick();
  };

  return (
    <>
 

      <div
        className={`slider-containerr ${showSlider ? "show" : "hide"}`}
        // {`slider-container ${showSlider ? "show" : "hide"}`}
      >
        {sliderArray.map((item) => (
          <>
            <div className="newslidercontainer">
              <div className="pslider">{item.name}</div>
              <div className="psliderr">
                <Slidercomponent
                  value={item.value}
                  onChange={item.handlechange}
                  min={item.min}
                  max={item.max}
                />
              </div>
            </div>
          </>
        ))}
        <div className="sliderbottomdate">
          <Datecomponent
            value1={fromDate}
            value2={toDate}
            onChange1={handleFromDateChange}
            onChange2={handleToDateChange}
          />
        </div>
      </div>
      <div className={`container ${isFiltered ? "shifted-down" : ""}`}>

        <Header
          ontiktokclick={ontiktokclick}
          oninstagramclick={oninstagramclick}
        />
        <div className="centre">
          <div className="colorrize">{socialmedia_type}</div>
        </div>
        <Tiktokheader item={middlearray} />

        <Filterbutton

        onClick={handleButtonClick}
        />

        <div className="mainreelscontainer">
          <div className="reelscontainer">
            {list &&
              list.map((reel) => (
                <ReelsCard
                  url={reel.postlink}
                  likes={reel.likes}
                  comments={reel.comments}
                  icons={icons}
                  socialmedia_type={socialmedia_type}
                />
              ))}
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Tiktok;

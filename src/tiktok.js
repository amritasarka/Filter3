import React, { useState, useEffect } from "react";
import Filterbutton from "./component/Filterbutton";
import Slidercomponent from "./component/Slidercomponent";
import Tiktokheader from "./component/tiktokheader";
import ReelsCard from "./component/Reelscard";
import {
  faHeart,
  faComment,
  faPlayCircle,
  faShareSquare,
  faDownload,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import Header from "./component/header";
import instagram from "./instadata_v5.json";
import tiktok from "./tiktokData.json";

import Datecomponent from "./component/datecomponent";

import "./tiktok.css";
import Descending from "./component/descending";

const Tiktok = () => {
  const [showSlider, setShowSlider] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);

  const [newmap, setNewmap] = useState([]);
  const [list, setList] = useState();
  const [data, setData] = useState([]);

  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());

  let [socialmedia_type, setSocialmedia_type] = useState("tiktok");
  const [sortByPlatform, setSortByPlatform] = useState("tiktok");
  const [sortByFields, setSortByFields] = useState(["date"]);
  const [sortOrder, setSortOrder] = useState("descending");
  const [sortedPosts, setSortedPosts] = useState([]);

  useEffect(() => {
    // const filteredPosts = newmap.filter(
    //   (post) => post.platform === sortByPlatform
    // );
    const sortedFilteredPosts = newmap.sort((a, b) => {
      for (const field of sortByFields) {
        if (a[field] < b[field]) {
          return sortOrder === "ascending" ? -1 : 1;
        } else if (a[field] > b[field]) {
          return sortOrder === "ascending" ? 1 : -1;
        }
      }
      return 0;
    });

    setSortedPosts(sortedFilteredPosts);
  }, [sortByPlatform, sortByFields, sortOrder]);

  const handleSort = (platformFields) => {
    const [platform, fields] = platformFields;
    if (
      JSON.stringify(platform) === JSON.stringify(sortByPlatform) &&
      JSON.stringify(fields) === JSON.stringify(sortByFields)
    ) {
      setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
    } else {
      setSortByPlatform(platform);
      setSortByFields(fields);
      setSortOrder("descending");
    }
  };

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

  const [likeminvalue, setLikeminvalue] = React.useState(27);
  const likeminhandleChange = (event) => {
    const value = Math.min(Number(event.target.value));
    setLikeminvalue(value);
  };
  console.log(likeminvalue);
  const [likemaxvalue, setLikemaxvalue] = React.useState(1045);
  const likemaxhandleChange = (event) => {
    const value = Math.max(Number(event.target.value));
    setLikemaxvalue(value);
  };
  console.log(likemaxvalue);

  const [commentminvalue, setCommentminvalue] = React.useState(20);
  const commentminhandleChange = (event) => {
    const value = Math.min(Number(event.target.value));
    setCommentminvalue(value);
  };
  const [commentmaxvalue, setCommentmaxvalue] = React.useState(1000);
  const commentmaxhandleChange = (event) => {
    const value = Math.max(Number(event.target.value));

    setCommentmaxvalue(value);
  };

  const [sharecountminvalue, setSharecountminvalue] = React.useState(23);
  const sharecountminhandleChange = (event) => {
    const value = Math.min(Number(event.target.value));

    setSharecountminvalue(value);
  };
  console.log(sharecountminvalue);
  const [sharecountmaxvalue, setSharecountmaxvalue] = React.useState(103);
  const sharecountmaxhandleChange = (event) => {
    const value = Math.max(Number(event.target.value));

    setSharecountmaxvalue(value);
  };
  console.log(sharecountmaxvalue);

  const [playcountminvalue, setPlaycountminvalue] = React.useState(23);
  const playcountminhandleChange = (event) => {
    const value = Math.min(Number(event.target.value));

    setPlaycountminvalue(value);
  };
  console.log("playcountvalue", playcountminvalue);
  const [playcountmaxvalue, setPlaycountmaxvalue] = React.useState(103);
  const playcountmaxhandleChange = (event) => {
    const value = Math.max(Number(event.target.value));

    setPlaycountmaxvalue(value);
  };
  console.log("playcountvalue", playcountmaxvalue);

  const [downloadcountminvalue, setDownloadcountminvalue] = React.useState(23);
  const downloadcountminhandleChange = (event) => {
    const value = Math.min(Number(event.target.value));

    setDownloadcountminvalue(value);
  };
  console.log("downloadvalue", downloadcountminvalue);
  const [downloadcountmaxvalue, setDownloadcountmaxvalue] = React.useState(103);
  const downloadcountmaxhandleChange = (event) => {
    const value = Math.max(Number(event.target.value));

    setDownloadcountmaxvalue(value);
  };
  console.log("downloadvalue", downloadcountmaxvalue);

  const [engagemenminvalue, setEngagementminvalue] = React.useState(23);
  const engagementminhandleChange = (event) => {
    const value = Math.min(Number(event.target.value));

    setEngagementminvalue(value);
  };
  console.log(engagemenminvalue);

  const [engagementmaxvalue, setEngagementmaxvalue] = React.useState(103);
  const engagementmaxhandleChange = (event) => {
    const value = Math.max(Number(event.target.value));

    setEngagementmaxvalue(value);
  };
  console.log(engagementmaxvalue);

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
      likeminvalue !== "" &&
      likemaxvalue !== "" &&
      !isNaN(likeminvalue) &&
      !isNaN(likemaxvalue)
    ) {
      const minlikes = likeminvalue;
      const maxlikes = likemaxvalue;

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
      commentminvalue !== "" &&
      commentmaxvalue !== "" &&
      !isNaN(commentminvalue) &&
      !isNaN(commentmaxvalue)
    ) {
      const mincomments = commentminvalue;
      const maxcomments = commentmaxvalue;

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
        sharecountminvalue !== "" &&
        sharecountmaxvalue !== "" &&
        !isNaN(sharecountminvalue) &&
        !isNaN(sharecountmaxvalue)
      ) {
        const minshare = sharecountminvalue;
        const maxshare = sharecountmaxvalue;

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
        playcountminvalue !== "" &&
        playcountmaxvalue !== "" &&
        !isNaN(playcountminvalue) &&
        !isNaN(playcountmaxvalue)
      ) {
        const minplaycount = playcountminvalue;
        const maxplaycount = playcountmaxvalue;

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
      engagemenminvalue !== "" &&
      engagementmaxvalue !== "" &&
      !isNaN(engagemenminvalue) &&
      !isNaN(engagementmaxvalue)
    ) {
      const minengagement = engagemenminvalue;
      const maxengagement = engagementmaxvalue;

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
        downloadcountminvalue !== "" &&
        downloadcountmaxvalue !== "" &&
        !isNaN(downloadcountminvalue) &&
        !isNaN(downloadcountmaxvalue)
      ) {
        const mindownloadcount = downloadcountminvalue;
        const maxdownloadcount = downloadcountmaxvalue;

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

    // setList(updatedList);
    setSortedPosts(updatedList);
  };

  console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", list);

  useEffect(() => {
    applyFilters();
  }, [
    likeminvalue,
    likemaxvalue,
    commentminvalue,
    commentmaxvalue,
    fromDate,
    toDate,
    downloadcountminvalue,
    downloadcountmaxvalue,
    sharecountminvalue,
    sharecountmaxvalue,
    playcountminvalue,
    playcountmaxvalue,
    engagemenminvalue,
    engagementmaxvalue,
  ]);

  console.log("this is list value", list);

 
 

  const commonFields = [
    {
      id: 1,
      value1: likeminvalue,
      value2: likemaxvalue,
      handlechange1: likeminhandleChange,
      handlechange2: likemaxhandleChange,
      min: minLikes,
      max: maxLikes,
      name: "likes",
    },
    {
      id: 2,
      value1: commentminvalue,
      value2: commentmaxvalue,
      handlechange1: commentminhandleChange,
      handlechange2: commentmaxhandleChange,
      min: minComments,
      max: maxComments,
      name: "Comments",
    },
    {
      id: 3,
      value1: engagemenminvalue,
      value2: engagementmaxvalue,
      handlechange1: engagementminhandleChange,
      handlechange2: engagementmaxhandleChange,
      min: minEngagement,
      max: maxEngagement,
      name: "Engagement",
    },
  ];

  const instagramFields = [...commonFields];

  const tiktokFields = [
    ...commonFields,
    {
      id: 4,
      value1: sharecountminvalue,
      value2: sharecountmaxvalue,
      handlechange1: sharecountminhandleChange,
      handlechange2: sharecountmaxhandleChange,

      min: minSharecount,
      max: maxSharecount,
      name: "sharecount",
    },
    {
      id: 5,
      value1: downloadcountminvalue,
      value2: downloadcountmaxvalue,
      handlechange1: downloadcountminhandleChange,
      handlechange2: downloadcountmaxhandleChange,
      min: minDownloadcount,
      max: maxDownloadcount,
      name: "downloadcount",
    },
    {
      id: 6,
      value1: playcountminvalue,
      value2: playcountmaxvalue,
      handlechange1: playcountminhandleChange,
      handlechange2: playcountmaxhandleChange,
      min: minPlaycount,
      max: maxPlaycount,
      name: "playcount",
    },
  ];
  const fieldsToDisplay =
    socialmedia_type === "instagram" ? instagramFields : tiktokFields;

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

  console.log("newmap", newmap);

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
  const tiktokicons = [
    faHeart,
    faComment,
    faPlayCircle,
    faShareSquare,
    faDownload,
    faChartLine,
  ];
  const instagramicons = [faHeart, faComment, faChartLine];

  const handleSliderButtonClick = () => {
    setShowSlider(!showSlider);
    setIsFiltered(!isFiltered);
  };

  const tiktokfields = [
    { label: "Date", value: "date" },
    { label: "Likes", value: "likes" },
    { label: "Comments", value: "comments" },
    { label: "Share Count", value: "sharecount" },
    { label: "Download Count", value: "downloadcount" },
    { label: "Play Count", value: "playcount" },
    { label: "Engagement", value: "engagement" },
  ];

  const instagramfields = [
    { label: "Date", value: "date" },
    { label: "Likes", value: "likes" },
    { label: "Comments", value: "comments" },
    { label: "Engagement", value: "engagement" },
  ];

  return (
    <>
      <div>
        <Header
          ontiktokclick={ontiktokclick}
          oninstagramclick={oninstagramclick}
        />
        <div className="centre">
          <div className="colorrize">{socialmedia_type}</div>
        </div>
        <Tiktokheader item={middlearray} />
        <Filterbutton onClick={handleSliderButtonClick} />
        <div className={`slider-containerr ${showSlider ? "show" : ""}`}>
          {fieldsToDisplay.map((item) => (
            <>
              <div className="newslidercontainer">
                <div className="pslider">{item.name}</div>
                <div className="psliderr">
                  <Slidercomponent
                    value1={item.value1}
                    value2={item.value2}
                    onChange1={item.handlechange1}
                    onChange2={item.handlechange2}
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

        <Descending
          socialmedia_type={socialmedia_type}
          sortByPlatform={sortByPlatform}
          sortByFields={sortByFields}
          sortOrder={sortOrder}
          sortedPosts={sortedPosts}
          handleSort={handleSort}
          fields={
            socialmedia_type === "tiktok"
              ? tiktokfields
              : socialmedia_type === "instagram"
              ? instagramfields
              : []
          }
        />

        <div className="mainreelscontainer">
          <div className="reelscontainer">
            {sortedPosts &&
              sortedPosts.map((reel) => (
                <ReelsCard
                  url={reel.postlink}
                  likes={reel.likes}
                  comments={reel.comments}
                  date={reel.date}
                  sharecount={reel.sharecount}
                  playcount={reel.playcount}
                  downloadcount={reel.downloadcount}
                  engagement={reel.engagement}
                  icons={ socialmedia_type === "tiktok"
                  ? tiktokicons
                  : socialmedia_type === "instagram"
                  ? instagramicons
                  : []}
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

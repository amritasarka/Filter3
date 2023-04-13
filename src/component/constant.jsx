


  export const socialmedia_fieldmapping = {
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

  export const tiktokfields = [
    { label: "Date", value: "date" },
    { label: "Likes", value: "likes" },
    { label: "Comments", value: "comments" },
    { label: "Share Count", value: "sharecount" },
    { label: "Download Count", value: "downloadcount" },
    { label: "Play Count", value: "playcount" },
    { label: "Engagement", value: "engagement" },
  ];

  export const instagramfields = [
    { label: "Date", value: "date" },
    { label: "Likes", value: "likes" },
    { label: "Comments", value: "comments" },
    { label: "Engagement", value: "engagement" },
  ];
  export const tiktokicons = [
    "faHeart",
    "faComment",
    "faPlayCircle",
    "faShareSquare",
    "faDownload",
    "faChartLine",
  ];
  export const instagramicons = ["faHeart", "faComment", "faChartLine"];
  export const middlearray = ["Following", "Followers", "Likes"];
  export const socialmedia_data = {
    tiktok: "tiktok",
    instagram: "instagram",
    // add other social media platforms here
  };


  
 
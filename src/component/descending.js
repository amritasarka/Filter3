import React, { useState, useEffect } from "react";

const Descending = ({
  socialmedia_type,
  sortByPlatform,
  sortByFields,
  sortOrder,
  sortedPosts,
  handleSort,
}) => {
  // const [sortByPlatform, setSortByPlatform] = useState("tiktok");
  // const [sortByFields, setSortByFields] = useState(["date"]);
  // const [sortOrder, setSortOrder] = useState("descending");
  // const [sortedPosts, setSortedPosts] = useState([]);

  // const [postsData, setPostData] = useState([]);
  // useEffect(() => {
  //   const filteredPosts = postsData.filter(
  //     (post) => post.platform === sortByPlatform
  //   );
  //   const sortedFilteredPosts = filteredPosts.sort((a, b) => {
  //     for (const field of sortByFields) {
  //       if (a[field] < b[field]) {
  //         return sortOrder === "ascending" ? -1 : 1;
  //       } else if (a[field] > b[field]) {
  //         return sortOrder === "ascending" ? 1 : -1;
  //       }
  //     }
  //     return 0;
  //   });
  //   setSortedPosts(sortedFilteredPosts);
  // }, [sortByPlatform, sortByFields, sortOrder]);

  // const handleSort = (platformFields) => {
  //   const [platform, fields] = platformFields;
  //   if (
  //     JSON.stringify(platform) === JSON.stringify(sortByPlatform) &&
  //     JSON.stringify(fields) === JSON.stringify(sortByFields)
  //   ) {
  //     setSortOrder(sortOrder === "ascending" ? "descending" : "ascending");
  //   } else {
  //     setSortByPlatform(platform);
  //     setSortByFields(fields);
  //     setSortOrder("descending");
  //   }
  // };

  const tiktokFields = [
    { label: "Date", value: "date" },
    { label: "Likes", value: "likes" },
    { label: "Comments", value: "comments" },
    { label: "Share Count", value: "shareCount" },
    { label: "Download Count", value: "downloadCount" },
    { label: "Play Count", value: "playCount" },
    { label: "Engagement", value: "engagement" },
  ];

  const instagramFields = [
    { label: "Date", value: "date" },
    { label: "Likes", value: "likes" },
    { label: "Comments", value: "comments" },
    { label: "Engagement", value: "engagement" },
  ];

  // const handlePlatformChange = (event) => {
  //   setSelectedPlatform(event.target.value);
  // };

  return (
    <>
      <div>
        <div>
          {/* <select value={selectedPlatform} onChange={handlePlatformChange}>
            <option value="tiktok">TikTok</option>
            <option value="instagram">Instagram</option>
          </select> */}

          {socialmedia_type === "tiktok"
            ? tiktokFields.map((field) => (
                <button
                  key={field.value}
                  onClick={() => handleSort([socialmedia_type, [field.value]])}
                >
                  {field.label}
                  {sortByFields.includes(field.value) && (
                    <span>{sortOrder === "ascending" ? " ⬆️" : " ⬇️"}</span>
                  )}
                </button>
              ))
            : instagramFields.map((field) => (
                <button
                  key={field.value}
                  onClick={() => handleSort([socialmedia_type, [field.value]])}
                >
                  {field.label}
                  {sortByFields.includes(field.value) && (
                    <span>{sortOrder === "ascending" ? " ⬆️" : " ⬇️"}</span>
                  )}
                </button>
              ))}
        </div>

        <ul>
          {sortedPosts.map((post) => (
            <li key={post.id}>
              <p>Date: {post.date}</p>
              <p>Likes: {post.likes}</p>
              <p>Comments: {post.comments}</p>
              {socialmedia_type === "tiktok" && (
                <>
                  <p>Share Count: {post.shareCount}</p>
                  <p>Download Count: {post.downloadCount}</p>
                  <p>Play Count: {post.playCount}</p>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Descending;

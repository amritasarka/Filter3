import React from "react";
import ascending from "./descending.module.css";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Descending = ({
  socialmedia_type,
  sortByPlatform,
  sortByFields,
  sortOrder,
  sortedPosts,
  fields,
  handleSort,
}) => {
  
  return (
    <>
      <div>
        {/* <div >
          {socialmedia_type === "tiktok"
            ? tiktokFields.map((field) => (
                <button className={ascending.ascendingdescendingbutton}
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
                className={ascending.ascendingdescendingbutton}
                  key={field.value}
                  onClick={() => handleSort([socialmedia_type, [field.value]])}
                >
                  {field.label}
                  {sortByFields.includes(field.value) && (
                    <span>{sortOrder === "ascending" ? " ⬆️" : " ⬇️"}</span>
                  )}
                </button>
              ))}
        </div> */}

        <div>
        {fields.map((field) => (
          <span
            className={ascending.ascendingdescendingbutton}
            key={field.value}
            onClick={() => handleSort([socialmedia_type, [field.value]])}
          >
            {field.label}
            {sortByFields.includes(field.value) && (
              <span>{sortOrder === "ascending" ? " ⬆️" : " ⬇️"}</span>
            )}
          </span>
        ))}
      </div>








        {/* <ul>
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
        </ul> */}
      </div>
    </>
  );
};

export default Descending;

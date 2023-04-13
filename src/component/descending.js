import React from "react";
import ascending from "./descending.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

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
        

        <div className={ascending.ascendingdescendingmainbutton}>
        {fields.map((field) => (
          <span
            className={ascending.ascendingdescendingbutton}
            key={field.value}
            onClick={() => handleSort([socialmedia_type, [field.value]])}
          >
            {field.label}
            {sortByFields.includes(field.value) && (
              <span>{sortOrder === "ascending" ? (
                <FontAwesomeIcon icon={faArrowUp} className="sort-icon" />
              ):(
                <FontAwesomeIcon icon={faArrowDown} className="sort-icon" />
              )}</span>
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

import React, { useState, useEffect } from "react";

import Slidercomponent from "./component/Slidercomponent";
import axios from "axios";

import "./comments.css";
import Search from "./component/Search";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const [list, setList] = useState(posts);
  const [searchTerm, setSearchTerm] = useState("");
  const [upposts, setUpposts] = useState([]);

  const apply = () => {
    const onedimension = [];
    for (let i = 0; i < posts.length; i++) {
      const newarray = posts[i];
      const comment = newarray.body;
      const likes = newarray.postId;
      const followers = newarray.user.id;
      const name = newarray.user.username;

      const obj = {
        comment: comment,
        likes: likes,
        followers: followers,
        name: name,
      };
      onedimension.push(obj);
    }
    setUpposts(onedimension);
  };

  useEffect(() => {
    apply();
  }, [posts]);

  const likesarr = [];
  for (let i = 0; i < upposts.length; i++) {
    likesarr.push(upposts[i].likes);
  }

  const maxLikes = Math.max(...likesarr);
  const minLikes = Math.min(...likesarr);

  const followersarr = [];
  for (let i = 0; i < upposts.length; i++) {
    followersarr.push(upposts[i].followers);
  }
  const maxFollowers = Math.max(...followersarr);
  const minFollowers = Math.min(...followersarr);

  const [likevalue, setLikevalue] = React.useState([23, 37]);
  const likehandleChange = (event, newValue) => {
    setLikevalue(newValue);
  };
  console.log(likevalue);

  const [followervalue, setFolloweralue] = React.useState([20, 500]);
  const followerhandleChange = (event, newValue) => {
    setFolloweralue(newValue);
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

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
      value: followervalue,
      handlechange: followerhandleChange,
      min: minFollowers,
      max: maxFollowers,
      name: "Followers",
    },
  ];

  const applyFilters = () => {
    let updatedList = upposts;

    // Price Filter for likes
    const minL = likevalue[0];
    const maxL = likevalue[1];
    console.log("minimum lllllllllll", minL);
    console.log("maximum lllllllllll", maxL);

    updatedList = updatedList.filter(
      (item) => item.likes >= minL && item.likes <= maxL
    );

    setList(updatedList);
    console.log("setlist", list);

    // Price Filter for followers
    const minF = followervalue[0];
    const maxF = followervalue[1];
    console.log("minimum ", minF);
    console.log("maximum ", maxF);

    updatedList = updatedList.filter(
      (item) => item.followers >= minF && item.followers <= maxF
    );

    setList(updatedList);
    console.log("setlist", list);

    //For search
    updatedList = updatedList.filter((item) => {
      return (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.comment.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // setFilteredPostData(d)
    });
    setList(updatedList);
  };

  const handleSort = (columnName) => {
    if (sortColumn === columnName) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(columnName);
      setSortOrder("asc");
    }
  };

  const sortedPosts = sortColumn
    ? [...list].sort((a, b) => {
        const sortVal = sortOrder === "asc" ? 1 : -1;
        return sortVal * (a[sortColumn] - b[sortColumn]);
      })
    : list;

  useEffect(() => {
    const loadpost = async () => {
      const response = await axios.get("https://dummyjson.com/comments");
      setPosts(response.data.comments);
    };
    loadpost();
  }, []);

  // console.log(posts)
  useEffect(() => {
    applyFilters();
  }, [likevalue, followervalue, searchTerm]);

  const tableheader = [
    { id: 1, name: "Name" },
    { id: 2, name: "Likes", other: "likes" },
    { id: 3, name: "Follower", other: "followers" },
    { id: 3, name: "Comment" },
  ];

  return (
    <>
      <Search value={searchTerm} changeInput={handleSearch} />

      <div className="maindiv">
        <table>
          <thead>
            <tr>
              {tableheader.map((item) => (
                <th key={item} onClick={() => handleSort(item.other)}>
                  {item.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedPosts.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.likes}</td>
                <td>{item.followers}</td>
                <td>{item.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {sliderArray.map((item) => (
          <>
            <p className="pslider">{item.name}</p>
            <Slidercomponent
              value={item.value}
              onChange={item.handlechange}
              min={item.min}
              max={item.max}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default Home;

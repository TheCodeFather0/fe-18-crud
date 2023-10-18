import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../Post";
import AddPost from "../AddPost";
import { v4 } from "uuid";

const _url = "http://localhost:3000/posts/";

const PostDashboard = () => {
  const [posts, setPosts] = useState([]);

  const getAllData = () => {
    axios.get(_url).then(({ data }) => {
      setPosts(data);
    });
  };

  useEffect(() => {
    getAllData();
  }, []); //deplist

  const addPost = (e, username, title, description, imageSource) => {
    e.preventDefault();
    let newPost = {
      id: v4(),
      username,
      title,
      description,
      imageSource,
    };

    axios.post(_url, newPost).then(({ statusText }) => {
      if (statusText === "Created") {
        alert("post ugurla elave edildi...");
        getAllData();
      }
    });
  };

  const deletePost = (id) => {
    let isAgree = confirm("brat ayixsan?");
    if (isAgree) {
      axios.delete(_url + id).then(({ statusText }) => {
        if (statusText === "OK") {
          alert("ugurla silindi...");
          getAllData();
        }
      });
    } else {
      alert("hecne silinmedi...");
    }
  };

  const editPost = ({ id, username, title, description, imageSource }) => {
    const {
      id: _id,
      username: _u,
      title: _t,
      description: _d,
      imageSource: _i,
    } = posts.find(({ id: _id }) => _id == id);

    const newUsername = prompt("yeni istifadeci adini daxil edin...", _u);
    const newTitle = prompt("yeni basliq daxil edin...", _t);
    const newDescription = prompt("yeni aciqlama daxil edin...", _d);
    const newImageSource = prompt("yeni sekilin menbeyini daxil edin...", _i);

    const editedPost = {
      username: newUsername,
      title: newTitle,
      description: newDescription,
      imageSource: newImageSource,
    };
    axios.put(_url + _id, editedPost).then(({ statusText }) => {
      if (statusText === "OK") {
        alert("ugurla deyisdirildi");
        getAllData();
      }
    });
  };
  return (
    <>
      <AddPost addPost={addPost} />
      <hr />
      <div className="posts">
        {posts.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
              deletePost={deletePost}
              editPost={editPost}
            />
          );
        })}
      </div>
    </>
  );
};

export default PostDashboard;

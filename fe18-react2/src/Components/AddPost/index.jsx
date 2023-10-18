import React, { useState } from "react";

const AddPost = ({ addPost }) => {
  const [username, setUsername] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageSource, setImageSource] = useState("");
  return (
    <form
      onSubmit={(e) => {
        addPost(e, username, title, description, imageSource);
        setUsername("");
        setTitle("");
        setDescription("");
        setImageSource("");
      }}
    >
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={({ target: { value } }) => setUsername(value)}
      />
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={({ target: { value } }) => setTitle(value)}
      />
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={({ target: { value } }) => setDescription(value)}
      />
      <input
        type="text"
        placeholder="image source"
        value={imageSource}
        onChange={({ target: { value } }) => setImageSource(value)}
      />
      <input type="submit" value="Add post" />
    </form>
  );
};

export default AddPost;

import React from "react";

const Post = ({
  post,
  post: { id, username, title, description, imageSource },
  deletePost,
  editPost,
}) => {
  return (
    <div className="post">
      <h3>{username}</h3>
      <h4>{title}</h4>
      <p>{description}</p>
      <img src={imageSource} alt="burda nese yaxsi bir sekil ola bilerdi..." />

      <div>
        <button onClick={() => editPost(post)}>Edit✒️</button>
        <button onClick={() => deletePost(id)}>Delete ❌</button>
      </div>
    </div>
  );
};

export default Post;

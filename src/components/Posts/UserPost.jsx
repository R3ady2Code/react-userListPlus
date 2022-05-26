import React from 'react';

function UserPost({ props }) {
  return (
    <div className="userPost">
      <h4>{props.title}</h4>
      <p>{props.body}</p>
    </div>
  );
}

export default UserPost;

import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserPost from '../components/Posts/UserPost';

import { AppContext } from '../context';

function PostsProfile() {
  const { posts } = useContext(AppContext);
  const id = Number(useParams().id - 1);

  return (
    <div className="postProfile">
      <h2>All posts by User ID{id + 1}</h2>
      <div className="postProfile__postsContainer">
        {posts[id].map((post) => (
          <UserPost key={post.id} props={post} />
        ))}
      </div>
    </div>
  );
}

export default PostsProfile;

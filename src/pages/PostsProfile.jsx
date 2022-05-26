import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import UserPost from '../components/Posts/UserPost';

import { AppContext } from '../context';

function PostsProfile() {
  const { posts } = useContext(AppContext);
  const id = Number(useParams().id - 1);

  console.log(posts[id]);

  return (
    <>
      <h2>All posts by user №{id + 1}</h2>
      <div className="postProfile__postsContainer">
        {posts[id].map((post) => (
          <UserPost props={post} />
        ))}
      </div>
    </>
  );
}

export default PostsProfile;

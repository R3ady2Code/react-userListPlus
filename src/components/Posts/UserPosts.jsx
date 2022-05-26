import React from 'react';
import { Link } from 'react-router-dom';

import UserAvatar from '../../img/user-avatar.png';
import UserPost from './UserPost';

function UserPosts({ ...userPosts }) {
  return (
    <div className="userPostsContainer">
      <div className="userPostsContainer__info">
        <img src={UserAvatar} alt="user-avatar" />
        <h2>User ID №{userPosts[0].userId}</h2>
      </div>
      <div className="userPostsContainer__posts">
        {[...Array(2)].map((post, i) => (
          <UserPost key={i} props={userPosts[i]} />
        ))}
      </div>
      <Link className="userPostsContainer__link" to={`/postsprofile/${userPosts[0].userId}`}>
        See all user posts
      </Link>
    </div>
  );
}

export default UserPosts;

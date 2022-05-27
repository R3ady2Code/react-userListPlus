import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

import UserPosts from '../components/Posts/UserPosts';

function Posts() {
  const { posts } = useContext(AppContext);

  const itemsPerPage = 2;
  let pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <div className="postsContainer">
      <div className="paginationContainer">
        {pageNumbers.map((numb, i) => (
          <button
            className={currentPage === numb ? 'active' : ''}
            onClick={() => setCurrentPage(numb)}
            key={i}>
            {numb}
          </button>
        ))}
      </div>
      <div className="cardUsersContainer">
        {posts.slice(indexOfFirstItem, indexOfLastItem).map((userPosts) => (
          <UserPosts key={userPosts[0].userId} {...userPosts} />
        ))}
      </div>
    </div>
  );
}

export default Posts;

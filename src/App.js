import { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import { AppContext } from './context';

import Header from './components/Header';
import Users from './pages/Users';
import Posts from './pages/Posts';
import Loader from './components/Loader/Loader';
import PostsProfile from './pages/PostsProfile';
import Faq from './pages/Faq';

function App() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const headerTitle = ['ID', 'Name', 'Username', 'E-mail', 'Phone', 'Website', 'Company'];
  const [sortBy, setSortBy] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsDataLoaded(false);
      const usersData = await axios.get('https://jsonplaceholder.typicode.com/users');
      const postsData = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const splitPostsToUsers = (arr) => {
        const output = [];
        let last = 0;
        for (let i = 1; i <= arr.length; i++) {
          if (arr[i]?.userId !== arr[i - 1]?.userId) {
            output.push(arr.slice(last, i));
            last = i;
          }
        }
        return output;
      };

      setUsers(usersData.data);
      setPosts(splitPostsToUsers(postsData.data));
      setIsDataLoaded(true);
    }

    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ users, setUsers, headerTitle, sortBy, setSortBy, posts, setPosts }}>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/users" replace />} />
          <Route path="/users" exact element={isDataLoaded ? <Users /> : <Loader />} />
          <Route path="/posts" exact element={<Posts />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/postsprofile/:id" element={<PostsProfile />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;

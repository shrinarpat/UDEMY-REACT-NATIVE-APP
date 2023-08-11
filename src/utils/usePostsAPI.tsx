import {useEffect, useState} from 'react';
import {POST_API, JSON_SERVER_URL} from './constants';

const usePostsAPI = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await fetch(`${JSON_SERVER_URL}/posts`);
    const json = await data.json();
    setPosts(json);
    setAllPosts(json);
  };

  const searchPost = searchText => {
    return fetch(`${JSON_SERVER_URL}/posts?q=${searchText}`);
  };

  return {posts, setPosts, allPosts, searchPost};
};

export default usePostsAPI;

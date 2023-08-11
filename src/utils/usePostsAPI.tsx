import {useEffect, useState, useRef} from 'react';
import {POST_API, JSON_SERVER_URL} from './constants';

const usePostsAPI = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const timerRef = useRef();
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
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(async () => {
      let res = await fetch(`${JSON_SERVER_URL}/posts?q=${searchText}`);

      if (res.status === 200) {
        res = await res.json();
        setPosts(res);
      }
    }, 300);
    // return posts;
  };

  return {posts, setPosts, allPosts, searchPost};
};

export default usePostsAPI;

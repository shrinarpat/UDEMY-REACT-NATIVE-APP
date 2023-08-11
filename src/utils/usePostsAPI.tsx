import {useEffect, useState} from 'react';
import {POST_API} from './constants';

const usePostsAPI = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await fetch(POST_API);
    const json = await data.json();
    setPosts(json);
  };

  return [posts, setPosts];
};

export default usePostsAPI;

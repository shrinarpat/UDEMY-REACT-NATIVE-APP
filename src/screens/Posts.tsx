import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import {Link} from '@react-navigation/native';

import usePostsAPI from '../utils/usePostsAPI';

const Posts = () => {
  const [searchText, setSearchText] = useState('');
  const {posts, setPosts, allPosts, searchPost} = usePostsAPI();

  const onSearchHanler = val => {
    setSearchText(val);
    searchPost(searchText);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Search"
            value={searchText}
            style={styles.textInput}
            onChangeText={val => onSearchHanler(val)}
          />
        </View>
        {posts &&
          posts.map(post => {
            return (
              <View key={post.id} style={styles.postCard}>
                <Text style={styles.titleText}>{post.title}</Text>
                <Text style={styles.bodyText}> {post.summary}</Text>
                <View style={styles.buttonWrapper}>
                  <Link
                    to={{screen: 'Post', params: {post}}}
                    style={styles.link}>
                    Read More
                  </Link>
                </View>
              </View>
            );
          })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  postCard: {
    flex: 1,
    padding: 20,
    shadowColor: 'black',
    elevation: 5,
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
  },
  titleText: {
    fontSize: 24,
    marginBottom: 10,
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  textInput: {
    height: 40,
    padding: 10,
    marginBottom: 20,
    borderColor: '#f4511e',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: 'white',
    elevation: 10,
  },
  link: {
    color: '#fff',
    backgroundColor: '#f4511e',
    padding: 8,
    borderRadius: 5,
  },
});

export default Posts;

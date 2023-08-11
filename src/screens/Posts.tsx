import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

import usePostsAPI from '../utils/usePostsAPI';

const Posts = () => {
  const [searchText, setSearchText] = useState('');
  const {posts, setPosts, allPosts, searchPost} = usePostsAPI();

  const onSearchHanler = async val => {
    setSearchText(val);
    let res = await searchPost(searchText);

    if (res.status === 200) {
      res = await res.json();
      setPosts(res);
    }
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
                  <Button title="Read More" color={'#f4511e'} />
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
});

export default Posts;

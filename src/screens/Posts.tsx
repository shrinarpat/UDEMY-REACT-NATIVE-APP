import React from 'react';
import {ScrollView, View, Text, StyleSheet, Button} from 'react-native';

import usePostsAPI from '../utils/usePostsAPI';

const Posts = () => {
  const [posts, setPosts] = usePostsAPI();
  return (
    <ScrollView>
      <View style={styles.container}>
        {posts &&
          posts.map(post => {
            return (
              <View key={post.id} style={styles.postCard}>
                <Text style={styles.titleText}>Title: {post.title}</Text>
                <Text style={styles.bodyText}> {post.body}</Text>
                <View style={styles.buttonWrapper}>
                  <Button title="Read More" color={'gray'} />
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
});

export default Posts;

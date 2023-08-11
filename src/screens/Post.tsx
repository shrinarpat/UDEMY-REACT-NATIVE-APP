import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Post = ({navigation, route}) => {
  //   console.warn(route.params);
  const {post} = route.params;
  return (
    <View style={styles.container}>
      <View key={post.id} style={styles.postCard}>
        <Text style={styles.titleText}>{post.title}</Text>
        <Text style={styles.summaryText}> {post.summary}</Text>
        <Text style={styles.bodyText}> {post.description}</Text>
        <View style={styles.buttonWrapper}>
          <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
      </View>
    </View>
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
    textAlign: 'left',
  },
  titleText: {
    fontSize: 36,
    marginBottom: 10,
    textAlign: 'left',
    color: 'black',
  },
  summaryText: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: 'left',
  },
  bodyText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'left',
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

export default Post;

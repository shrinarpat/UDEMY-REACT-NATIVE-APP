import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Profile Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    margin: 10,
  },
});

export default Profile;

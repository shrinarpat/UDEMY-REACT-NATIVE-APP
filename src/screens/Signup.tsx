import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is Signup Screen</Text>
      <View>
        <Button title="Login" onPress={() => navigation.navigate('login')} />
      </View>
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

export default Signup;

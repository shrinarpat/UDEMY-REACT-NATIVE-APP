import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation, route}) => {
  const {user} = route.params;

  const changeParamsHandler = () => {
    navigation.setParams({
      appName: 'Dhakad App',
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <View style={styles.buttonWrapper}>
        <Button title="Change Params" onPress={changeParamsHandler} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Posts"
          color="green"
          onPress={() => navigation.navigate('Posts')}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Go to Details"
          color="green"
          onPress={() => navigation.navigate('details')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 24,
    padding: 10,
  },
  buttonWrapper: {
    padding: 20,
  },
});

export default Home;

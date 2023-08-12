import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button, ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Courses from '../data/mockCourseData.json';
import Course from '../components/Course';

const Home = ({navigation, route}) => {
  useEffect(() => {
    loadAsyncStorage();
  }, []);

  const loadAsyncStorage = async () => {
    let user = JSON.parse(await AsyncStorage.getItem('loggedInUser'));
    // console.log(user);
    if (!user.isLoggedIn) {
      AsyncStorage.clear();
      navigation.navigate('Login');
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>All Courses</Text>
        <View>
          {Courses.data.map(course => (
            <Course key={course.id} course={course} />
          ))}
        </View>

        <View style={styles.footer}>
          <View>
            <Button
              title="Go to Posts"
              onPress={() => navigation.navigate('Posts')}
            />
          </View>
          <View>
            <Button
              title="Go to Details"
              color="green"
              onPress={() => navigation.navigate('details')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    paddingBottom: 40,
    marginTop: 10,
    backgroundColor: '#f4511e',
  },
  text: {
    fontSize: 24,
    color: '#000',
    marginVertical: 10,
  },
  heading: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
  },
});

export default Home;

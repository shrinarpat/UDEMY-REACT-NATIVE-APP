import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Courses from '../data/mockCourseData.json';

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
            <View key={course.id} style={styles.courseCard}>
              <Image style={styles.image} source={{uri: course.image}} />
              <Text style={styles.text}>Course Name: {course.name}</Text>
              <Text style={styles.normalText}>₹ {course.price}</Text>
              <Text style={styles.normalText}>
                Course Description: {course.description}
              </Text>
              <TouchableOpacity style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
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
  normalText: {
    fontSize: 20,
    color: '#000',
    marginVertical: 5,
  },
  heading: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
  },
  courseCard: {
    shadowColor: 'gray',
    elevation: 2,
    margin: 10,
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  buttonWrapper: {
    padding: 10,
    backgroundColor: '#f4511e',
    borderRadius: 5,
    width: 130,
    marginVertical: 10,
    shadowColor: '#f4511e',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    height: 240,
    width: 'auto',
  },
});

export default Home;

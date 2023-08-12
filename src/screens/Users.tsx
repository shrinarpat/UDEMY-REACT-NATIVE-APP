import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchUsers} from '../redux/userSlice';
const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  // console.warn(users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHeading}>Users List</Text>
      <View>
        {users &&
          users.length > 0 &&
          users[0]?.map(user => (
            <View key={user.id} style={styles.userCard}>
              <Text style={styles.text}>{user.username}</Text>
              <Text style={styles.text}>{user.email}</Text>
            </View>
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  textHeading: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 10,
  },
  userCard: {
    margin: 10,
    padding: 10,
    shadowColor: '#f0f0f0',
    elevation: 5,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    margin: 10,
  },
});

export default Users;

import React, {useContext} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import AuthContext from '../utils/useAuth';

const Login = ({navigation}) => {
  const {setIsLoggedIn} = useContext(AuthContext);
  const loginHandler = () => {
    setIsLoggedIn(true);
    navigation.navigate('home');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login Screen</Text>
      <View style={styles.button}>
        <Button title="Login" color="green" onPress={loginHandler} />
      </View>
      <View style={styles.button}>
        <Button
          title="Sign Up"
          color="gray"
          onPress={() =>
            navigation.navigate('signup', {appName: 'Super App from Login'})
          }
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
  button: {
    margin: 20,
  },
});

export default Login;

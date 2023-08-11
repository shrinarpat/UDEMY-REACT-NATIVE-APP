import React, {useContext, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import AuthContext from '../utils/useAuth';
import useUserAuth from '../utils/useUserAuth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);

  const {loginUser} = useUserAuth();
  const {setIsLoggedIn} = useContext(AuthContext);

  const loginHandler = async () => {
    let res = await loginUser(email, password);
    if (res.status === 200) {
      res = await res.json();
      if (res && res.length > 0) {
        // console.warn('Successfully logged in');
        setIsLoggedIn(true);
        navigation.navigate('home', {user: res[0]});
      } else {
        console.warn('Invalid username or password');
      }
    }
  };

  const checkFormValidity = () => {
    if (email.length > 4 && password.length > 4) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Email"
        value={email}
        style={styles.textInput}
        onChangeText={val => {
          setEmail(val);
          checkFormValidity();
        }}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        style={styles.textInput}
        onChangeText={val => {
          setPassword(val);
          checkFormValidity();
        }}
      />
      <View style={styles.buttonWrapper}>
        <Button
          title="Login"
          disabled={!isValid}
          color="green"
          onPress={loginHandler}
        />
      </View>
      <Text style={styles.spanText}>Or</Text>
      <View style={styles.buttonWrapper}>
        <Button
          title="Sign Up"
          color="gray"
          onPress={() => navigation.navigate('signup')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  text: {
    fontSize: 36,
    marginBottom: 20,
    textAlign: 'center',
  },
  spanText: {
    fontSize: 16,
    textAlign: 'center',
  },
  textInput: {
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 10,
  },
  buttonWrapper: {
    padding: 10,
  },
});

export default Login;

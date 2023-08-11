import React, {useReducer, useEffect} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

import useUserAuth from '../utils/useUserAuth';

const reducer = (state, action) => {
  switch (action.type) {
    case 'username':
      return {...state, username: action.value};
    case 'email':
      return {...state, email: action.value};
    case 'password':
      return {...state, password: action.value};
    case 'isValid':
      return {...state, isValid: action.value};
    default:
      return {...state};
  }
};

const Signup = ({navigation}) => {
  const [formState, dispatch] = useReducer(reducer, {
    username: '',
    email: '',
    password: '',
    isValid: false,
  });

  const onChangeHandler = action => {
    dispatch(action);
  };

  const {signUpUser} = useUserAuth();

  const handleUserSignUp = async () => {
    let res = await signUpUser(formState);
    if (res.status === 201) {
      // console.warn('User signed up successfully');
      navigation.navigate('login');
    } else {
      console.warn('Something went wrong, please try again later');
    }
  };

  useEffect(() => {
    // console.warn(formState.username.length);
    if (
      formState.username.length > 4 &&
      formState.email.length > 4 &&
      formState.password.length > 4
    ) {
      // console.warn('valid: ', formState.isValid);
      if (!formState.isValid) {
        dispatch({type: 'isValid', value: true});
      }
    } else {
      // console.warn('inValid: ', formState.isValid);
      if (formState.isValid) {
        dispatch({type: 'isValid', value: false});
      }
    }
  }, [formState]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <View>
        <TextInput
          placeholder="Username"
          style={styles.textInput}
          value={formState.username}
          onChangeText={val => onChangeHandler({type: 'username', value: val})}
        />
        <TextInput
          placeholder="Email"
          style={styles.textInput}
          value={formState.email}
          onChangeText={val => onChangeHandler({type: 'email', value: val})}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.textInput}
          value={formState.password}
          onChangeText={val => onChangeHandler({type: 'password', value: val})}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title="Sign Up"
          disabled={!formState.isValid}
          onPress={handleUserSignUp}
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

export default Signup;

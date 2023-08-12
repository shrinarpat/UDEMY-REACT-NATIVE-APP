import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';

import appStore from './src/redux/store';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Header from './src/components/Header';
import Signup from './src/screens/Signup';
import Details from './src/screens/Details';
import AuthContext from './src/utils/useAuth';
import Posts from './src/screens/Posts';
import Post from './src/screens/Post';
import Cart from './src/screens/Cart';
import Course from './src/components/Course';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    loadAsyncData();
  }, []);

  const loadAsyncData = async () => {
    let loginUser = JSON.parse(await AsyncStorage.getItem('loggedInUser'));
    // console.log(loginUser);
    if (loginUser.isLoggedIn) {
      setIsLoggedIn(true);
    }
  };

  return (
    <Provider store={appStore}>
      <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
        <NavigationContainer>
          <Stack.Navigator
            id="RootNavigator"
            initialRouteName="Login"
            screenOptions={{
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}>
            {isLoggedIn ? (
              <Stack.Group>
                {/*  screens for logged in users */}
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{
                    headerRight: () => <Header />,
                    title: 'Welcome',
                  }}
                />
                {/* <Stack.Screen name="Course" component={Course} /> */}
                <Stack.Screen
                  name="details"
                  component={Details}
                  options={{
                    headerShown: false,
                  }}
                />
                <Stack.Screen name="Posts" component={Posts} />
                <Stack.Screen name="Post" component={Post} />
                <Stack.Screen name="Cart" component={Cart} />
              </Stack.Group>
            ) : (
              <Stack.Group screenOptions={{headerShown: false}}>
                {/* auth screens*/}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  name="signup"
                  component={Signup}
                  options={{title: 'Sign Up'}}
                />
              </Stack.Group>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
};

export default App;

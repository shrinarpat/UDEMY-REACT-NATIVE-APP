import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Header from './src/components/Header';
import Signup from './src/screens/Signup';
import Details from './src/screens/Details';
import AuthContext from './src/utils/useAuth';
import Posts from './src/screens/Posts';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
      <NavigationContainer>
        <Stack.Navigator
          id="RootNavigator"
          initialRouteName="login"
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
                name="home"
                component={Home}
                options={{
                  headerRight: () => <Header />,
                  title: 'Welcome',
                }}
                initialParams={{
                  appName: 'My Super App',
                  user: {username: 'Default'},
                }}
              />
              <Stack.Screen
                name="details"
                component={Details}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="Posts" component={Posts} />
            </Stack.Group>
          ) : (
            <Stack.Group screenOptions={{headerShown: false}}>
              {/* auth screens*/}
              <Stack.Screen name="login" component={Login} />
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
  );
};

export default App;

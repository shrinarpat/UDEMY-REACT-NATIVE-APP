import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthContext from '../utils/useAuth';

const Header = () => {
  const navigation = useNavigation();
  const {setIsLoggedIn} = useContext(AuthContext);
  const logoutHandler = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
    navigation.navigate('Login');
  };
  return (
    <View>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default Header;

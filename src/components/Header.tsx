import React, {useContext} from 'react';
import {View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '../utils/useAuth';

const Header = () => {
  const navigation = useNavigation();
  const {setIsLoggedIn} = useContext(AuthContext);
  const logoutHandler = () => {
    setIsLoggedIn(false);
    navigation.navigate('login');
  };
  return (
    <View>
      <Button title="Logout" onPress={logoutHandler} />
    </View>
  );
};

export default Header;

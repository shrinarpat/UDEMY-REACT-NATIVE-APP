import React, {useContext} from 'react';
import {View, TouchableHighlight, StyleSheet, Text} from 'react-native';
import {useNavigation, Link} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';
import AuthContext from '../utils/useAuth';

const Header = () => {
  const navigation = useNavigation();
  const {setIsLoggedIn} = useContext(AuthContext);
  const cart = useSelector(state => state.cart);
  // console.warn(cart);

  const logoutHandler = async () => {
    await AsyncStorage.clear();
    setIsLoggedIn(false);
    navigation.navigate('Login');
  };

  return (
    <View style={styles.headerContainer}>
      <View style={styles.innerContainer}>
        <Link to={{screen: 'Cart'}} style={styles.buttonText}>
          Cart({cart.length})
        </Link>
        <TouchableHighlight onPress={logoutHandler} style={styles.button}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {},
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  button: {
    marginLeft: 15,
  },
});

export default Header;

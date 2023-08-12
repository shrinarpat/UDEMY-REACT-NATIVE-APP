import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useSelector} from 'react-redux';
import Course from '../components/Course';

const Cart = ({navigation, route}) => {
  const cartItems = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  return (
    <View>
      <ScrollView>
        <Text style={styles.textHeading}>Your Cart</Text>
        {cartItems.length === 0 ? (
          <View style={styles.emptyTextContainer}>
            <Text style={styles.emptyText}>
              Your Cart is Empty, Please add Courses to Proceed
            </Text>
          </View>
        ) : (
          <View>
            <View>
              {cartItems.map(item => (
                <Course key={item.id} course={item} isCartItem={true} />
              ))}
            </View>
            <View style={styles.cartCallToAction}>
              <Text style={styles.text}>Total: ₹ {totalPrice}</Text>
              <TouchableOpacity style={styles.buttonWrapper}>
                <Text style={styles.buttonText}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  textHeading: {
    fontSize: 36,
    textAlign: 'center',
    marginTop: 15,
  },
  cartCallToAction: {
    backgroundColor: '#fff',
    margin: 10,
    marginBottom: 40,
    felx: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
  },
  text: {
    fontSize: 24,
  },
  emptyTextContainer: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 24,
  },
  buttonWrapper: {
    padding: 10,
    backgroundColor: '#f4511e',
    borderRadius: 5,
    width: 150,
    marginVertical: 10,
    shadowColor: '#f4511e',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Cart;

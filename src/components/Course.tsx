import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCart, removeFromCart} from '../redux/cartSlice';

const Course = ({course, isCartItem}) => {
  const dispatch = useDispatch();
  const [addedInCart, setAddedInCart] = useState(false);
  const cartItems = useSelector(state => state.cart);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      const courseItem = cartItems.filter(item => item.id === course.id);
      courseItem && courseItem.length > 0
        ? setAddedInCart(true)
        : setAddedInCart(false);
    } else {
      setAddedInCart(false);
    }
  }, [cartItems]);

  return (
    <View key={course.id} style={styles.courseCard}>
      <Image style={styles.image} source={{uri: course.image}} />
      <Text style={styles.text}>Course Name: {course.name}</Text>
      <Text style={styles.normalText}>₹ {course.price}</Text>
      <View>
        {isCartItem ? (
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => navigation.navigate('Course', {course})}>
              <Text style={styles.buttonText}>View Course</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonWrapper}
              onPress={() => dispatch(removeFromCart(course?.id))}>
              <Text style={styles.buttonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={styles.normalText}>
              Course Description: {course.description}
            </Text>
            {addedInCart ? (
              <TouchableOpacity
                style={[styles.buttonWrapper, styles.disabledButton]}
                disabled={addedInCart}
                onPress={() => dispatch(addToCart(course))}>
                <Text style={styles.buttonText}>Added in Cart</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.buttonWrapper}
                disabled={addedInCart}
                onPress={() => dispatch(addToCart(course))}>
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: '#000',
    marginVertical: 10,
  },
  normalText: {
    fontSize: 20,
    color: '#000',
    marginVertical: 5,
  },
  courseCard: {
    shadowColor: 'gray',
    elevation: 2,
    margin: 10,
    flex: 1,
    padding: 15,
    backgroundColor: '#fff',
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
  disabledButton: {
    backgroundColor: 'gray',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    height: 240,
    width: 'auto',
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Course;

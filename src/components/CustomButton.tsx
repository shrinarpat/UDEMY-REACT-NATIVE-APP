import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';
const CustomButton = () => {
  const handleButtonPress = () => console.warn('TouchableHighlightButton');

  const onPressHandler = () => {
    console.warn('on press handler');
  };

  const onLongPressHandler = () => {
    console.warn('on long press handler');
  };

  const onPressInHandler = () => {
    console.warn('on press in handler');
  };

  const onPressOutHandler = () => {
    console.warn('on press out handler');
  };
  return (
    <ScrollView>
      <StatusBar
        backgroundColor="orange"
        hidden={false}
        barStyle="light-content"
      />
      <View>
        <Text style={styles.heading}>TouchableHighlight Button Example</Text>
        <TouchableHighlight onPress={handleButtonPress}>
          <Text style={styles.button}>Secondary</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleButtonPress}>
          <Text style={[styles.button, styles.success]}>Secondary</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={handleButtonPress}>
          <Text style={[styles.button, styles.warning]}>Secondary</Text>
        </TouchableHighlight>
      </View>
      <View>
        <Text style={styles.heading}>Pressable Example</Text>
        <Pressable
          onPress={onPressHandler}
          onLongPress={onLongPressHandler}
          onPressIn={onPressInHandler}
          onPressOut={onPressOutHandler}>
          <Text style={styles.button}>Press Me</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Platform.OS === 'android' ? '#bbb' : '#cdd',
    padding: 10,
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 10,
    shadowOffset: {width: 5, height: 5},
  },
  success: {
    backgroundColor: 'green',
  },
  warning: {
    backgroundColor: 'yellow',
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    margin: 10,
  },
});

export default CustomButton;

import React from 'react';
import {Text, ScrollView, StyleSheet} from 'react-native';
import exStyles from './styles/styles';

const StylingRN = () => {
  return (
    <ScrollView style={styles.container}>
      <Text
        style={{
          height: 60,
          padding: 10,
          backgroundColor: 'purple',
          color: 'white',
          fontSize: 30,
        }}>
        Inline Style Example
      </Text>
      <Text style={styles.textBox}>Internal Style Example</Text>
      <Text style={styles.textBox}>Internal Style Example</Text>
      <Text style={styles.textBox}>Internal Style Example</Text>
      <Text style={styles.textBox}>Internal Style Example</Text>
      <Text style={exStyles.textBox}>External Style Example</Text>
      <Text
        style={[
          exStyles.textBox,
          styles.textBox,
          {borderWidth: 2, borderColor: 'blue'},
        ]}>
        Multiple Style Example
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  textBox: {
    height: 100,
    padding: 10,
    margin: 10,
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
});

export default StylingRN;

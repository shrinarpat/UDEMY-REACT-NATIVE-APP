import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const RadioButton = ({radioLabel, index, selectedRadio, setSelectedRadio}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setSelectedRadio(1)}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
            {selectedRadio === index && <View style={styles.radioFill} />}
          </View>
          <Text style={styles.radioLabel}>{radioLabel}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 0,
  },
  radioLabel: {
    fontSize: 24,
    color: 'skyblue',
  },
  radio: {
    height: 36,
    width: 36,
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 18,
    margin: 10,
  },
  radioFill: {
    height: 26,
    width: 26,
    backgroundColor: 'skyblue',
    margin: 3,
    borderRadius: 13,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default RadioButton;

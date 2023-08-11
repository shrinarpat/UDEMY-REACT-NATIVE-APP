import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const ResponsiveLayout = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.bigItem, styles.green]}>
        <View style={[styles.item, styles.purple]}></View>
        <View style={[styles.item, styles.orange]}></View>
        <View style={[styles.item, styles.yellow]}></View>
      </View>
      <View style={[styles.item, styles.red]}></View>
      <View style={[styles.item, styles.blue]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
  },
  bigItem: {
    flex: 2,
    flexDirection: 'row',
    padding: 10,
  },
  green: {
    backgroundColor: 'green',
  },
  red: {
    backgroundColor: 'red',
  },
  purple: {
    backgroundColor: 'purple',
  },
  blue: {
    backgroundColor: 'blue',
  },
  orange: {
    backgroundColor: 'orange',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
});

export default ResponsiveLayout;

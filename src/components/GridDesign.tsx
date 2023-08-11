import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ListData from '../data/mockData.json';

const GridDesign = () => {
  return (
    <View style={styles.container}>
      {ListData.data.map(item => (
        <Text style={styles.item} key={item.id}>
          {item.name}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    padding: 10,
    margin: 10,
    fontSize: 24,
    backgroundColor: 'blue',
    color: 'white',
  },
});

export default GridDesign;

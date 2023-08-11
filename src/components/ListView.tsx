import React from 'react';
import {FlatList, Text, View} from 'react-native';

const data = [
  {key: 'user1'},
  {key: 'user2'},
  {key: 'user3'},
  {key: 'user4'},
  {key: 'user5'},
  {key: 'user6'},
  {key: 'user7'},
  {key: 'user8'},
  {key: 'user9'},
];
const ListView = () => {
  return (
    <View>
      <Text style={{fontSize: 60, padding: 20, fontWeight: 400}}>FlatList</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Text style={{fontSize: 60, padding: 10}}>{item.key}</Text>
        )}
      />
    </View>
  );
};

export default ListView;

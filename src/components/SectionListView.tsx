import React from 'react';
import {View, Text, SectionList} from 'react-native';

const data = [
  {
    title: 'name',
    data: ['Narpat', 'Rajesh', 'Raghu'],
  },
  {
    title: 'age',
    data: [24, 28, 30],
  },
  {
    title: 'Village',
    data: ['Rooppura', 'Antali', 'Bhilwara'],
  },
];

const SectionListView = () => {
  return (
    <View>
      <Text style={{fontSize: 60, fontWeight: 800, padding: 20}}>
        ScrollView
      </Text>
      <SectionList
        sections={data}
        renderItem={({item}) => (
          <Text style={{fontSize: 30, padding: 10}}>{item}</Text>
        )}
        renderSectionHeader={({section}) => (
          <Text
            style={{
              fontSize: 40,
              fontWeight: 600,
              backgroundColor: 'black',
              color: 'white',
            }}>
            {section.title}
          </Text>
        )}
        keyExtractor={item => `SectionListItem-${item}`}
      />
    </View>
  );
};

export default SectionListView;

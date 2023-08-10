import React, {useState} from 'react';
import {Text, ScrollView, TextInput} from 'react-native';

const PizzaTranslator = () => {
  const [text, setText] = useState('');
  const handleTextChange = newText => setText(newText);
  return (
    <ScrollView style={{padding: 20}}>
      <Text style={{margin: 10, fontSize: 50, fontWeight: 400}}>
        Pizza Translator
      </Text>
      <TextInput
        placeholder="Type here"
        defaultValue={text}
        onChangeText={handleTextChange}
        style={{
          borderWidth: 2,
          borderColor: 'gray',
          height: 40,
          margin: 10,
          borderRadius: 10,
          padding: 5,
        }}
      />
      <Text style={{fontSize: 40, margin: 10}}>
        {text
          .split(' ')
          .map(word => word && '🍕')
          .join(' ')}
      </Text>
    </ScrollView>
  );
};

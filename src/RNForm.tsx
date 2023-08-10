import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Modal,
} from 'react-native';
import RadioButton from './RadioButton';

const data = ['Male', 'Female', 'Transgender'];

const RNForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [show, setShow] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState<number>();
  const [showLoader, setShowLoader] = useState(false);
  const [timer, setTimer] = useState<any>();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    return () => {
      timer && clearTimeout(timer);
    };
  });

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setSelectedRadio(undefined);
    setShow(false);
  };

  const showFormData = () => {
    setShowLoader(true);

    setTimer(
      setTimeout(() => {
        setShow(true);
        setVisible(true);
        setShowLoader(false);
      }, 1000),
    );
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textBox}>RN Forms Example</Text>
      <TextInput
        placeholder="Enter name..."
        style={styles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter email..."
        style={styles.textInput}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <View>
        <TextInput
          placeholder="Enter password"
          secureTextEntry={secureText}
          style={styles.textInput}
          value={password}
          onChangeText={text => setPassword(text)}
        />
        <View style={styles.eyeIcon}>
          <Button title="👁️" onPress={() => setSecureText(!secureText)} />
        </View>
      </View>

      <View>
        <Text style={styles.textBox}>Select Gender</Text>
        <View>
          {data.map((item, index) => (
            <RadioButton
              radioLabel={item}
              index={index}
              key={item}
              selectedRadio={selectedRadio}
              setSelectedRadio={() => setSelectedRadio(index)}
            />
          ))}
        </View>
      </View>

      <View style={styles.button}>
        <Button title="Print Value" color={'green'} onPress={showFormData} />
      </View>
      <View style={styles.button}>
        <Button title="Reset Value" color={'gray'} onPress={resetForm} />
      </View>

      <View>
        {show ? (
          <Modal transparent={true} visible={visible} animationType="slide">
            <View style={styles.centered}>
              <View style={styles.card}>
                <View style={styles.modalBody}>
                  <Text style={styles.textBox}>{name}</Text>
                  <Text style={styles.textBox}>{email}</Text>
                  <Text style={styles.textBox}>{password}</Text>
                  <Text style={styles.textBox}>
                    {selectedRadio !== undefined && data[selectedRadio]}
                  </Text>
                </View>
                <Button
                  title="Close"
                  onPress={() => {
                    setVisible(false);
                    setShow(false);
                  }}
                />
              </View>
            </View>
          </Modal>
        ) : (
          <ActivityIndicator
            style={styles.loader}
            size={'large'}
            animating={showLoader}
          />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  textInput: {
    padding: 10,
    fontSize: 16,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },
  textBox: {
    margin: 10,
    fontSize: 24,
  },
  button: {
    padding: 10,
    margin: 10,
    fontSize: 24,
    cursor: 'pointer',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: 12,
  },
  centered: {flex: 1, justifyContent: 'center'},
  card: {
    padding: 30,
    margin: 20,
    marginBottom: 60,
    shadowColor: 'black',
    elevation: 5,
    shadowOpacity: 0.5,
    shadowOffset: {width: 2, height: 2},
    borderRadius: 5,
    backgroundColor: 'white',
  },
  modalBody: {marginBottom: 20},
  loader: {
    marginBottom: 60,
  },
});

export default RNForm;

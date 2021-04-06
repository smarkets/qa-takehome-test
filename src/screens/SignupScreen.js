import React, { useState } from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Text,
  StyleSheet,
  Keyboard,
  Platform,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native';
import { Colors, COUNTRIES } from '../constants';
import { validateUsername, validatePassword } from '../validation';

import HelpfulTextInput from '../components/HelpfulTextInput';
import Button from '../components/Button';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState(COUNTRIES[0]);

  const handleSubmit = () => {
    navigation.navigate('Success')
  }

  const usernameErrors = validateUsername(username);
  const passwordErrors = validatePassword(password);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <View>
        <HelpfulTextInput
          label='Username'
          errors={usernameErrors}
          value={username}
          onChangeText={setUsername}
          containerStyle={styles.textInput}
        />
        <HelpfulTextInput
          label='Password'
          errors={passwordErrors}
          value={password}
          onChangeText={setPassword}
          containerStyle={styles.textInput}
        />
        <Text style={styles.label}>Select a country</Text>
        <View style={styles.pickerContainer}>
        <Picker
          selectedValue={country}
          style={styles.picker}
          itemStyle={styles.picker}
          onValueChange={setCountry}
        >
          {COUNTRIES.map(countryOption => (
            <Picker.Item key={countryOption} label={countryOption} value={countryOption} />
          ))}
        </Picker>
        </View>
      </View>

      <Button
        disabled={
          !username ||
          !password ||
          !!usernameErrors.length
        }
        label="Submit"
        onPress={handleSubmit}
      />
    </View>
    </TouchableWithoutFeedback>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: Colors.black,
  },
  label: {
    color: Colors.white,
  },
  textInput: {
    marginBottom: 12,
  },
  pickerContainer: Platform.OS === 'android' ? {
    marginTop: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 2,
    backgroundColor: Colors.grey,
    borderColor: Colors.lightGrey,
  } : {},
  picker: {
    color: Colors.white,
  }
})

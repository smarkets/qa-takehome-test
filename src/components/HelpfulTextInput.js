import React from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Colors } from '../constants';
import PropTypes from 'prop-types';

const HelpfulTextInput = ({
  label,
  errors,
  containerStyle,
  style,
  ...props
}) => {
  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        selectionColor={Colors.smarketsGreen}
        style={[styles.textInput, style]}
        {...props}
      />
      {errors?.length > 0 && <Text style={styles.error}>{errors[0]}</Text>}
    </View>
  )
};

HelpfulTextInput.propTypes = {
  containerStyle: PropTypes.object,
  label: PropTypes.string.isRequired,
  errors: PropTypes.array,
  style: PropTypes.object,
};

export default HelpfulTextInput;

const styles = StyleSheet.create({
  textInput: {
    marginTop: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 2,
    borderColor: Colors.lightGrey,
    backgroundColor: Colors.grey,
    color: Colors.white,
  },
  label: {
    color: 'white',
  },
  error: {
    color: 'red',
  }
});

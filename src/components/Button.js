import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants';
import PropTypes from 'prop-types';

const Button = ({
  disabled,
  label,
  style,
  textStyle,
  onPress
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, style, disabled && styles.disabled]}
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
    </TouchableOpacity>
  )
};

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  style: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func.isRequired,
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 2,
    backgroundColor: Colors.smarketsGreen,
  },
  disabled: {
    opacity: 0.4,
  },
  text: {
    color: Colors.white,
  }
});

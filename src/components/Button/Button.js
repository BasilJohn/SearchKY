import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './Styles';
const Button = ({buttonText, onPress, testID}) => {
  return (
    <TouchableOpacity
      testID={testID}
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.buttonStyle}>
      <Text style={styles.buttonTextStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Button;

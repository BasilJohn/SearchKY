import React from 'react';
import {TextInput} from 'react-native';
import {styles} from './Styles';
const InputText = ({onChangeText, textValue, placeholder}) => {
  return (
    <TextInput
      style={styles.textInputStyle}
      onChangeText={onChangeText}
      value={textValue}
      placeholder={placeholder}
      underlineColorAndroid="transparent"
    />
  );
};

export default InputText;

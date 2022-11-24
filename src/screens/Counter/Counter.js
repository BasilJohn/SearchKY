import * as React from 'react';
import {View, Text} from 'react-native';

//Custom Imports
import {styles} from './Styles';
import { globalStyles } from '../../theme/globalStyles';
const CounterScreen = () => {
  return (
    <View style={globalStyles.containerStyle}>
      <Text>{'Counter'}</Text>
    </View>
  );
};

export default CounterScreen;

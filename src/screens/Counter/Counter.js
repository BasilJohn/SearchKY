import * as React from 'react';
import {View, Text} from 'react-native';

//Custom Imports
import {styles} from './Styles';

const CounterScreen = () => {
  return (
    <View style={styles.containerStyle}>
      <Text>{'Counter'}</Text>
    </View>
  );
};

export default CounterScreen;

import * as React from 'react';
import {View, Text} from 'react-native';
//Custom Imports
import {Button} from '../../components';
import {styles} from './Styles';
import { globalStyles } from '../../theme/globalStyles';
const HomeScreen=(props)=>{

  const moveToScreen=(screenName)=>{
    props?.navigation?.navigate(screenName)
  }

  return (
    <View style={globalStyles.containerStyle}>
      <View style={styles.bottomContainerStyle}>
        <Button onPress={()=>moveToScreen("Search")} buttonText={'Search'} />
        <Button onPress={()=>moveToScreen("Counter")} buttonText={'Counter'} />
      </View>
    </View>
  );
}

export default HomeScreen;

import * as React from 'react';
import {View,SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
//Custom Imports
import {Button} from '../../components';
import {homeActions} from '../../store/actions';
import {styles} from './Styles';
import { globalStyles } from '../../theme/globalStyles';
const HomeScreen=(props)=>{

  const moveToScreen=(screenName)=>{
    props?.clearStoreData();
    props?.navigation?.navigate(screenName)
  }

  return (
    <SafeAreaView style={globalStyles.containerStyle}>
      <View style={styles.bottomContainerStyle}>
        <Button testID={"btnSearch"} onPress={()=>moveToScreen("Search")} buttonText={'Search'} />
        <Button testID={"btnCounter"} onPress={()=>moveToScreen("Counter")} buttonText={'Counter'} />
      </View>
    </SafeAreaView>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    clearStoreData: () => dispatch(homeActions.clearStoreData()),
  };
};

const mapStateToProps = state => {
  return {
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

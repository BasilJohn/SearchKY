import React from 'react';
import {View, Text,SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
//Custom Imports
import {styles} from './Styles';
import {globalStyles} from '../../theme/globalStyles';
import {Button} from '../../components';
import {homeActions} from '../../store/actions';

const CounterScreen = props => {

  const onButtonPress = type => {
    const countValue=type==="increase"?props.count+1:props?.count-1;
    props?.counterAction(countValue);
  };


  return (
    <SafeAreaView style={globalStyles.containerStyle}>
      <View style={styles.containerStyle}>
      <View style={styles.counterTextContainerStyle}>
        <Text style={styles.counterTextStyle}>{props?.count}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.counterButtonContainer}>
        <Button onPress={() => onButtonPress('increase')} buttonText={'+'} />
        </View>
        <View style={styles.counterButtonContainer}>
        <Button onPress={() => onButtonPress('decrease')} buttonText={'-'} />
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    counterAction: value => dispatch(homeActions.counterAction(value)),
  };
};

const mapStateToProps = state => {
  return {
    count: state.home.count,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterScreen);

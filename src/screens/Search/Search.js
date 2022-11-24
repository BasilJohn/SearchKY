import React, {useState} from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
//Custom Imports
import {homeActions} from '../../store/actions';
import {InputText} from '../../components';
import {styles} from './Styles';
import {globalStyles} from '../../theme/globalStyles';

const SearchScreen = props => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = value => {
    setSearchValue(value);
    //props?.getSearchData();
  };

  return (
    <View style={globalStyles.containerStyle}>
      <View style={styles.searchInputContainer}>
        <InputText
          textValue={searchValue}
          onChangeText={onChangeText}
          placeholder={'Search here'}
        />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchData: () => dispatch(homeActions.getSearchData()),
  };
};

const mapStateToProps = state => {
  return {
    searchList: state.home.searchList,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

import React, {useState} from 'react';
import {View, Text, ActivityIndicator, Image,SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import {AccordionList} from 'accordion-collapse-react-native';
//Custom Imports
import {homeActions} from '../../store/actions';
import {InputText} from '../../components';
import {styles} from './Styles';
import {globalStyles} from '../../theme/globalStyles';

const SearchScreen = props => {
  const [searchValue, setSearchValue] = useState('');

  const onChangeText = value => {
    setSearchValue(value);
    if (value.length >= 3) {
      props?.getSearchData(value);
    }
  };

  const renderItemHead = item => {
    return (
      <View style={styles.itemContainerStyle}>
        <Text style={styles.itemTextStyle}>{item?.snippet?.title}</Text>
      </View>
    );
  };

  const renderItemBody = item => {
    return (
      <View style={styles.itemBodyStyle}>
        <Text style={styles.bodyTextStyle}>{item?.snippet?.description}</Text>
        <Image
          source={{uri: item?.snippet?.thumbnails?.default?.url}}
          style={styles.bodyThumbNailStyle}
          resizeMode={'contain'}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={globalStyles.containerStyle}>
      <View style={styles.searchInputContainer}>
        <InputText
          textValue={searchValue}
          onChangeText={onChangeText}
          placeholder={'Search youtube videos'}
        />
      </View>
      {props?.isDataLoading && (
        <ActivityIndicator
          size={'large'}
          style={globalStyles.overLayActivityContainerStyle}
        />
      )}
      <AccordionList
        showsVerticalScrollIndicator={false}
        list={props?.searchList}
        header={renderItemHead}
        body={renderItemBody}
        keyExtractor={item => `${item.etag}`}
      />
    </SafeAreaView>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    getSearchData: value => dispatch(homeActions.getSearchData(value)),
  };
};

const mapStateToProps = state => {
  return {
    searchList: state.home.searchList,
    isDataLoading: state.home.isDataLoading,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

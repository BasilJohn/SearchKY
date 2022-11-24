import {StyleSheet} from 'react-native';
import {ratioHeight, colors, ratioWidth} from '../../theme';
export const styles = StyleSheet.create({
  textInputStyle: {
    width: '90%',
    height: 40 * ratioHeight,
    borderRadius: 20,
    justifyContent: 'center',
    marginVertical: 10 * ratioHeight,
    borderWidth:1,
    borderColor:colors.searchBoxBorderColor,
    paddingLeft:10 * ratioWidth
  },
});

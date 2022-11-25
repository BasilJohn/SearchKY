import {StyleSheet} from 'react-native';
import {colors, fonts, ratioHeight, ratioWidth} from '../../theme';
export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  counterButtonContainer: {
    paddingHorizontal: 5 * ratioWidth,
    flex: 1,
  },
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  counterTextStyle: {
    fontSize: fonts.size.font18,
    color: colors.textColorPrimary,
  },
  counterTextContainerStyle: {
    paddingHorizontal: 10 * ratioWidth,
    paddingVertical: 50 * ratioHeight,
  },
});

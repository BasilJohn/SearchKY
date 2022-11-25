import {StyleSheet} from 'react-native';
import {colors} from '../theme';
export const globalStyles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.colorWhite,
  },
  overLayActivityContainerStyle: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

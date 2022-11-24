import dimensions from './dimensions';
import fonts from './fonts';
import colors from './colors';

var heightRef = 710;
var widthRef = 360;

const ratioHeight = dimensions.screenHeight / heightRef;
const ratioWidth = dimensions.screenWidth / widthRef;

export {
  dimensions,
  fonts,
  colors,
  heightRef,
  widthRef,
  ratioHeight,
  ratioWidth,
};
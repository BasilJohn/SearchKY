import Dimensions from './dimensions';

const size = {
  font10: Dimensions.screenWidth * (10 / 375),
  font12: Dimensions.screenWidth * (12 / 375),
  font14: Dimensions.screenWidth * (14 / 375),
  font16: Dimensions.screenWidth * (16 / 375),
  font18: Dimensions.screenWidth * (18 / 375),
  font20: Dimensions.screenWidth * (20 / 375),
};

const weight = {
  full: '900',
  semi: '600',
  low: '400',
  bold: 'bold',
  normal: 'normal',
};


export default {
  size,
  weight,
};
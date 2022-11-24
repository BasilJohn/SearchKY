import { StyleSheet } from "react-native";
import { ratioHeight,colors,fonts } from "../../theme";
export const styles = StyleSheet.create({
  buttonStyle: {
    width:"90%",
    height:40 * ratioHeight,
    backgroundColor:colors.buttonColor,
    borderRadius:10,
    justifyContent:"center",
    marginVertical:5*ratioHeight
  },
  buttonTextStyle:{
    color:colors.colorWhite,
    textAlign:"center",
    fontSize:fonts.size.font14,
    fontWeight:fonts.weight.low
  }
});

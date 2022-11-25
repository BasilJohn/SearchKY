import { StyleSheet } from "react-native";
import { colors, fonts, ratioHeight, ratioWidth } from "../../theme";
export const styles = StyleSheet.create({
  searchInputContainer:{
     width:"100%",
     alignItems:"center"
  },
  itemContainerStyle:{
    width:"95%",
    alignSelf:"center",
    borderTopWidth: 1,    
    borderColor:colors.listItemBorderColor,
    height: 50 * ratioHeight,
    justifyContent:"center"
  },
  itemBodyStyle:{
    width:"95%",
    alignSelf:"center",
    borderColor:colors.listItemBorderColor,
    height: 100 * ratioHeight,
    justifyContent:"center",
    flexDirection:"row",
    marginBottom:10*ratioHeight
  },
  itemTextStyle:{
    color:colors.textColorPrimary,
    fontSize:fonts.size.font16,
    textAlign:"center",
    fontWeight:fonts.weight.low,
    flex:1
  },
  bodyThumbNailStyle:{
    height:100*ratioHeight,
    width:100*ratioWidth,
    flex:1
  },
  bodyTextStyle:{
    color:colors.textColorSecondary,
    fontSize:fonts.size.font14,
    textAlign:"center",
    flex:1
  }
});

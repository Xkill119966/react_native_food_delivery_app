import React from "react";
import { TouchableOpacity, Text , Image} from "react-native";
import { COLORS, FONTS } from "../constants";

const TextIconButtonForRatings = ({ label, labelStyle, containerStyle, onPress , icon , iconStyle}) => {
  return (
    <TouchableOpacity
      style={{
          flexDirection : "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Text style={{  ...FONTS.body3, ...labelStyle }}>
        {label}
      </Text>
      <Image source={icon} 
      style = {{
          marginLeft : 5,
          height : 20,
          width : 20,
          tintColor : COLORS.black,
          ...iconStyle
      }}
      />
    </TouchableOpacity>
  );
};

export default TextIconButtonForRatings;

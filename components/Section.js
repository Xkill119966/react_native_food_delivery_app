import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

const Section = ({ title, onPress, children }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          marginHorizontal: SIZES.padding,
          marginTop: 30,
          marginBottom: 20,
        }}
      >
        <Text style={{ flex: 1, ...FONTS.h3 }}>{title}</Text>
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: COLORS.primary, ...FONTS.body3 }}>
            Show All
          </Text>
        </TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

export default Section;

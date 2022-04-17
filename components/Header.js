import React from "react";
import { Text, View } from "react-native";
import { FONTS } from "../constants";

const Header = ({
  containerStyle = {},
  title = "Title",
  titleStyle = {},
  leftComponent,
  rightComponent,
}) => (
  <View
    style={{
      flexDirection: "row",
      ...containerStyle,
    }}
  >
    {/* Left */}

    {leftComponent}

    {/* Title */}
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ ...FONTS.h3, ...titleStyle }}>{title}</Text>
    </View>
    {/* Right */}
    {rightComponent}
  </View>
);

export default Header;

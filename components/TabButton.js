import React from "react";
import { TouchableWithoutFeedback, Image, Text } from "react-native";
import Animated, { color } from "react-native-reanimated";
import { COLORS, FONTS, SIZES } from "../constants";

const TabButton = ({
  label,
  icon,
  isFoucused,
  onPress,
  outerContainerStyle,
  innerContainerStyle,
}) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        },
        outerContainerStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            flexDirection: "row",
            width: "80%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 25,
          },
          innerContainerStyle,
        ]}
      >
        <Image
          source={icon}
          style={{
            width: 20,
            height: 20,
            tintColor: isFoucused ? COLORS.white : COLORS.gray,
          }}
        />
        {isFoucused && (
          <Text
            numberOfLines={1}
            style={{
              marginLeft: SIZES.base,
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {label}
          </Text>
        )}
      </Animated.View>
    </Animated.View>
  </TouchableWithoutFeedback>
);

export default TabButton;

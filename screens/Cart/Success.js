import React from "react";
import { View, Text, BackHandler, Image } from "react-native";
import { TextButton } from "../../components";
import { COLORS, SIZES, images, FONTS } from "../../constants";

const Success = ({ navigation }) => {
  React.useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => backHandler.remove();
  });
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.success}
          style={{
            height: 150,
            width: 150,
          }}
        />
        <Text style={{ marginTop: SIZES.padding, ...FONTS.h1 }}>
          Congratulations
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            ...FONTS.body3,
            textAlign: "center",
            color: COLORS.darkGray,
          }}
        >
          Payment was successfully made!
        </Text>
      </View>
      <TextButton
        label={"Done"}
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => {
          navigation.navigate("DeliveryStatus");
        }}
      />
    </View>
  );
};

export default Success;

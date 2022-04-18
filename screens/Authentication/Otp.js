import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthLayout } from "../index";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const Otp = ({navigation}) => {
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <AuthLayout
      title={"OTP Authentication"}
      subtitle={"An authentication has been sent"}
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      {/* OTP inputs */}
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OTPInputView
          pinCount={4}
          style={{ width: "100%", height: 50 }}
          codeInputFieldStyle={{
            width: 65,
            height: 65,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            color: COLORS.black,
            ...FONTS.h3,
          }}
          onCodeFilled={(code) => {
            console.log("Code", code);
          }}
        />

        {/* Countdown Timer */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Don't receive cpde?
          </Text>
          <TextButton
            label={`Resend (${timer})s`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>
      {/* Footer */}

      <View>
        <TextButton
          label={"Continue"}
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => {
            navigation.navigate("Home")
          }}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            By Signing up you agree to our
          </Text>
          <TextButton 
          
          label={"Terms and Conditions"}
          buttonContainerStyle = {{
              backgroundColor : null
          }}
          labelStyle  = {{
              color : COLORS.primary,
              ...FONTS.body3
          }}
          onPress ={() => {
              console.log('OPT');
          }}
          />
        </View>
      </View>
    </AuthLayout>
  );
};

export default Otp;

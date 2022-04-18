import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { AuthLayout } from "../index";
import {
  FormInput,
  CustomSwitch,
  TextButton,
  TextIconButton,
} from "../../components";
import { FONTS, SIZES, COLORS, icons } from "../../constants";
import { utils } from "../../utils";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [saveMe, setSaveMe] = React.useState(false);

  const [showPassword, setShowPassword] = React.useState(false);

  const [emailError, setEmailError] = React.useState("");

  function isEnabledSignIn(params) {
    return email !== "" && password !== "" && emailError === "";
  }

  return (
    <AuthLayout
      title={"Let's Sign You In"}
      subtitle={"Welcome back. you've been missed"}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* FormInput */}
        <FormInput
          label={"Email"}
          keyboardType="email-address"
          autoCompleteType="email"
          value={email}
          onChange={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  email === "" || (email !== "" && emailError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email !== "" && emailError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label={"Password"}
          secureTextEntry={!showPassword}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          value={password}
          onChange={(value) => setPassword(value)}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
              }}
              onPress={() => {
                setShowPassword(!showPassword);
              }}
            >
              <Image
                source={showPassword ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Save me & Forgot password */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "space-between",
          }}
        >
          <CustomSwitch
            value={saveMe}
            onChange={(value) => {
              setSaveMe(value);
            }}
          />

          <TextButton
            label="Forgot Password"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.gray,
              ...FONTS.body5,
            }}
            onPress={() => {
              navigation.navigate("ForgotPassword");
            }}
          />
        </View>

        {/* Sign In */}

        <TextButton
          label="Sign In"
          disabled={isEnabledSignIn() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignIn()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => {
            console.log("CALLL");
            navigation.navigate("Home");
          }}
        />
        {/* Sign Up */}

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            Don't have an account ?
          </Text>
          <TextButton
            label={"Sign Up"}
            buttonContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => {
              navigation.navigate("SignUp");
            }}
          />
        </View>
      </View>
      {/* FOOTER */}

      <View>
        {/* FACEBOOK  */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="Continue With Facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          onPress={() => {
            console.log("Facebook");
          }}
        />
        {/* <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.gray,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={
            {
              tintColor: COLORS.white
            }
          }
          label="Continue With Facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color : COLORS.white
          }}
          onPress={() => {
            console.log("Facebook");
          }}
        /> */}

        {/* GOOGLE  */}
      </View>
    </AuthLayout>
  );
};

export default SignIn;

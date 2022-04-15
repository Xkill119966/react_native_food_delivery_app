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

const SignUp = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [usernameError, setUsernameError] = React.useState("");
  const [passwodError, setPasswordError] = React.useState("");

  const [showPassword, setShowPassword] = React.useState(false);
  function isEnabledSignUp(params) {
    return (
      email !== "" &&
      username !== "" &&
      password !== "" &&
      emailError === "" &&
      usernameError === "" &&
      passwodError === ""
    );
  }
  return (
    <AuthLayout
      title={"Getting Startd"}
      subtitle="Create an account to continue"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      {/* Form Input And Sign Up */}

      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        <FormInput
          label={"Email"}
          keyboardType="email-address"
          autoCompleteType="email"
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
                    : icons.cross
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
          label={"Username"}
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          keyboardType="email-address"
          autoCompleteType="email"
          onChange={(value) => {
            setUsername(value);
          }}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
              }}
            >
              <Image
                source={
                  username === "" || (username !== "" && usernameError === "")
                    ? icons.correct
                    : icons.cross
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    username === ""
                      ? COLORS.gray
                      : username !== "" && usernameError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
          errorMsg={usernameError}
        />

        <FormInput
          label={"Password"}
          secureTextEntry={!showPassword}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          onChange={(value) => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwodError}
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

        {/* SingUp and SignIn */}

        <TextButton
          label={"SignUp"}
          disabled={isEnabledSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("Otp")}
        />

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
            Already have an account ?
          </Text>
          <TextButton
            label={"Sign In"}
            buttonContainerStyle={{
              marginLeft: 3,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => {
              navigation.navigate("SignIn");
            }}
          />
        </View>
      </View>

      {/* Footer */}
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

export default SignUp;

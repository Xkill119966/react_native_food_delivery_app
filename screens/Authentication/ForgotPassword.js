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

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState("");

  const [emailError, setEmailError] = React.useState("");

  function isEnabledSendEmail(params) {
    return email !== "" && emailError === "";
  }

  return (
    <AuthLayout
      title={"Password Recovery"}
      subtitle={"Please enter your email address to recover your password"}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        {/* FormInput */}
        <FormInput
          label={"EMail"}
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

        {/* Sign In */}
      </View>

      <TextButton
        label="Send Email"
        disabled={isEnabledSendEmail() ? false : true}
        buttonContainerStyle={{
          height: 55,
          alignItems: "center",
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: isEnabledSendEmail()
            ? COLORS.primary
            : COLORS.transparentPrimary,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </AuthLayout>
  );
};

export default ForgotPassword;

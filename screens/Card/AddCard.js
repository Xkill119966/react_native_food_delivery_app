import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  FormInput,
  Header,
  IconButton,
  TextButton,
  FormInputCheck,
} from "../../components";
import RadioButton from "../../components/RadioButton";
import { COLORS, SIZES, icons, images, FONTS } from "../../constants";
import { utils } from "../../utils";
const AddCard = ({ navigation, route }) => {
  const [selectedCard, setselectedCard] = React.useState(null);
  const [cardNumber, setCardNumber] = React.useState("");
  const [cardNumberError, setCardNumberError] = React.useState("");
  const [cardName, setCardName] = React.useState("");
  const [cardNameError, setCardNameError] = React.useState("");
  const [expiryDate, setExpiryDate] = React.useState("");
  const [expiryDateError, setExpiryDateError] = React.useState("");
  const [cvv, setCvv] = React.useState("");
  const [cvvError, setCvvError] = React.useState("");
  const [isRemember, setIsRemember] = React.useState(false);

  React.useEffect(() => {
    let { selectedCard } = route.params;
    setselectedCard(selectedCard);
  }, []);

  function isEnabledAddCard(params) {
    return (
      cardNumber !== "" &&
      cardName !== "" &&
      expiryDate !== "" &&
      cvv !== "" &&
      cardNumberError === "" &&
      cardNameError === "" &&
      cvvError === "" &&
      expiryDateError === ""
    );
  }

  function renderHeader(params) {
    return (
      <Header
        title="ADD NEW CARD"
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 12,
        }}
        leftComponent={
          <IconButton
            icon={icons.back}
            containerStyle={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              borderRadius: SIZES.radius,
              borderColor: COLORS.gray2,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray2,
            }}
            onPress={() => {
              navigation.goBack();
            }}
          />
        }
        rightComponent={<View style={{ width: 40 }} />}
      />
    );
  }

  function renderCard(params) {
    return (
      <ImageBackground
        source={images.card}
        style={{
          height: 200,
          width: "100%",
          marginTop: SIZES.radius,
          borderRadius: SIZES.radius,
          overflow: "hidden",
        }}
      >
        {/* Logo */}

        <Image
          source={selectedCard?.icon}
          resizeMode="contain"
          style={{
            position: "absolute",
            top: 20,
            height: 40,
            width: 80,
            right: 20,
          }}
        />

        {/* Details */}

        <View
          style={{
            position: "absolute",
            bottom: 10,
            left: 0,
            right: 0,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
            }}
          >
            {cardName}
          </Text>

          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Text style={{ flex: 1, color: COLORS.white, ...FONTS.body3 }}>
              {cardNumber}
            </Text>
            <Text style={{ color: COLORS.white, ...FONTS.body3 }}>
              {expiryDate}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  }

  function renderForms(params) {
    return (
      <View>
        <FormInput
          containerStyle={{
            marginTop: SIZES.padding * 2,
          }}
          label={"Card Number"}
          keyboardType="number-pad"
          value={cardNumber}
          maxLength={19}
          onChange={(value) => {
            setCardNumber(
              value
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()
            );
            utils.validateInput(value, 19, setCardNumberError);
          }}
          errorMsg={cardNumberError}
          appendComponent={
            <FormInputCheck value={cardNumber} error={cardNumberError} />
          }
        />
        <FormInput
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          label={"Card Holder Name"}
          value={cardName}
          onChange={(value) => {
            utils.validateInput(value, 1, setCardNameError);
            setCardName(value);
          }}
          errorMsg={cardNameError}
          appendComponent={
            <FormInputCheck value={cardName} error={cardNameError} />
          }
        />
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
          }}
        >
          <FormInput
            containerStyle={{
              flex: 1,
            }}
            label={"Expiry Date"}
            value={expiryDate}
            placeholder="MM/YY"
            maxLength={5}
            onChange={(value) => {
              utils.validateInput(value, 1, setExpiryDateError);
              setExpiryDate(value);
            }}
            appendComponent={
              <FormInputCheck value={expiryDate} error={expiryDateError} />
            }
          />
          <FormInput
            containerStyle={{
              flex: 1,
              marginLeft: SIZES.radius,
            }}
            label={"CVV"}
            value={cvv}
            maxLength={3}
            onChange={(value) => {
              utils.validateInput(value, 3, setCvvError);
              setCvv(value);
            }}
            appendComponent={<FormInputCheck value={cvv} error={cvvError} />}
          />
        </View>

        {/* Remember Section */}
        <View
          style={{
            alignItems: "flex-start",
            marginTop: SIZES.padding,
          }}
        >
          <RadioButton
            label={"Remember this card details"}
            isSelected={isRemember}
            onPress={() => {
              setIsRemember(!isRemember);
            }}
          />
        </View>
      </View>
    );
  }

  function renderFooter(params) {
    return (
      <View
        style={{
          paddingTop: SIZES.radius,
          paddingBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <TextButton
          disabled={isEnabledAddCard() ? false : true}
          label={"Add Card"}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: isEnabledAddCard()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}

      {renderHeader()}

      {/* Body */}

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Card */}

        {renderCard()}

        {/* Forms */}

        {renderForms()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default AddCard;

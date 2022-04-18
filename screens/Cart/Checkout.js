import React from "react";
import { View, Text, Image } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  Header,
  IconButton,
  FormInput,
  CardItem,
  FooterTotal,
} from "../../components";
import { COLORS, SIZES, icons, dummyData, FONTS } from "../../constants";

const Checkout = ({ navigation, route }) => {
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [coupon, setCoupon] = React.useState("");

  React.useEffect(() => {
    let { selectedCard } = route.params;
    console.log("selectedCard", selectedCard);
    setSelectedCard(selectedCard);
  }, []);

  function renderHeader(params) {
    return (
      <Header
        title="CHECKOUT"
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
        rightComponent={
          <View
            style={{
              width: 40,
            }}
          />
        }
      />
    );
  }

  function renderMycards(params) {
    return (
      <View>
        {setSelectedCard &&
          dummyData.myCards.map((item) => {
            return (
              <CardItem
                key={`MyCard-${item.id}`}
                item={item}
                isSelected={
                  `${selectedCard?.key}-${selectedCard?.id}` ===
                  `MyCard-${item.id}`
                }
                onPress={() => {
                  setSelectedCard({ ...item, key: "MyCard" });
                }}
              />
            );
          })}
      </View>
    );
  }

  function renderDeliveryAddress(params) {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Delivery Status
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: SIZES.radius,
            paddingHorizontal: SIZES.radius,
            paddingVertical: SIZES.radius,
            borderWidth: 2,
            borderRadius: SIZES.radius,
            borderColor: COLORS.lightGray2,
          }}
        >
          <Image
            source={icons.location1}
            style={{
              width: 40,
              height: 40,
            }}
          />
          <Text
            style={{
              marginLeft: SIZES.radius,
              width: "85%",
            }}
          >
            3rd street Yangon, Burma
          </Text>
        </View>
      </View>
    );
  }

  function renderCoupon(params) {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}
      >
        <Text
          style={{
            ...FONTS.h3,
          }}
        >
          Add Coupon
        </Text>
        <FormInput
          inputStyle={{
            marginTop: 0,
            paddingLeft: SIZES.padding,
            paddingRight: 0,
            borderWidth: 2,
            borderColor: COLORS.lightGray2,
            backgroundColor: COLORS.white,
            overflow: "hidden",
          }}
          value={coupon}
          errorMsg={null}
          placeholder="Coupon Code"
          onChange={(value) => {
            setCoupon(value);
          }}
          appendComponent={
            <View
              style={{
                width: 60,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: COLORS.primary,
              }}
            >
              <Image
                source={icons.coupon}
                style={{
                  width: 40,
                  height: 40,
                }}
              />
            </View>
          }
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

      <KeyboardAwareScrollView
        keyboardDismissMode="on-drag"
        extraScrollHeight={-200}
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingBottom: 20,
        }}
      >
        {/* My Cards */}

        {renderMycards()}
        {/* Delivery Address */}
        {renderDeliveryAddress()}

        {/* Coupon */}
        {renderCoupon()}
      </KeyboardAwareScrollView>

      {/* Footer */}
      <FooterTotal
        sumTotal={19.44}
        shippingFee={0.0}
        total={19.44}
        onPress={() => {
          navigation.replace("Success");
        }}
      />
    </View>
  );
};

export default Checkout;

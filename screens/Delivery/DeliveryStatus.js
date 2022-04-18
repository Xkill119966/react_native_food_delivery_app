import React from "react";
import { View, Text, Image, ScrollView } from "react-native";

import {
  Header,
  LineDivider,
  TextButton,
  IconButton,
  TextIconButton,
} from "../../components";

import { FONTS, COLORS, SIZES, icons, constants } from "../../constants";

const DeliveryStatus = ({ navigation }) => {
  const [currentStep, setCurrentStep] = React.useState(2);
  function renderHeader(params) {
    return (
      <Header
        title="CHECKOUT"
        containerStyle={{
          height: 40,
          marginHorizontal: SIZES.padding,
          marginTop: 12,
        }}
      />
    );
  }

  function renderInfo(params) {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
        }}
      >
        <Text
          style={{ textAlign: "center", color: COLORS.gray, ...FONTS.body4 }}
        >
          Estimate Delivery
        </Text>

        <Text style={{ textAlign: "center", ...FONTS.h2, color: COLORS.black }}>
          21 Sept 2022 / 12:30 PM
        </Text>
      </View>
    );
  }

  function renderTrackOrder(params) {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          paddingVertical: SIZES.padding,
          borderRadius: SIZES.radius,
          borderWidth: 2,
          borderColor: COLORS.lightGray2,
          backgroundColor: COLORS.white,
        }}
      >
        {/* Track Order */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 20,
            paddingHorizontal: SIZES.padding,
          }}
        >
          <Text
            style={{
              ...FONTS.h3,
            }}
          >
            Track Order
          </Text>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body3,
            }}
          >
            NY012345
          </Text>
        </View>
        <LineDivider
          lineStyle={{
            backgroundColor: COLORS.lightGray2,
          }}
        />

        {/* Status  */}

        <View
          style={{
            marginTop: SIZES.padding,
            paddingHorizontal: SIZES.padding,
          }}
        >
          {constants.track_order_status.map((item, index) => {
            return (
              <View key={`StatusList_${index}`}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: -5,
                  }}
                >
                  <Image
                    source={icons.check_circle}
                    style={{
                      width: 40,
                      height: 40,
                      tintColor:
                        index <= currentStep
                          ? COLORS.primary
                          : COLORS.lightGray1,
                    }}
                  />

                  <View
                    style={{
                      marginLeft: SIZES.radius,
                    }}
                  >
                    <Text style={{ ...FONTS.h3 }}>{item.title}</Text>
                    <Text
                      style={{
                        color: COLORS.gray,
                        ...FONTS.body4,
                      }}
                    >
                      {item.sub_title}
                    </Text>
                  </View>
                </View>
                {index < constants.track_order_status.length - 1 && (
                  <View>
                    {index < currentStep && (
                      <View
                        style={{
                          height: 50,
                          width: 3,
                          marginLeft: 18,
                          backgroundColor: COLORS.primary,
                          zIndex: -1,
                        }}
                      ></View>
                    )}

                    {index >= currentStep && (
                      <Image
                        source={icons.dotted_line}
                        resizeMode="cover"
                        style={{
                          height: 50,
                          width: 4,
                          marginLeft: 17,
                        }}
                      ></Image>
                    )}
                  </View>
                )}
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  function renderFooter(params) {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
        }}
      >
        {currentStep < constants.track_order_status.length - 1 && (
          <View
            style={{
              flexDirection: "row",
              height: 55,
            }}
          >
            {/* Cancel Button */}
            <TextButton
              buttonContainerStyle={{
                width: "40%",
                borderRadius: SIZES.base,
                backgroundColor: COLORS.lightGray2,
              }}
              label="Cancel"
              labelStyle={{
                color: COLORS.primary,
              }}
              onPress={() => {
                navigation.navigate("FoodDetail");
              }}
            />
            <TextIconButton
              containerStyle={{
                flex: 1,
                marginLeft: SIZES.radius,
                borderRadius: SIZES.base,
                backgroundColor: COLORS.primary,
              }}
              label="Map View"
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
              }}
              icon={icons.map}
              iconPosition="LEFT"
              iconStyle={{
                width: 25,
                height: 25,
                marginRight: SIZES.base,
                tintColor: COLORS.white,
              }}
              onPress={() => {
                  navigation.navigate("Map")
              }}
            />
          </View>
        )}

        {currentStep == constants.track_order_status.length -1 && (
            <TextButton 
                buttonContainerStyle={{
                    height : 55,
                    borderRadius : SIZES.base,

                }}
                label = "DONE"
                onPress={() => {
                    navigation.navigate("FoodDetail")
                }}
            />
        )}
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: SIZES.padding,
        backgroundColor: COLORS.white,
      }}
    >
      {/* Header */}

      {renderHeader()}

      {/* Info */}
      {renderInfo()}

      {/* Track Order */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderTrackOrder()}
      </ScrollView>

      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default DeliveryStatus;

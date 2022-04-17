import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import {
  Header,
  IconButton,
  CartQuantityButton,
  IconLabel,
  TextButton,
  LineDivider,
  Rating,
  StepperInput,
} from "../../components";
import {
  FONTS,
  COLORS,
  SIZES,
  icons,
  images,
  dummyData,
} from "../../constants";
const FoodDetail = ({ navigation }) => {
  const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani);
  const [selectedSize, setselectedSize] = React.useState("");
  const [qty, setQty] = React.useState(1);

  function renderHeader(params) {
    return (
      <Header
        title="DETAILS"
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
              navigation.navigate("Home");
            }}
          />
        }
        rightComponent={<CartQuantityButton quantity={3} />}
      />
    );
  }

  function renderDetails(params) {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          marginBottom: SIZES.padding,
          paddingHorizontal: SIZES.padding,
        }}
      >
        {/* Food Card */}

        <View
          style={{
            height: 190,
            borderRadius: 15,
            backgroundColor: COLORS.lightGray2,
          }}
        >
          {/* Calories and Favourite */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: SIZES.base,
              paddingHorizontal: SIZES.radius,
            }}
          >
            {/* Calories */}

            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Image
                source={icons.calories}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{
                  color: COLORS.darkGray2,
                  ...FONTS.body4,
                }}
              >
                {foodItem?.calories} calories
              </Text>
            </View>
            {/* Favourite */}
            <Image
              source={icons.love}
              style={{
                width: 20,
                height: 20,
                tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray,
              }}
            />
          </View>

          {/* Food Image */}

          <Image
            source={foodItem?.image}
            resizeMode="contain"
            style={{
              height: 170,
              width: "100%",
            }}
          />
        </View>
        {/* Food Info */}

        <View
          style={{
            marginTop: SIZES.padding,
          }}
        >
          {/* Name and description */}
          <Text style={{ ...FONTS.h1 }}>{foodItem?.name}</Text>
          <Text
            style={{
              marginTop: SIZES.base,
              color: COLORS.darkGray,
              textAlign: "justify",
              ...FONTS.body3,
            }}
          >
            {foodItem?.description}
          </Text>

          {/* Rating and Duration nad Shipping */}
          <View style={{ flexDirection: "row", marginTop: SIZES.padding }}>
            <IconLabel
              icon={icons.star}
              containerStyle={{
                backgroundColor: COLORS.primary,
              }}
              labelStyle={{
                color: COLORS.white,
              }}
              label="4.5"
            />

            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.clock}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label="30 Mins"
            />
            <IconLabel
              containerStyle={{
                marginLeft: SIZES.radius,
                paddingHorizontal: 0,
              }}
              icon={icons.dollar}
              iconStyle={{
                tintColor: COLORS.black,
              }}
              label="Free Shipping"
            />
          </View>
          {/* Sizes */}

          <View
            style={{
              flexDirection: "row",
              marginTop: SIZES.padding,
              alignItems: "center",
            }}
          >
            <Text style={{ ...FONTS.h3 }}>Sizes</Text>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                marginLeft: SIZES.padding,
              }}
            >
              {dummyData.sizes.map((item, index) => {
                return (
                  <TextButton
                    key={`Sizes_${index}`}
                    buttonContainerStyle={{
                      width: 55,
                      height: 55,
                      margin: SIZES.base,
                      borderWidth: 1,
                      borderRadius: SIZES.radius,
                      borderColor:
                        selectedSize === item.id
                          ? COLORS.primary
                          : COLORS.gray2,
                      backgroundColor:
                        selectedSize === item.id ? COLORS.primary : null,
                    }}
                    label={item.label}
                    labelStyle={{
                      color:
                        selectedSize === item.id ? COLORS.white : COLORS.gray2,
                      ...FONTS.body2,
                    }}
                    onPress={() => {
                      setselectedSize(item.id);
                    }}
                  />
                );
              })}
            </View>
          </View>
        </View>
      </View>
    );
  }

  function renderRestaurant(params) {
    return (
      <View
        style={{
          flexDirection: "row",
          marginVertical: SIZES.padding,
          marginHorizontal: SIZES.padding,
          alignItems: "center",
        }}
      >
        <Image
          source={images.profile}
          style={{
            width: 50,
            height: 50,
            borderRadius: SIZES.radius,
          }}
        />

        {/* Info */}

        <View
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>ByThuRein</Text>
          <Text style={{ ...FONTS.body4, color: COLORS.gray }}>
            1.2 KM away from you
          </Text>
        </View>

        {/* Ratings */}

        <Rating
          rating={4}
          iconStyle={{
            marginLeft: 3,
          }}
        />
      </View>
    );
  }

  function renderFooter(params) {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 120,
          alignItems: "center",
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.radius,
        }}
      >
        {/* Stepper Input */}
        <StepperInput
          value={qty}
          onAdd={() => {
            setQty(qty + 1);
          }}
          onMinus={() => {
            if (qty > 1) {
              setQty(qty - 1);
            }
          }}
        />
        {/* Text Button */}
        <TextButton 
        buttonContainerStyle={ {
          flex : 1,
          flexDirection : 'row',
          height : 60,
          marginLeft : SIZES.radius,
          paddingHorizontal : SIZES.radius,
          borderRadius : SIZES.radius,
          backgroundColor : COLORS.primary
        }}
          label="Buy Now"
          label2 = "$15.99"
          label2Style={{
            
          }}
          onPress = {() => {
            navigation.navigate("MyCart")
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
      <ScrollView>
        {renderDetails()}
        <LineDivider />

        {renderRestaurant()}
      </ScrollView>

      {/* Footer */}
      <LineDivider />

      {renderFooter()}
    </View>
  );
};

export default FoodDetail;

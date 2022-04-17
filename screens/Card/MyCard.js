import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Header, IconButton, CardItem, TextButton } from "../../components";
import { SIZES, icons, COLORS, dummyData, FONTS } from "../../constants";

const MyCard = ({ navigation }) => {
  const [selectedCard, setselectedCard] = React.useState(null);

  function renderMyCard(params) {
    return (
      <View>
        {dummyData.myCards.map((item, index) => {
          return (
            <CardItem
              key={`MyCard${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ===
                `MyCard-${item.id}`
              }
              onPress={() => {
                setselectedCard({ ...item, key: "MyCard" });
              }}
            />
          );
        })}
      </View>
    );
  }
  function renderHeader(params) {
    return (
      <Header
        title="MY CARD"
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

  function renderAddNewCards(params) {
    return (
      <View style={{ marginTop: SIZES.padding }}>
        <Text style={{ ...FONTS.h3 }}>Add New Card</Text>
        {dummyData.allCards.map((item, index) => {
          return (
            <CardItem
              key={`NewCard${item.id}`}
              item={item}
              isSelected={
                `${selectedCard?.key}-${selectedCard?.id}` ===
                `NewCard-${item.id}`
              }
              onPress={() => {
                setselectedCard({ ...item, key: "NewCard" });
              }}
            />
          );
        })}
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
          disabled={selectedCard === null}
          buttonContainerStyle={{
            height: 60,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label={selectedCard?.key === "NewCard" ? "Add" : "Place Your Order"}
          onPress={() => {
            if (selectedCard?.key === "NewCard") {
              navigation.navigate("AddCard", {
                selectedCard: selectedCard,
              });
            } else {
              navigation.navigate("Checkout", {
                selectedCard: selectedCard,
              });
            }
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

      {/* Card  */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}
      >
        {/* MyCard */}
        {renderMyCard()}
        {/* NewCard */}
        {renderAddNewCards()}
      </ScrollView>
      {/* Footer */}
      {renderFooter()}
    </View>
  );
};

export default MyCard;

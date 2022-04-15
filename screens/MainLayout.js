import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  FlatList,
} from "react-native";
import Animated from "react-native-reanimated";

import { connect } from "react-redux";
import { setSelectedTab } from "../stores/tab/tabActions";

import { Home, Search, CartTab, Favourite, Notification } from "../screens";

import { COLORS, constants, SIZES, icons, dummyData } from "../constants";
import { Header, Footer } from "../components";
const MainLayout = ({
  drawerAnimationStyle,
  selectedTab,
  setSelectedTab,
  navigation,
}) => {
  console.log("selectedTab", selectedTab);
  React.useEffect(() => {
    setSelectedTab(constants.screens.home);
  }, []);
  const flatListRef = React.useRef();

  return (
    <Animated.View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        ...drawerAnimationStyle,
      }}
    >
      <Header
        containerStyle={{
          height: 50,
          paddingHorizontal: SIZES.padding,

          alignItems: "center",
        }}
        title={selectedTab}
        leftComponent={
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: COLORS.gray2,
              borderRadius: SIZES.radius,
            }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image source={icons.menu} />
          </TouchableOpacity>
        }
        rightComponent={
          <TouchableOpacity
            style={{
              borderRadius: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Image
              source={dummyData?.myProfile?.profile_image}
              style={{
                width: 40,
                height: 40,
                borderRadius: SIZES.radius,
              }}
            />
          </TouchableOpacity>
        }
      />
      {/* Content */}
      <View
        style={{
          flex: 1,
        }}
      >
        <FlatList
          ref={flatListRef}
          horizontal
          scrollEnabled={false}
          pagingEnabled
          snapToAlignment="center"
          snapToInterval={SIZES.width}
          showsHorizontalScrollIndicator={false}
          data={constants.bottom_tabs}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  height: SIZES.height,
                  width: SIZES.width,
                }}
              >
                {item.label === constants.screens.home && <Home />}
                {item.label === constants.screens.search && <Search />}
                {item.label === constants.screens.cart && <CartTab />}
                {item.label === constants.screens.favourite && <Favourite />}
                {item.label === constants.screens.notification && (
                  <Notification />
                )}
              </View>
            );
          }}
        />
      </View>
      <Footer
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        flatListRef={flatListRef}
      />
    </Animated.View>
  );
};

function mapStateToProps(state) {
  return {
    selectedTab: state.tabReducer.selectedTab,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSelectedTab: (seletedTab) => {
      return dispatch(setSelectedTab(seletedTab));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);

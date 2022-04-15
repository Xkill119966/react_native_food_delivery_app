import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { COLORS, SIZES, icons, FONTS, dummyData } from "../../constants";
import {
  HorizontalFoodCard,
  Section,
  VerticalFoodCard,
} from "../../components";
import FilterModal from './FilterModal';
const Home = () => {
  const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
  const [selectedMenuType, setSelectedMenuType] = React.useState(1);
  const [menuList, setMenuList] = React.useState([]);
  const [recommend, setRecommend] = React.useState([]);
  const [popular, setPopular] = React.useState([]);
  const [showFilterModal, setShowFilterModal] = React.useState(false);

  React.useEffect(() => {
    handleChangeCategory(selectedCategoryId, selectedMenuType);
  }, []);

  function handleChangeCategory(selectedCategoryId, selectedMenuType) {
    //Retrieve the popular  menu

    let selectedPopular = dummyData.menu.find((a) => a.name === "Popular");

    //Retrieve the recommend menu
    let selectRecommand = dummyData.menu.find((a) => a.name === "Recommended");
    // Find the menu based ont the menutype
    let selectedMenu = dummyData.menu.find((a) => a.id === selectedMenuType);
    //set recommend
    setRecommend(
      selectRecommand?.list.filter((a) =>
        a.categories.includes(selectedCategoryId)
      )
    );
    setPopular(
      selectedPopular?.list.filter((a) =>
        a.categories.includes(selectedCategoryId)
      )
    );
    setMenuList(
      selectedMenu?.list.filter((a) =>
        a.categories.includes(selectedCategoryId)
      )
    );
  }

  function renderSearch() {
    return (
      <View
        style={{
          flexDirection: "row",
          height: 40,
          alignItems: "center",
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
          paddingHorizontal: SIZES.radius,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray1,
        }}
      >
        {/* icon */}

        <Image
          source={icons.search}
          style={{
            height: 20,
            width: 20,
            tintColor: COLORS.black,
          }}
        />

        {/* text Input */}

        <TextInput
          style={{
            flex: 1,
            marginLeft: SIZES.radius,
            ...FONTS.body4,
          }}
          placeholder="search food..."
        />

        {/* filter button */}

        <TouchableOpacity
          onPress={() => {
            setShowFilterModal(true)
          }}
        >
          <Image
            source={icons.filter}
            style={{
              height: 20,
              width: 20,
              tintColor: COLORS.black,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderMenuType() {
    return (
      <FlatList
        horizontal
        data={dummyData.menu}
        keyExtractor={(item) => `${item.id}`}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: 30,
          marginBottom: 20,
        }}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{
                marginLeft: SIZES.padding,
                marginRight:
                  index === dummyData.menu.length - 1 ? SIZES.padding : 0,
              }}
              onPress={() => {
                setSelectedMenuType(item.id);
                handleChangeCategory(selectedCategoryId, item.id);
              }}
            >
              <Text
                style={{
                  color:
                    selectedMenuType === item.id
                      ? COLORS.primary
                      : COLORS.black,
                  ...FONTS.h3,
                }}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  }

  function renderRecommendedSection(params) {
    return (
      <Section
        title="Recommanded"
        onPress={() => {
          console.log("Recommanded");
        }}
      >
        <FlatList
          data={recommend}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 180,
                  width: SIZES.width * 0.85,
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight:
                    index === recommend.length - 1 ? SIZES.padding : 0,
                  paddingRight: SIZES.radius,
                  alignItems: "center",
                }}
                imageStyle={{
                  marginTop: 35,
                  height: 150,
                  width: 150,
                }}
                item={item}
                onPress={() => {
                  console.log("Horizontal Food Card");
                }}
              />
            );
          }}
        />
      </Section>
    );
  }

  function renderPopularSection(params) {
    return (
      <Section
        title={"Popular Near You"}
        onPress={() => {
          console.log("Hello Popular");
        }}
      >
        <FlatList
          data={popular}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <VerticalFoodCard
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 18,
                  marginRight: index === popular.length - 1 ? SIZES.padding : 0,
                }}
                item={item}
                onPress={() => {
                  console.log("Vertical Food Card");
                }}
              />
            );
          }}
        />
      </Section>
    );
  }

  function renderCategories(params) {
    return (
      <FlatList
        data={dummyData.categories}
        keyExtractor={(item) => `${item.id}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 55,
              marginTop: SIZES.padding,
              marginLeft: index === 0 ? SIZES.padding : SIZES.radius,
              marginRight:
                index === dummyData.categories.length - 1 ? SIZES.padding : 0,
              paddingHorizontal: 8,
              borderRadius: SIZES.radius,
              backgroundColor:
                selectedCategoryId === item.id
                  ? COLORS.primary
                  : COLORS.lightGray2,
            }}
            onPress={() => {
              setSelectedCategoryId(item.id);
              handleChangeCategory(item.id, selectedMenuType);
            }}
          >
            <Image
              source={item.icon}
              style={{
                marginTop: 5,
                height: 50,
                width: 50,
              }}
            />

            <Text
              style={{
                alignSelf: "center",
                marginRight: SIZES.base,
                color:
                  selectedCategoryId === item.id
                    ? COLORS.white
                    : COLORS.darkGray,
                ...FONTS.h3,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    );
  }

  function renderDelieverTo(params) {
    return (
      <View
        style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}
      >
        <Text
          style={{
            color: COLORS.primary,
            ...FONTS.body3,
          }}
        >
          DELIEVER TO
        </Text>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.h3 }}>{dummyData?.myProfile.address}</Text>

          <Image
            source={icons.down_arrow}
            style={{
              marginLeft: SIZES.base,
              height: 20,
              width: 20,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Search */}
      {renderSearch()}
      {showFilterModal && (
        <FilterModal
          isVisible={showFilterModal}
          onClose={() => {
            setShowFilterModal(false);
          }}
        />
      )}

      {/* List */}
      <View
        style={{
          marginTop: 20,
        }}
      >
        <FlatList
          data={menuList}
          keyExtractor={(item) => `${item.id}`}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={
            <View>
              {renderDelieverTo()}
              {renderCategories()}
              {renderPopularSection()}
              {renderRecommendedSection()}
              {renderMenuType()}
            </View>
          }
          renderItem={({ item, index }) => {
            return (
              <HorizontalFoodCard
                containerStyle={{
                  height: 130,
                  alignItems: "center",
                  marginHorizontal: SIZES.padding,
                  marginBottom: SIZES.radius,
                }}
                imageStyle={{
                  marginTop: 20,
                  height: 110,
                  width: 110,
                }}
                item={item}
                onPress={() => {
                  console.log("Hio");
                }}
              />
            );
          }}
          ListFooterComponent={<View style={{ height: 500 }} />}
        />
      </View>
    </View>
  );
};

export default Home;

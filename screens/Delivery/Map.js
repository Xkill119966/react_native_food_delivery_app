import React from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import LinearGradient from "react-native-linear-gradient";
import MapViewDirections from "react-native-maps-directions";
import { IconButton } from "../../components";
import {
  COLORS,
  FONTS,
  icons,
  SIZES,
  dummyData,
  constants,
} from "../../constants";

import { utils } from "../../utils";

const Map = ({ navigation }) => {
  const mapView = React.useRef();
  const [region, setRegion] = React.useState(null);
  const [toLoc, setToLoc] = React.useState(null);
  const [fromLoc, setFromLoc] = React.useState(null);

  const [angle, setAngle] = React.useState(0);
  const [isReady, setIsReady] = React.useState(false);
  const [duration, setDuration] = React.useState(10);

  React.useEffect(() => {
    let initialRegion = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    };

    let destination = {
      latitude: 1.5496614931250685,
      longitude: 110.36381866919922,
    };
    setRegion(initialRegion);

    setToLoc(destination);
    setFromLoc(dummyData.fromLocs[1]);
  }, []);

  function renderMap(params) {
    return (
      <MapView
        ref={mapView}
        style={{
          flex: 1,
        }}
        provider={PROVIDER_GOOGLE}
        initialRegion={region}
      >
        {fromLoc && (
          <Marker
            key={"FromLocKey"}
            coordinate={fromLoc}
            tracksViewChanges={false}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          />
        )}

        {toLoc && (
          <Marker
            key={"ToLocKey"}
            coordinate={toLoc}
            tracksViewChanges={false}
            rotation={angle}
            anchor={{ x: 0.5, y: 0.5 }}
          ></Marker>
        )}

        {/* <MapViewDirections
          origin={fromLoc}
          destination={toLoc}
          apikey={constants.GOOGLE_MAP_API_KEY}
          strokeWidth={5}
          strokeColor={COLORS.primary}
          optimizeWaypoints={true}
          onReady={(res) => {
            setDuration(Math.ceil(res.duration));
            if (!isReady) {
              mapView.current.fitToCoordinates(res.coordinates, {
                edgePadding: {
                  right: SIZES.width * 0.1,
                  bottom: 400,
                  left: SIZES.width * 0.1,
                  top: SIZES.height * 0.1,
                },
              });

              if (res.coordinates.length >= 2) {
                let angle = utils.calculateAngle(res.coordinates);
                setAngle(angle);
              }
              setIsReady(true);
            }
          }}
        /> */}
      </MapView>
    );
  }

  function renderHeaderButtons(params) {
    return (
      <>
        <IconButton
          icon={icons.back}
          containerStyle={{
            position: "absolute",
            top: SIZES.padding * 2,
            left: SIZES.padding,
            ...styles.buttonStyle,
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
        <View
          style={{
            position: "absolute",
            top: SIZES.padding * 2,
            right: SIZES.padding,
          }}
        >
          <IconButton
            icon={icons.globe}
            containerStyle={{
              ...styles.buttonStyle,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
            onPress={() => {}}
          />

          <IconButton
            icon={icons.focus}
            containerStyle={{
              marginTop: SIZES.radius,
              ...styles.buttonStyle,
            }}
            iconStyle={{
              width: 20,
              height: 20,
              tintColor: COLORS.gray,
            }}
            onPress={() => {}}
          />
        </View>
      </>
    );
  }

  function renderInfo(params) {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        {/* Linear Gradient */}
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={[COLORS.transparent, COLORS.lightGray2]}
          style={{
            position: "absolute",
            top: -20,
            left: 0,
            right: 0,
            height: Platform.OS === "ios" ? 200 : 50,
          }}
        />

        {/* Info Container */}

        <View
          style={{
            padding: SIZES.padding,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            backgroundColor: COLORS.white,
          }}
        >
          {/* Delivery Time */}

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={icons.clock}
              style={{
                width: 40,
                height: 40,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                marginLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your Delivery Time
              </Text>
              <Text style={{ ...FONTS.body4 }}>{duration} minutes</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: SIZES.padding,
            }}
          >
            <Image
              source={icons.focus}
              style={{
                width: 40,
                height: 40,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                marginLeft: SIZES.padding,
              }}
            >
              <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>
                Your Address
              </Text>
              <Text style={{ ...FONTS.body4 }}>88 JUKKKK JJFFJF</Text>
            </View>
          </View>

          {/* Delivery Man Details */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              height: 70,
              alignItems: "center",
              marginTop: SIZES.padding,
              borderRadius: SIZES.radius,
              paddingHorizontal: SIZES.radius,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.primary,
            }}
          >
            <Image
              source={icons.profile}
              style={{
                width: 40,
                height: 40,
                borderRadius: 5,
                tintColor: COLORS.black,
              }}
            />
            <View
              style={{
                flex: 1,
                marginLeft: SIZES.radius,
              }}
            >
              <Text style={{ color: COLORS.white, ...FONTS.h3 }}>
                By Thurein
              </Text>
              <Text style={{ color: COLORS.white, ...FONTS.body4 }}>
                Delivery Man
              </Text>
            </View>
            <View
              style={{
                height: 40,
                width: 40,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.white,
                backgroundColor: COLORS.transparentWhite1,
              }}
            >
              <Image
                source={icons.call}
                style={{
                  width: 30,
                  height: 30,
                }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {/* Map */}
      {renderMap()}

      {/* Header Button */}

      {renderHeaderButtons()}
      {/* Footer Info */}

      {renderInfo()}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    width: 40,
    height: 40,
    borderRadius: SIZES.radius,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: COLORS.gray2,
    backgroundColor: COLORS.white,
  },
});

export default Map;

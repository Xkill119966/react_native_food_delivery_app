import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import  {useSharedValue , useAnimatedStyle , withTiming} from 'react-native-reanimated';

import TabButton from './TabButton';
import {  COLORS ,constants , icons  , SIZES} from '../constants';
const Footer = ({selectedTab , setSelectedTab , flatListRef}) => {

    React.useEffect(() => {
        if (selectedTab === constants.screens.home) {
            flatListRef?.current?.scrollToIndex({
                index : 0,
                animated : false
            })
            homeTabFlex.value = withTiming(4 , {
                duration : 500
            })
            homeTabColor.value = withTiming(COLORS.primary, {
                duration : 500
            })
        }else {
            homeTabFlex.value = withTiming(1 , {
                duration : 500
            })
            homeTabColor.value = withTiming(COLORS.white, {
                duration : 500
            })
        }

        if (selectedTab === constants.screens.search) {
            flatListRef?.current?.scrollToIndex({
                index : 1,
                animated : false
            })
            searchTabFlex.value = withTiming(4 , {
                duration : 500
            })
            searchTabColor.value = withTiming(COLORS.primary, {
                duration : 500
            })
        }else {
            searchTabFlex.value = withTiming(1 , {
                duration : 500
            })
            searchTabColor.value = withTiming(COLORS.white, {
                duration : 500
            })
        }

        if (selectedTab === constants.screens.cart) {
            flatListRef?.current?.scrollToIndex({
                index : 2,
                animated : false
            })
            cartTabFlex.value = withTiming(4 , {
                duration : 500
            })
            cartTabColor.value = withTiming(COLORS.primary, {
                duration : 500
            })
        }else {
            cartTabFlex.value = withTiming(1 , {
                duration : 500
            })
            cartTabColor.value = withTiming(COLORS.white, {
                duration : 500
            })
        }

        if (selectedTab === constants.screens.favourite) {
            flatListRef?.current?.scrollToIndex({
                index : 3,
                animated : false
            })
            favouriteTabFlex.value = withTiming(4 , {
                duration : 500
            })
            favouriteTabColor.value = withTiming(COLORS.primary, {
                duration : 500
            })
        }else {
            favouriteTabFlex.value = withTiming(1 , {
                duration : 500
            })
            favouriteTabColor.value = withTiming(COLORS.white, {
                duration : 500
            })
        }


        if (selectedTab === constants.screens.notification) {
            flatListRef?.current?.scrollToIndex({
                index : 4,
                animated : false
            })
            notificationTabFlex.value = withTiming(4 , {
                duration : 500
            })
            notificationTabColor.value = withTiming(COLORS.primary, {
                duration : 500
            })
        }else {
            notificationTabFlex.value = withTiming(1 , {
                duration : 500
            })
            notificationTabColor.value = withTiming(COLORS.white, {
                duration : 500
            })
        }
    }, [selectedTab])

    const homeTabFlex = useSharedValue(1)
    const homeTabColor = useSharedValue(COLORS.white)
    const searchTabFlex = useSharedValue(1)
    const searchTabColor = useSharedValue(COLORS.white)

    const cartTabFlex = useSharedValue(1)
    const cartTabColor = useSharedValue(COLORS.white)

    const favouriteTabFlex = useSharedValue(1)
    const favouriteTabColor = useSharedValue(COLORS.white)

    const notificationTabFlex = useSharedValue(1)
    const notificationTabColor = useSharedValue(COLORS.white)

    const homeFlexStyle = useAnimatedStyle(() => {
        return {
            flex : homeTabFlex.value
        }
    })
    const homeColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor : homeTabColor.value
        }
    })


    const searchFlexStyle = useAnimatedStyle(() => {
        return {
            flex : searchTabFlex.value
        }
    })
    const searchColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor : searchTabColor.value
        }
    })

    const cartFlexStyle = useAnimatedStyle(() => {
        return {
            flex : cartTabFlex.value
        }
    })
    const cartColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor : cartTabColor.value
        }
    })

    const favouriteFlexStyle = useAnimatedStyle(() => {
        return {
            flex : favouriteTabFlex.value
        }
    })
    const favouriteColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor : favouriteTabColor.value
        }
    })


    const notificationFlexStyle = useAnimatedStyle(() => {
        return {
            flex : notificationTabFlex.value
        }
    })
    const notificationColorStyle = useAnimatedStyle(() => {
        return {
            backgroundColor : notificationTabColor.value
        }
    })

    return (
        <View style = {{
            height : 100,
            justifyContent : 'flex-end'
        }}>
            <LinearGradient
                start={{x : 0, y : 0}}
                end = {{x : 0, y : 4}}
                colors={[
                    COLORS.transparent,
                    COLORS.lightGray2
                ]}
                style = {{
                    position : 'absolute',
                    top : -20,
                    left : 0,
                    right: 0,
                    height : 100,
                    borderTopLeftRadius : 15,
                    borderTopRightRadius : 15
                }}
            />
            {/* Tabs */}
            <View
                style = {{
                    flex : 1, 
                    flexDirection : 'row',
                    paddingHorizontal : SIZES.radius,
                    paddingBottom : 10,
                    borderTopLeftRadius : 20,
                    borderTopRightRadius : 20,
                    backgroundColor : COLORS.white
                }}
            >


                <TabButton 
                
                    label={constants.screens.home}
                    icon = {icons.home}
                    isFoucused = {selectedTab === constants.screens.home}
                    onPress = {() => {
                        setSelectedTab(constants.screens.home)
                    }}
                    outerContainerStyle = {homeFlexStyle}
                    innerContainerStyle = {homeColorStyle}
                />

            <TabButton 
                
                label={constants.screens.search}
                icon = {icons.search}
                isFoucused = {selectedTab === constants.screens.search}
                onPress = {() => {
                    setSelectedTab(constants.screens.search)
                }}
                outerContainerStyle = {searchFlexStyle}
                innerContainerStyle = {searchColorStyle}
            />

        <TabButton 
                
                label={constants.screens.cart}
                icon = {icons.cart}
                isFoucused = {selectedTab === constants.screens.cart}
                onPress = {() => {
                    setSelectedTab(constants.screens.cart)
                }}
                
                outerContainerStyle = {cartFlexStyle}
                innerContainerStyle = {cartColorStyle}
            />

        <TabButton 
                
                label={constants.screens.favourite}
                icon = {icons.favourite}
                isFoucused = {selectedTab === constants.screens.favourite }
                onPress = {() => {
                    setSelectedTab(constants.screens.favourite)
                }}
                outerContainerStyle = {favouriteFlexStyle}
                innerContainerStyle = {favouriteColorStyle}
            />

        <TabButton 
                
                label={constants.screens.notification}
                icon = {icons.notification}
                isFoucused = {selectedTab === constants.screens.notification }
                onPress = {() => {
                    setSelectedTab(constants.screens.notification)
                }}
                outerContainerStyle = {notificationFlexStyle}
                innerContainerStyle = {notificationColorStyle}
            />




            </View>
        </View>
    )
}

export default Footer
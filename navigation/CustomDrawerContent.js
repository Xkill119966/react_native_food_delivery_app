import React from 'react';
import { View  , TouchableOpacity , Image, Text} from 'react-native';

import { DrawerContentScrollView} from '@react-navigation/drawer';
import {SIZES, icons, COLORS ,dummyData, FONTS, constants} from '../constants';
import CustomDrawerItem from './CustomerDrawerItem';
const  CustomDrawerContent = ({navigation , selectedTab , setSelectedTab}) => {
    return (
        <DrawerContentScrollView
            scrollEnabled = {false}
            contentContainerStyle = {{flex : 1 , }}
        >
            <View
                style = {{
                    flex : 1,
                    paddingHorizontal : SIZES.radius
                }}
            >

                {/* Close */}


                <View style = {{
                    alignItems : 'flex-start',
                    justifyContent : 'center'
                }}>
                    <TouchableOpacity
                        style= {{
                            alignItems : 'center',
                            justifyContent : 'center'
                        
                        }}
                        onPress = {() => navigation.closeDrawer()}
                    >

                        <Image
                            source={icons.cross}
                            style = {{
                                width : 35,
                                height : 35,
                                 tintColor : COLORS.white
                            }}
                        />
                    </TouchableOpacity>
                </View>

   
                    <TouchableOpacity
                        style= {{
                           flexDirection : "row",
                           marginTop : SIZES.radius,
                           alignItems : 'center'
                           
                        }}
                    >

                        <Image
                            source={dummyData.myProfile?.profile_image}
                            style = {{
                                width : 50,
                                height : 50,
                                borderRadius : SIZES.radius
                            }}
                        />
                        <View
                            style = {{
                                marginLeft : SIZES.radius
                            }}
                        >
                            <Text style = {{
                                color : COLORS.white,
                                ...FONTS.h3
                            }}> {dummyData.myProfile?.name}</Text>

                            <Text style = {{
                                color : COLORS.white,
                                ...FONTS.h3
                            }}> View Your Profile</Text>
                        </View>
                    </TouchableOpacity>

                    {/* DRAWER Items */}

                    <View  style = {{
                        flex : 1,
                        marginTop : SIZES.padding
                    }}>

                        <CustomDrawerItem 
                            label={constants.screens.home}
                            icon = {icons.home}
                            isFocused = {selectedTab === constants.screens.home}
                           
                            onPress = {() => {
                                setSelectedTab(constants.screens.home)
                                navigation.navigate('Food')
                            }}
                        
                        />

                        <CustomDrawerItem 
                            label={constants.screens.my_wallet}
                            icon = {icons.wallet}
                            isFocused = {selectedTab === constants.screens.my_wallet}
                            onPress = {() => {
                                setSelectedTab(constants.screens.my_wallet)
                                navigation.navigate('MainLayout')
                            }}
                        
                        />

                        <CustomDrawerItem 
                            label={constants.screens.notification}
                            icon = {icons.notification}
                            isFocused = {selectedTab === constants.screens.notification}
                            onPress = {() => {
                                setSelectedTab(constants.screens.notification)
                                navigation.navigate('MainLayout')
                            }}
                        
                        />

                        <CustomDrawerItem 
                            label={constants.screens.favourite}
                            icon = {icons.favourite}
                            isFocused = {selectedTab === constants.screens.favourite}
                            onPress = {() => {
                                setSelectedTab(constants.screens.favourite)
                                navigation.navigate('MainLayout')
                            }}
                        
                        />
                        {/* Line Divider */}
                        <View style = {{
                            height : 1, 
                            marginVertical : SIZES.radius,
                            marginLeft : SIZES.radius,
                            backgroundColor : COLORS.lightGray1
                        }}></View>


                        < CustomDrawerItem 
                            label={"Track Your Order"}
                            icon = {icons.location}
                            
                        
                        />

                        < CustomDrawerItem 
                            label={"Coupons"}
                            icon = {icons.coupon}
                        
                        />

                    < CustomDrawerItem 
                            label={"Setting"}
                            icon = {icons.setting}
                        
                        />

                        < CustomDrawerItem 
                            label={"Invite a Fri"}
                            icon = {icons.profile}
                        
                        />
                        < CustomDrawerItem 
                            label={"Help Center"}
                            icon = {icons.help}
                        
                        />
                        
                    </View>

                    <View
                        style = {{
                            marginBottom : SIZES.padding
                        }}
                    >
                        <CustomDrawerItem 
                        label={"Logout"}
                        icon = {icons.logout}
                        
                        />
                    </View>
                </View>


        </DrawerContentScrollView>
    )
}

export default CustomDrawerContent
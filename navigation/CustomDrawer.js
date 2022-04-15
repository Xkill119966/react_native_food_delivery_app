import React from 'react';

import { View } from 'react-native'; 

import {createDrawerNavigator ,} from '@react-navigation/drawer';

import {MainLayout} from '../screens';
import {COLORS} from '../constants';
import CustomDrawerContent from './CustomDrawerContent';
import Animated from 'react-native-reanimated';
import { connect } from 'react-redux'; 

import {setSelectedTab } from '../stores/tab/tabActions';
const Drawer = createDrawerNavigator()
const CustomDrawer = ({selectedTab , setSelectedTab }) => {
    console.log("setSelectedTab", setSelectedTab);
   const [progress , setProgress] = React.useState(new Animated.Value(0))
   const scale = Animated.interpolateNode(progress, {
       inputRange : [0, 1],
       outputRange : [1, 0.8]
   })

   const borderRadius  = Animated.interpolateNode(progress, {
    inputRange : [0, 1],
    outputRange : [1, 26]
})

const animatedStyle = {
    borderRadius, transform : [{scale}]
}
   return (
    <View
        style = {{
            flex : 1 ,
            backgroundColor : COLORS.blue
        }}
    >

        <Drawer.Navigator
            drawerType='slide'
            overlayColor='transparent'
            drawerStyle = {{
                flex : 1 ,
                width : '65%',
                paddingRight : 20,
                backgroundColor : 'transparent'
            }}

            sceneContainerStyle = {{
                backgroundColor: 'transparent',
            }}

            initialRouteName = "MainLayout"

            drawerContent={
                props => {

                    setTimeout(() => {
                        setProgress(props.progress)
                    }, 0)
                    return (
                        <CustomDrawerContent 
                        navigation = {props.navigation}
                        selectedTab = {selectedTab}
                        setSelectedTab = {setSelectedTab}
                    />

                    )
                }
            }
        >
            <Drawer.Screen name='MainLayout'>
                {props => <MainLayout {...props}
                    drawerAnimationStyle = {animatedStyle}
                />}
            </Drawer.Screen >    
        </Drawer.Navigator>

    </View>
   )
}


function mapStateToProps(state) {
    return {
        selectedTab : state.tabReducer.selectedTab
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setSelectedTab : (seletedTab) => {
            return dispatch(setSelectedTab(seletedTab))
        }
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(CustomDrawer)
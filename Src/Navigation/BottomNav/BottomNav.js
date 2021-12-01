import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Keyboard } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { wp } from '../../Helpers/Responsiveness';
import HomeStack from '../Stack/HomeStack';

import { iconPath } from '../../Constants/icon';
import { Colors } from '../../Constants/Colors';
import Fonticon from '../../Constants/FontIcon';
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';

// import HotDog from '../Stack/HotDog';
const Tab = createBottomTabNavigator();

function Screen1() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> </Text>
    </View>
  );
}
function Screen2() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> </Text>
    </View>
  );
}
function Screen3() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}></Text>
    </View>
  );
}
function Screen4() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}> </Text>
    </View>
  );
}

export default function BottomNav() {
  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   showIcon: true,
      //   // showLabel: false,
      //   keyboardHidesTabBar: true,
      //   height:50,
      //   // style: { display: 'none'  }
      //   // style: { display: 'flex'  }
      //   labelStyle: {
      //     color: '#2972ff'
      //    },
      //    style: {
      //     height: 300
      //   },
      //   tabStyle: {
      //   },

      // }}
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          // height: 55, 
          // elevation: 0,
          shadowOpacity: 0,
          // borderTopColor: "transparent",
          justifyContent: "center", alignItems: "center",
          // backgroundColor: Colors.darkGreen,
        },
      }}
      initialRouteName="HomeStack">
      <Tab.Screen name="HomeStack" component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? Colors.orange : "transparent", padding: 3, borderRadius: 8, alignItems: "center" }}>
              <Image source={iconPath.HomeIcon} style={{ width: wp(7), height: wp(7), resizeMode: "contain" }} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <ResponsiveText size="h11" fontFamily={fonts.Poppins_Medium} color={focused ? Colors.orange : Colors.black}>{"Home"}</ResponsiveText>
          )
        }}
      // listeners={({ navigation }) => ({
      //   tabPress: () => { navigation.navigate('HomeStack', { screen: 'MainScreen' }) }
      // })}
      />
      <Tab.Screen name="BinStack" component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? Colors.orange : "transparent", padding: 3, borderRadius: 8, alignItems: "center", paddingLeft: 4 }}>
              <Image source={iconPath.OddsIcon} style={{ width: wp(6.5), height: wp(6.5), resizeMode: "contain" }} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <ResponsiveText size="h11" fontFamily={fonts.Poppins_Medium} color={Colors.black}>{"Odds"}</ResponsiveText>
          )
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? Colors.orange : "transparent", padding: 4, borderRadius: 8, alignItems: "center" }}>
              <Image source={iconPath.Picks} style={{ width: wp(6.5), height: wp(6.5), resizeMode: "contain" }} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <ResponsiveText size="h11" fontFamily={fonts.Poppins_Medium} color={Colors.White}>{"Picks"}</ResponsiveText>
          )
        }}
      // listeners={({ navigation }) => ({
      //   tabPress: () => {
      //     navigation.navigate('HomeStack', { screen: 'HomeScreen' });
      //   },
      // })}
      />

      <Tab.Screen
        name="Profile"
        component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? Colors.orange : "transparent", padding: 4, borderRadius: 8, alignItems: "center" }}>
              <Image source={iconPath.Events} style={{ width: wp(6.5), height: wp(6.5), resizeMode: "contain" }} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <ResponsiveText size="h11" fontFamily={fonts.Poppins_Medium} color={focused ? Colors.black : Colors.black}>{"Events"}</ResponsiveText>
          )
        }}
      />
      <Tab.Screen
        name="Profilfe"
        component={Screen4}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ backgroundColor: focused ? Colors.orange : "transparent", padding: 4, borderRadius: 8, alignItems: "center" }}>
              <Image source={iconPath.Feed} style={{ width: wp(6.9), height: wp(6.9), resizeMode: "contain" }} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <ResponsiveText size="h11" fontFamily={fonts.Poppins_Medium} color={focused ? Colors.black : Colors.black}>{"Feed"}</ResponsiveText>
          )
        }}
      />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

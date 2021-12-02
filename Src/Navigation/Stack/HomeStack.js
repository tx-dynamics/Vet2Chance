import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import HomeScreen from '../../Screens/Home/HomeScreen'
import FeatureDetails from '../../Screens/Home/FeatureDetails'
import HotMatches from '../../Screens/Home/HotMatches'


const Stack = createNativeStackNavigator();

function HomeStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="FeatureDetails" component={FeatureDetails} />
                <Stack.Screen name="HotMatches" component={HotMatches} />
            </Stack.Navigator>

        </>
    );
}
export default HomeStack;
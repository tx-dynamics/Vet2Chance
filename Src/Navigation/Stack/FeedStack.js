import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import FeedScreen from '../../Screens/Feed/FeedScreen'
import FeedDetails from '../../Screens/Feed/FeedDetails'


const Stack = createNativeStackNavigator();

function FeedStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="FeedScreen" component={FeedScreen} />
                <Stack.Screen name="FeedDetails" component={FeedDetails} />
            </Stack.Navigator>

        </>
    );
}
export default FeedStack;
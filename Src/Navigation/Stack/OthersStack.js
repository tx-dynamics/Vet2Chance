import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import PicksofTheDayDetails from '../../Screens/Home/PicksofTheDayDetails'


const Stack = createNativeStackNavigator();

function OthersStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="PicksofTheDayDetails" component={PicksofTheDayDetails} />
            </Stack.Navigator>

        </>
    );
}
export default OthersStack;
import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import PicsScreen from '../../Screens/Picks/PicsScreen'


const Stack = createNativeStackNavigator();

function PicksStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="PicsScreen" component={PicsScreen} />
            </Stack.Navigator>

        </>
    );
}
export default PicksStack;
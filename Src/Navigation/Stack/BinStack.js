import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import AddBin from '../../Screens/Bin/AddBin'


const Stack = createNativeStackNavigator();

function BinStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AddBin" component={AddBin} />
            </Stack.Navigator>

        </>
    );
}
export default BinStack;
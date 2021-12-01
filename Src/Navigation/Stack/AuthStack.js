import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import Login from '../../Screens/Auth/Login'
import SignUp from '../../Screens/Auth/Signup'
import CompleteProfile from '../../Screens/Auth/CompleteProfile'


const Stack = createNativeStackNavigator();

function AuthStack(props) {

    return (
        <>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="CompleteProfile" component={CompleteProfile} />
                </Stack.Navigator>

        </>
    );
}
export default AuthStack;
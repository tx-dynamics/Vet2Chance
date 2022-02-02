import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Podcasts from '../../Screens/Podcasts/Podcasts';
import PodcastsPlay from '../../Screens/Podcasts/PodcastsPlay';

import { StatusBar } from 'react-native';

import PicsScreen from '../../Screens/Picks/PicsScreen'


const Stack = createNativeStackNavigator();

function PodcastsStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Podcasts" component={Podcasts} />
                <Stack.Screen name="PodcastsPlay" component={PodcastsPlay} />
            </Stack.Navigator>

        </>
    );
}
export default PodcastsStack;
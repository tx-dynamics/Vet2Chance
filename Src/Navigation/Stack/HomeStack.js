import * as React from 'react';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import HomeScreen from '../../Screens/Home/HomeScreen'
import FeatureDetails from '../../Screens/Home/FeatureDetails'
import HotMatches from '../../Screens/Home/HotMatches'
import Podcasts from '../../Screens/Podcasts/Podcasts'
import PodcastsPlay from '../../Screens/Podcasts/PodcastsPlay'
import MatchesDetails from '../../Screens/Home/MatchesDetails'
import Leagues from '../../Screens/Home/Leagues'
import TeamMatches from '../../Screens/Home/TeamMatches'



const Stack = createNativeStackNavigator();

function HomeStack(props) {

    return (
        <>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="FeatureDetails" component={FeatureDetails} />
                <Stack.Screen name="HotMatches" component={HotMatches} />
                <Stack.Screen name="Leagues" component={Leagues} />
                <Stack.Screen name="TeamMatches" component={TeamMatches} />
                <Stack.Screen name="Podcasts" component={Podcasts} />
                <Stack.Screen name="PodcastsPlay" component={PodcastsPlay} />
                <Stack.Screen name="MatchesDetails" component={MatchesDetails} />
            </Stack.Navigator>

        </>
    );
}
export default HomeStack;
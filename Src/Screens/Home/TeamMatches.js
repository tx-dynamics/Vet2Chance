import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList, ActivityIndicator,Text, Image, TouchableOpacity, ImageBackground, Pressable } from 'react-native'
import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';
import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import EventCard from '../Events/EventCard'
import Snackbar from 'react-native-snackbar';


const TeamMatches = (props) => {

    const items = props?.route?.params?.item;
    console.log("items", items)


    return (
        <View style={styles.container}>
            <Header midtitle title={items?.Ccd }
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />

                <FlatList
                    data={items.Events}
                    keyExtractor={(item) => item?.Eid}
                    ListEmptyComponent={() => {
                        return (
                          <Text style={{ alignSelf: 'center', marginTop: 100 }}>No Record Found</Text>
                        )
                      }}
                    renderItem={({ item, index }) => (
                        <EventCard
                            // onPress={() => props.navigation.navigate("HomeStack" , {screen : "MatchesDetails"})}
                            LeftTeam={item?.T1[0]?.Nm}
                            RightTeam={item?.T2[0]?.Nm}
                            LeagueName={items?.Ccd}
                            // dt={"12/02/2022 8:15PM"}
                            Leftimg={{uri: 'https://lsm-static-prod.livescore.com/medium/' + item?.T1[0]?.Img}}
                            Rightimg={{uri : 'https://lsm-static-prod.livescore.com/medium/' + item?.T2[0]?.Img}}
                        />
                    )} />
            

        </View>
    )
}

export default TeamMatches;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boxWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    },
    picksoftheDayInner: { flexDirection: "row", alignItems: "center", paddingLeft: wp(1) },
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6) }
})
import React, { useState } from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Pressable } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";
import Fonticon from '../../Constants/FontIcon';

import HotMatchesCard from './HotMatchesCard'
import HomeHeadings from './HomeHeadings'
import EventCard from '../Events/EventCard'


const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const MatchesDetails = (props) => {

    const [selectedTab, setselectedTab] = useState('1')

    return (
        <ScrollView style={styles.container}>
            <Header midtitle title={"Team Vs Team Details"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />

            <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image source={iconPath.Live} style={{ width: 16, height: 12 }} />
                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#950F12"} margin={[0, 0, 0, wp(2)]}>{"Live"}</ResponsiveText>

                </View>
                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"} >{"02/02/2022 6:15PM"}</ResponsiveText>

            </View>
            <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
                <View style={{ width: "25%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ flex: 1 }}>
                            <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"black"} >{"Bucs"}</ResponsiveText>
                            <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"black"} margin={[wp(6), 0, 0, 0]} >{"To:1"}</ResponsiveText>
                        </View>

                        <ResponsiveText size={"h4"} fontFamily={fonts.Montserrat} color={"black"} >{"1"}</ResponsiveText>

                    </View>

                </View>
                <View style={{ flex: 1, }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                        <Image source={iconPath.TeamImage} style={{ width: 50, height: 50, borderRadius: 25 }} resizeMode={"cover"} />
                        <Image source={iconPath.TeamImage} style={{ width: 50, height: 50, borderRadius: 25 }} resizeMode={"cover"} />


                    </View>
                    <View style={{ alignSelf: "center", marginTop: 10 }}>

                        <ResponsiveText size={"h"} fontFamily={fonts.Montserrat_Bold} color={"black"} >{"1st & 10th"}</ResponsiveText>
                        <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat} color={"black"} >{"on the 46"}</ResponsiveText>
                    </View>

                </View>
                <View style={{ width: "30%", }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <ResponsiveText size={"h4"} fontFamily={fonts.Montserrat} color={"black"} >{"0"}</ResponsiveText>

                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                            <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"black"} >{"Steelers"}</ResponsiveText>
                            <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"black"} margin={[wp(6), 0, 0, 0]} >{"To:1"}</ResponsiveText>
                        </View>


                    </View>

                </View>
            </View>

            <View style={{ backgroundColor: "white", marginHorizontal: 20, marginTop: wp(10), height: 500, borderRadius: 10, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: wp(4), marginStart: 25, backgroundColor: "blue" }}>

                    <View style={{ height: 42, backgroundColor: "#D4C739", width: "40%", borderRadius: 21, position: "absolute", left: 30, justifyContent: "center", alignItems: "center" }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} color={"black"} margin={[0, 0, 0, 0]}>{"Bucs"}</ResponsiveText>

                    </View>
                    <View style={{ height: 42, backgroundColor: "#950F12", width: "45%", borderRadius: 21, position: "absolute", right: 55, justifyContent: "center", alignItems: "center" }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} color={"white"} margin={[0, 0, 0, 0]}>{"Bucs"}</ResponsiveText>

                    </View>

                </View>

                <View style={{marginTop:60, height:39 , backgroundColor:"#F0F0F0", marginHorizontal:10, borderRadius:5}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>
                <View style={{marginTop:20, height:39 , backgroundColor:"#F0F0F0", marginHorizontal:10, borderRadius:5}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>
                <View style={{marginTop:40, height:1 , backgroundColor:"#D9D9D9", marginHorizontal:10}}></View>


            </View>

        </ScrollView>
    )
}
export default MatchesDetails;
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
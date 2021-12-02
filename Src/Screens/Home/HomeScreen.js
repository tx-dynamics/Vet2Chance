import React from 'react'
import { View, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";

import HotMatchesCard from './HotMatchesCard'
import HomeHeadings from './HomeHeadings'

const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header midtitle title={"BETMOORSPORTS"}
                left LeftImage ImageName={iconPath.DrawerIcon}
                leftPress={() => props.navigation.openDrawer()}
            />
            <ScrollView style={{}}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: wp(6), paddingHorizontal: wp(5) }}>
                    {filterData.map((item, index) =>
                        <View style={{ alignItems: "center" }}>
                            <Image source={item.ImageName} style={{ width: wp(10), height: wp(10), resizeMode: "contain" }} />
                            <ResponsiveText size={index === filterData.length - 1 ? "h10" : "h9"} fontFamily={index === filterData.length - 1 ? fonts.Montserrat : fonts.Montserrat_Bold} textAlign={"center"} margin={[index === filterData.length - 1 ? wp(2) : wp(1), 0, wp(0), 0]}>{item.title}</ResponsiveText>
                        </View>
                    )}
                </View>

                <View style={[styles.boxWithShadow, styles.picksoftheDayOutter]}>
                    <View style={styles.picksoftheDayInner}>
                        <ResponsiveText size={"h0"} fontFamily={fonts.CarbonBlock} color={Colors.red}>{"Picks"}</ResponsiveText>
                        <Svg height="37" width="66" style={{}}>
                            <Text fill="#fff" stroke="black" strokeWidth='.7' fontSize="27" fontFamily={fonts.CarbonBlock} x={wp(9)} y={wp(8)} textAnchor="middle">
                                of The
                            </Text>
                        </Svg>
                        <ResponsiveText size={"h0"} fontFamily={fonts.CarbonBlock} color={Colors.red} margin={[wp(0), 0, wp(0), 0]}>{"day"}</ResponsiveText>
                    </View>
                    <ScrollView horizontal style={{}}>
                        {filterData.map((item, index) =>
                            <Pressable onPress={() => props.navigation.navigate('OthersStack', { screen: 'PicksofTheDayDetails' })}>
                                <Image source={iconPath.PicksOfTheDay} style={{ width: wp(30), height: wp(40), resizeMode: "contain", marginTop: wp(2), borderRadius: 10 }} />
                            </Pressable>
                        )}
                    </ScrollView>
                </View>

                <Pressable onPress={() => props.navigation.navigate("HotMatches")}>
                    <HomeHeadings imageName={iconPath.FireIcon} textTitle={"HOT MATCHUPS"} />

                    <HotMatchesCard />
                </Pressable>

                <HomeHeadings imageName={iconPath.FeaturedIcon} textTitle={"FEATURED"}
                    marginTop={wp(2.5)} />
                <Pressable onPress={() => props.navigation.navigate("FeatureDetails")}>
                    <ImageBackground source={iconPath.FootballImage} style={{ width: wp(88), height: wp(66), alignSelf: "center", marginTop: wp(2) }}
                        resizeMode='contain'>
                        <ImageBackground source={iconPath.darkRactangle} style={{ width: wp(88), height: wp(66), alignSelf: "center", alignItems: "flex-start", justifyContent: "flex-end", paddingBottom: wp(5), paddingHorizontal: wp(6) }}
                            resizeMode='contain'>
                            <ResponsiveText size={"h14"} fontFamily={fonts.Montserrat_Bold} color={Colors.white}>{"Top 10 Highly Paying Countries For Football"}</ResponsiveText>
                        </ImageBackground>
                    </ImageBackground>
                </Pressable>


                <View style={{ paddingHorizontal: wp(6), marginTop: -4 }}>
                    <ScrollView horizontal>
                        {filterData.map((item, index) =>
                            <View style={{ marginLeft: index === 0 ? 0 : wp(2.2), width: wp(36) }}>
                                <Image source={iconPath.FootballImage} style={{ width: wp(36), height: wp(30), resizeMode: "contain", borderRadius: 10 }} />
                                <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} margin={[-6, 0, 0, 0]} color={"#878484"}>{"COLLEGE FOOTBALL"}</ResponsiveText>
                                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat_Bold} margin={[-2, 0, 0, 0]}>{"College Football Power Rankings: Week 11 (2021)"}</ResponsiveText>
                            </View>
                        )}
                    </ScrollView>
                </View>

                <HomeHeadings imageName={iconPath.FeedIcon} textTitle={"FEED"}
                    marginTop={wp(4)} />


                <ImageBackground source={iconPath.FootballImage1} style={{ width: wp(88), height: wp(66), alignSelf: "center", marginTop: wp(2) }}
                    resizeMode='contain'>
                    <ImageBackground source={iconPath.darkRactangle} style={{ width: wp(88), height: wp(66), alignSelf: "center", alignItems: "flex-start", justifyContent: "flex-end", paddingBottom: wp(5), paddingHorizontal: wp(6) }}
                        resizeMode='contain'>
                        <ResponsiveText size={"h14"} fontFamily={fonts.Montserrat_Bold} color={Colors.white}>{"News Spreading Across the World for Football"}</ResponsiveText>
                    </ImageBackground>
                </ImageBackground>


                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(3) }}>
                    <HomeHeadings imageName={iconPath.PodcastsImage} textTitle={"Podcasts"}
                        marginTop={wp(.1)} />
                    <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
                </View>

                <View style={[styles.boxWithShadow, {
                    backgroundColor: Colors.white, borderRadius: 8, paddingVertical: wp(2), marginHorizontal: wp(6), marginTop: wp(2),
                    paddingLeft: wp(6), paddingRight: wp(3), marginBottom: wp(5)
                }]}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={iconPath.podcastProd} style={{ width: wp(17), height: wp(17), resizeMode: "contain", borderRadius: 15 }} />
                        <View style={{ marginLeft: wp(3.5), paddingVertical: wp(2), justifyContent: "space-between" }}>
                            <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} margin={[wp(0), 0, 0, 0]}>{"Podcast Name"}</ResponsiveText>
                            <ResponsiveText size={"h9"} margin={[wp(0), 0, 0, 0]}>{"By Name"}</ResponsiveText>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <ResponsiveText size={"h9"} color={'#9F9F9F'} margin={[0, 0, 0, 12]}>{"41s"}</ResponsiveText>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#C4C4C4", height: 1, width: "100%", marginVertical: wp(1) }} />

                    <View style={{ flexDirection: "row" }}>
                        <Image source={iconPath.podcastProd} style={{ width: wp(17), height: wp(17), resizeMode: "contain", borderRadius: 15 }} />
                        <View style={{ marginLeft: wp(3.5), paddingVertical: wp(2), justifyContent: "space-between" }}>
                            <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} margin={[wp(0), 0, 0, 0]}>{"Podcast Name"}</ResponsiveText>
                            <ResponsiveText size={"h9"} margin={[wp(0), 0, 0, 0]}>{"By Name"}</ResponsiveText>
                        </View>
                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                            <ResponsiveText size={"h9"} color={'#9F9F9F'} margin={[0, 0, 0, 12]}>{"41s"}</ResponsiveText>
                        </View>
                    </View>



                </View>




            </ScrollView>

        </View>
    )
}
export default HomeScreen;
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
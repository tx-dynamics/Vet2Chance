import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

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
                        <Image source={iconPath.PicksOfTheDay} style={{ width: wp(30), height: wp(40), resizeMode: "contain", marginTop: wp(2), borderRadius: 10 }} />
                    )}
                </ScrollView>
            </View>

            <HomeHeadings imageName={iconPath.FireIcon} textTitle={"HOT MATCHUPS"} />

            <HotMatchesCard />

            <HomeHeadings imageName={iconPath.FeaturedIcon} textTitle={"FEATURED"}
                marginTop={wp(2.5)} />
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
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6)}
})
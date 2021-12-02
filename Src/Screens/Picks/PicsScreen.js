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
import Fonticon from '../../Constants/FontIcon';

const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

const PicsScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header midtitle title={"PICKS"}
                left LeftImage ImageName={iconPath.DrawerIcon}
                leftPress={() => props.navigation.openDrawer()}
            />
            <ScrollView style={{}}>


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


                <View style={[styles.boxWithShadow, { backgroundColor: Colors.white, paddingVertical: wp(3), paddingHorizontal: wp(4), borderRadius: 8, marginHorizontal: wp(6), marginTop: wp(4) }]}>

                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: wp(2) }}>
                        <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} color={Colors.red} margin={[0, 0, 0, wp(5)]}>{"TOP PROPS"}</ResponsiveText>
                        <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>

                    </View>


                    <View style={[styles.boxWithShadow, { backgroundColor: "white", paddingVertical: wp(3), paddingHorizontal: wp(3), alignItems: "center", borderRadius: 8 }]}>
                        <View style={{ paddingTop: (1), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Image source={iconPath.pointsPic} style={{ width: wp(11), height: wp(11), resizeMode: "contain" }} />
                            <View style={{ marginLeft: wp(3) }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Name"}</ResponsiveText>
                                <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]}>{"F - ATL"}</ResponsiveText>
                            </View>
                            <View style={{ flex: 1, height: "100%", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ backgroundColor: "#DADADA", width: 1, height: "90%" }} />
                                <View style={{ marginLeft: wp(8), marginRight: wp(3) }}>
                                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Diff: 3.3"}</ResponsiveText>
                                    <ResponsiveText size={"h10"} margin={[0, 0, 0, 0]}>{"Proj: 16:8"}</ResponsiveText>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.boxWithShadow, { backgroundColor: "white", paddingVertical: wp(3), paddingHorizontal: wp(3), alignItems: "center", borderRadius: 8, marginTop: wp(3) }]}>
                        <View style={{ paddingTop: (1), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Image source={iconPath.pointsPic} style={{ width: wp(11), height: wp(11), resizeMode: "contain" }} />
                            <View style={{ marginLeft: wp(3) }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Name"}</ResponsiveText>
                                <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]}>{"F - ATL"}</ResponsiveText>
                            </View>
                            <View style={{ flex: 1, height: "100%", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ backgroundColor: "#DADADA", width: 1, height: "90%" }} />
                                <View style={{ marginLeft: wp(8), marginRight: wp(3) }}>
                                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Diff: 3.3"}</ResponsiveText>
                                    <ResponsiveText size={"h10"} margin={[0, 0, 0, 0]}>{"Proj: 16:8"}</ResponsiveText>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={[styles.boxWithShadow, { backgroundColor: "white", paddingVertical: wp(3), paddingHorizontal: wp(3), alignItems: "center", borderRadius: 8, marginTop: wp(3) }]}>
                        <View style={{ paddingTop: (1), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                            <Image source={iconPath.pointsPic} style={{ width: wp(11), height: wp(11), resizeMode: "contain" }} />
                            <View style={{ marginLeft: wp(3) }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Name"}</ResponsiveText>
                                <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]}>{"F - ATL"}</ResponsiveText>
                            </View>
                            <View style={{ flex: 1, height: "100%", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                                <View style={{ backgroundColor: "#DADADA", width: 1, height: "90%" }} />
                                <View style={{ marginLeft: wp(8), marginRight: wp(3) }}>
                                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Diff: 3.3"}</ResponsiveText>
                                    <ResponsiveText size={"h10"} margin={[0, 0, 0, 0]}>{"Proj: 16:8"}</ResponsiveText>
                                </View>
                            </View>
                        </View>
                    </View>



                </View>


                <ResponsiveText size={"h9"} textAlign={"center"} fontFamily={fonts.Montserrat_Bold} margin={[wp(15), 0, wp(22), 0]}>{"More things will be added on demand "}</ResponsiveText>


            </ScrollView>

        </View>
    )
}
export default PicsScreen;
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
import React from 'react'
import { View, StyleSheet, Image, Pressable,  } from 'react-native'

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

export default function HotMatchesCard(props) {
    return (
        <View>
        <ScrollView horizontal>
            {filterData.map((item, index) =>
                <View style={[styles.boxWithShadow, { backgroundColor: Colors.white, marginTop: wp(3), paddingVertical: wp(2), paddingHorizontal: wp(3), borderRadius: 6, marginLeft: index === 0 ? wp(6) : wp(5), width: wp(60), marginBottom: wp(3) }]}>

                    <View style={{ flexDirection: "row" }}>

                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ alignItems: "center" }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"DEN"}</ResponsiveText>
                                <ResponsiveText size={"h13"} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"0-2"}</ResponsiveText>
                            </View>
                            <AnimatedCircularProgress
                                style={{ marginTop: wp(2) }}
                                size={30}
                                width={1.8}
                                fill={60}
                                tintColor={Colors.red}
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor="transparent" >
                                {(fill) => (
                                    <View style={{ backgroundColor: "#F5F3F199", width: "92%", height: "92%", alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
                                        <ResponsiveText size={"h13"} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{fill + "%"}</ResponsiveText>
                                    </View>
                                )}
                            </AnimatedCircularProgress>

                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ alignItems: "center", backgroundColor: "#E5E5E5", paddingVertical: 1.5, paddingHorizontal: 8, borderRadius: 3 }}>
                                <ResponsiveText size={"h12"} fontFamily={fonts.Montserrat_Bold} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"GB"}</ResponsiveText>
                                <ResponsiveText size={"h13"} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"-2.5"}</ResponsiveText>
                            </View>

                            <ResponsiveText size={"h13"} color={'#878484'} textAlign={"center"} margin={[wp(4), 0, wp(0), 0]}>{"Spread\nConsensus"}</ResponsiveText>


                        </View>
                        <View style={{ flex: 1, alignItems: "center" }}>
                            <View style={{ alignItems: "center" }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"GB"}</ResponsiveText>
                                <ResponsiveText size={"h13"} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"0-2"}</ResponsiveText>
                            </View>

                            <AnimatedCircularProgress
                                style={{ marginTop: wp(2) }}
                                size={30}
                                width={1.8}
                                fill={60}
                                tintColor={Colors.red}
                                onAnimationComplete={() => console.log('onAnimationComplete')}
                                backgroundColor="transparent" >
                                {(fill) => (
                                    <View style={{ backgroundColor: "#F5F3F199", width: "92%", height: "92%", alignItems: "center", justifyContent: "center", borderRadius: 100 }}>
                                        <ResponsiveText size={"h13"} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{fill + "%"}</ResponsiveText>
                                    </View>
                                )}
                            </AnimatedCircularProgress>

                        </View>

                    </View>

                    <View style={{ backgroundColor: "#C4C4C4", alignSelf: "center", height: .5, width: "90%", marginVertical: wp(3) }}></View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: wp(4), paddingBottom: wp(1) }}>
                        <ResponsiveText size={"h13"} color={Colors.black} margin={[wp(0), 0, wp(0), 0]}>{"Sun 12pm"}</ResponsiveText>
                        <Image source={iconPath.ballIcon} style={{ width: wp(4), height: wp(2), resizeMode: "contain" }} />
                    </View>
                </View>
            )}
        </ScrollView>
    </View>
    )
}

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
})

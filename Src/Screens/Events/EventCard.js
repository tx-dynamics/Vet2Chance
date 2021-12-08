import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Fonticon from '../../Constants/FontIcon';
import ResponsiveText from '../../Components/RnText';


export default function EventCard(props) {
    return (
        <View style={[styles.boxWithShadow, {
            backgroundColor: "#fff", borderRadius: 8,
            alignItems: "center", marginHorizontal: wp(3), marginTop: wp(4),
            paddingVertical: wp(2), paddingHorizontal: wp(3)
        }]}>
            <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 4 }}>
                <View style={{ flex: .55 }}>
                    <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat_Bold}>{"UPCOMING"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Spread"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Total"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Money"}</ResponsiveText>
                </View>
            </View>

            <View style={{ backgroundColor: "#DADADA", height: 1, width: "100%", marginBottom: 10 }}></View>

            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <View style={{ flex: .55, flexDirection: "row", alignItems: "center" }}>

                    <View style={{ backgroundColor: "#950F12", width: wp(6.1), height: wp(5), alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
                        <ResponsiveText size={"h11"} fontFamily={fonts.Montserrat_Bold} color={"#fff"} margin={[-2, 0, 0, 0]} >{"BAL"}</ResponsiveText>
                    </View>
                    <View style={{ marginLeft: wp(1.5) }}>
                        <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]} >{"Revens"}</ResponsiveText>
                        <ResponsiveText size={"h11"} fontFamily={fonts.Montserrat} color={"#878484"} margin={[-2, 0, 0, 1]} >{"6 - 2"}</ResponsiveText>
                    </View>

                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#E1E0E0", borderRadius: 2, alignItems: "center", justifyContent: "center", width: wp(10.5), height: wp(7) }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#020202"} >{"-7.5"}</ResponsiveText>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"} margin={[-2, 0, 0, 0]}>{"-109"}</ResponsiveText>
                    </View>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#E1E0E0", borderRadius: 2, alignItems: "center", justifyContent: "center", width: wp(10.5), height: wp(7) }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#020202"} >{"o46.5"}</ResponsiveText>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"} margin={[-2, 0, 0, 0]}>{"-109"}</ResponsiveText>
                    </View>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#E1E0E0", borderRadius: 2, alignItems: "center", justifyContent: "center", width: wp(10.5), height: wp(7) }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#020202"} >{"-380"}</ResponsiveText>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}>
                <View style={{ flex: .55, flexDirection: "row", alignItems: "center" }}>

                    <View style={{ backgroundColor: "#000000", width: wp(6.1), height: wp(5), alignItems: "center", justifyContent: "center", borderRadius: 2 }}>
                        <ResponsiveText size={"h11"} fontFamily={fonts.Montserrat_Bold} color={"#fff"} margin={[-2, 0, 0, 0]} >{"MIA"}</ResponsiveText>
                    </View>
                    <View style={{ marginLeft: wp(1.5) }}>
                        <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]} >{"Dolphins"}</ResponsiveText>
                        <ResponsiveText size={"h11"} fontFamily={fonts.Montserrat} color={"#878484"} margin={[-2, 0, 0, 1]} >{"6 - 2"}</ResponsiveText>
                    </View>

                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#E1E0E0", borderRadius: 2, alignItems: "center", justifyContent: "center", width: wp(10.5), height: wp(7) }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#020202"} >{"-7.5"}</ResponsiveText>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"} margin={[-2, 0, 0, 0]}>{"-109"}</ResponsiveText>
                    </View>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#E1E0E0", borderRadius: 2, alignItems: "center", justifyContent: "center", width: wp(10.5), height: wp(7) }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#020202"} >{"o46.5"}</ResponsiveText>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"} margin={[-2, 0, 0, 0]}>{"-109"}</ResponsiveText>
                    </View>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <View style={{ backgroundColor: "#E1E0E0", borderRadius: 2, alignItems: "center", justifyContent: "center", width: wp(10.5), height: wp(7) }}>
                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#020202"} >{"-380"}</ResponsiveText>
                    </View>
                </View>
            </View>


            <View style={{ backgroundColor: "#DADADA", height: 1, width: "100%", marginVertical: 6 }}></View>

            <View style={{ flexDirection: "row", alignItems: "center", }}>
                <View style={{ flex: .55 }}>
                <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Fri 7am - FOX"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"}>{"83% BAL"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"}>{"80% O"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} color={"#878484"}>{"100% BAL"}</ResponsiveText>
                </View>
            </View>



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
    picksoftheDayInner: { flexDirection: "row", alignItems: "center", paddingLeft: wp(1) },
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6) }
})

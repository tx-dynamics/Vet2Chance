import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'


import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Fonticon from '../../Constants/FontIcon';
import ResponsiveText from '../../Components/RnText';
import { useNavigation } from '@react-navigation/native'



export default function EventCard(props) {
    let navigation = useNavigation()
    return (
        <TouchableOpacity onPress={props.onPress}
        style={[styles.boxWithShadow, {
            backgroundColor: "#fff", borderRadius: 8,
            alignItems: "center", marginHorizontal: wp(3), marginTop: wp(4),
            paddingVertical: wp(2), paddingHorizontal: wp(3)
        }]}>
            <View style={{ flex: 1, alignItems: "center" }}>
                <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat} 
                color={"#878484"}>{props.dt}</ResponsiveText>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "90%" }}>
                <View style={{alignItems:"center"}}>
                    <Image 
                    //  source={iconPath.TeamImage}
                     source={props.Leftimg}
                     style={{ height: 70, width: 70 }} resizeMode={"cover"} />
                    <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat} color={"#000000"}>{props.LeftTeam}</ResponsiveText>

                </View>
                <View style={{ marginTop: 10 , paddingBottom:30}}>
                    <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat} color={"#000000"}>
                        {props.LeagueName}</ResponsiveText>
                    <View style={{marginTop:20}}>

                        <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat} color={"#000000"} textAlign={"center"}>{"V/S"}</ResponsiveText>
                    </View>

                </View>
                <View style={{alignItems:"center"}}>
                    <Image 
                    // source={iconPath.TeamImage}
                    source={props.Rightimg} 
                    style={{ height: 70, width: 70 }} resizeMode={"cover"} />
                    <ResponsiveText size={"h16"} fontFamily={fonts.Montserrat} color={"#000000"}>{props.RightTeam}</ResponsiveText>

                </View>

                {/* <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Spread"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Total"}</ResponsiveText>
                </View>
                <View style={{ flex: .15, alignItems: "center" }}>
                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat} color={"#878484"}>{"Money"}</ResponsiveText>
                </View> */}
            </View>

            {/* <View style={{ backgroundColor: "#DADADA", height: 1, width: "100%", marginBottom: 10 }}></View> */}

            {/* <View style={{ flexDirection: "row", alignItems: "center", }}>
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
 */}

            {/* <View style={{ backgroundColor: "#DADADA", height: 1, width: "100%", marginVertical: 6 }}></View> */}

            {/* <View style={{ flexDirection: "row", alignItems: "center", }}>
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
            </View> */}



        </TouchableOpacity>
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

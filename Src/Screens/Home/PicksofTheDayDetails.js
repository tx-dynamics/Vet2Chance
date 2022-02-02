import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Pressable, TouchableOpacity } from 'react-native'

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import ResponsiveText from '../../Components/RnText';

const PicksofTheDayDetails = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={iconPath.PicksOfTheDay} style={{ flex: 1 }} resizeMode='cover'>
                <ImageBackground source={iconPath.darkRactangle1} style={{ flex: 1 }} resizeMode='cover'>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: wp(8), paddingTop: wp(4), alignItems: "center", }}>
                        <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} color={Colors.white}>{"Betmoorsports"}</ResponsiveText>
                        <TouchableOpacity onPress={() => props.navigation.goBack(null)} style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                            <Image source={iconPath.CrossIcon} style={{ width: wp(3), height: wp(3), resizeMode: "contain" }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, paddingBottom: wp(23), paddingHorizontal: wp(10), justifyContent: "flex-end", alignItems: "center" }}>
                        <View style={{ backgroundColor: "white", paddingHorizontal: wp(3.5), borderRadius: 11, width: "100%", height: 130, flexDirection: "row" }}>

                            <View style={{ width: "20%", justifyContent: "center", alignItems: "center" }}>

                                <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} color={"black"} >{"75%"}</ResponsiveText>

                            </View>
                            <View style={{ flex: 1, alignSelf:"center"}}>
                                <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
                                    <Image source={iconPath.TeamImage} style={{ width: 50, height: 50, borderRadius: 25 }} resizeMode={"cover"} />
                                    <Image source={iconPath.TeamImage} style={{ width: 50, height: 50, borderRadius: 25 }} resizeMode={"cover"} />


                                </View>
                                <View style={{ alignSelf: "center", marginTop: 10 }}>

                                    <ResponsiveText size={"h"} fontFamily={fonts.Montserrat_Bold} color={"black"} >{"1st & 10th"}</ResponsiveText>
                                    <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat} color={"black"} >{"on the 46"}</ResponsiveText>
                                </View>

                            </View>
                            <View style={{ width: "20%", justifyContent: "center", alignItems: "center" ,}}>
                                <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} color={"black"} >{"15%"}</ResponsiveText>

                            </View>




                        </View>
                        <View>
                            <Text>Helo</Text>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
            {/* <View style={{ flex: .11, backgroundColor: "white", alignItems: "center", paddingLeft: wp(3), flexDirection: "row" }}>
                <Image source={iconPath.pointsPic} style={{ width: wp(16), height: wp(16), resizeMode: "contain" }} />
                <View style={{ marginLeft: wp(4) }}>
                    <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat}>{"o27.5 Points"}</ResponsiveText>
                    <ResponsiveText size={"h9"} margin={[5, 0, 0, 0]} fontFamily={fonts.Montserrat}>{"P. George - PDR @ LAC "}</ResponsiveText>
                </View>
            </View> */}
        </View>
    )
}
export default PicksofTheDayDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

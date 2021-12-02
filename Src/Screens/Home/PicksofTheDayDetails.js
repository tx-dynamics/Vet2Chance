import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native'

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import ResponsiveText from '../../Components/RnText';

const PicksofTheDayDetails = (props) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={iconPath.PicksOfTheDay} style={{ flex: .89 }} resizeMode='cover'>
                <ImageBackground source={iconPath.darkRactangle1} style={{ flex: 1 }} resizeMode='cover'>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: wp(8), paddingTop: wp(4), alignItems: "center" }}>
                        <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} color={Colors.white}>{"Betmoorsports"}</ResponsiveText>
                        <Pressable onPress={() => props.navigation.goBack()}>
                            <Image source={iconPath.CrossIcon} style={{ width: wp(3), height: wp(3), resizeMode: "contain" }} />
                        </Pressable>
                    </View>

                    <View style={{ flex: 1, paddingBottom: wp(23), paddingHorizontal: wp(12), justifyContent: "flex-end", alignItems: "center" }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: wp(2), }}>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: wp(37), paddingHorizontal: wp(3.5) }}>
                                <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat} color={Colors.white}>{"77%"}</ResponsiveText>
                                <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]} color={Colors.white}>{"PICKS"}</ResponsiveText>
                            </View>

                            <View style={{ flexDirection: "row", justifyContent: "space-between", width: wp(37), paddingHorizontal: wp(3.5) }}>
                                <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]} color={Colors.white}>{"FADE"}</ResponsiveText>
                                <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat} color={Colors.white}>{"23%"}</ResponsiveText>
                            </View>

                        </View>


                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: wp(2), }}>
                            <View style={{ justifyContent: "center", alignItems: "center", width: wp(37), backgroundColor: "white", paddingHorizontal: wp(3.5), paddingVertical: wp(3.5), borderTopLeftRadius: 11, borderBottomLeftRadius: 11 }}>
                                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={'#950F12'}>{"o27.5 Points"}</ResponsiveText>
                                <ResponsiveText size={"h7"} margin={[5, 0, 0, 0]} fontFamily={fonts.Montserrat} color={'#950F12'}>{"-113"}</ResponsiveText>
                            </View>
                            <View style={{ backgroundColor: "#DADADA", width: 1 }} />
                            <View style={{ justifyContent: "center", alignItems: "center", width: wp(37), backgroundColor: "white", paddingHorizontal: wp(3.5), paddingVertical: wp(3.5), borderTopRightRadius: 11, borderBottomRightRadius: 11 }}>
                                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={'#878484'}>{"o27.5 Points"}</ResponsiveText>
                                <ResponsiveText size={"h7"} margin={[5, 0, 0, 0]} fontFamily={fonts.Montserrat} color={'#878484'}>{"-113"}</ResponsiveText>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </ImageBackground>
            <View style={{ flex: .11, backgroundColor: "white", alignItems: "center", paddingLeft: wp(3), flexDirection: "row" }}>
                <Image source={iconPath.pointsPic} style={{ width: wp(16), height: wp(16), resizeMode: "contain" }} />
                <View style={{ marginLeft: wp(4) }}>
                    <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat}>{"o27.5 Points"}</ResponsiveText>
                    <ResponsiveText size={"h9"} margin={[5, 0, 0, 0]} fontFamily={fonts.Montserrat}>{"P. George - PDR @ LAC "}</ResponsiveText>
                </View>
            </View>
        </View>
    )
}
export default PicksofTheDayDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

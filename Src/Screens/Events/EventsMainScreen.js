import React, { useEffect } from 'react'
import { View, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Fonticon from '../../Constants/FontIcon';
import HomeHeadings from '../Home/HomeHeadings'


const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

const EventsMainScreen = (props) => {

    useEffect(() => {
    }, [])

    return (
        <View style={styles.container}>
            <Header midtitle title={"TOP EVENTS"}
                left LeftImage ImageName={iconPath.DrawerIcon}
                leftPress={() => props.navigation.openDrawer()}
            />

            <View style={[styles.boxWithShadow, {
                backgroundColor: "#fff", borderRadius: 35, flexDirection: "row",
                alignItems: "center", marginHorizontal: wp(4), marginTop: wp(6)
            }]}>
                <TextInput style={{ backgroundColor: "#fff", flex: 1, borderRadius: 35, paddingLeft: wp(4), fontFamily: fonts.Poppins }}
                    placeholder={"Search"}
                    placeholderTextColor={"#C4C4C4"}>
                </TextInput>
                <Fonticon type={"AntDesign"} name={"search1"} size={wp(7)} color={Colors.red}
                    style={{ marginRight: wp(3) }}
                />
            </View>


            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(4) }}>
                <HomeHeadings imageName={iconPath.NFL2} textTitle={"NFL"}
                    marginTop={wp(.1)} />
                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
            </View>


            <View style={[styles.boxWithShadow, {
                backgroundColor: "#fff", borderRadius: 8, flexDirection: "row",
                alignItems: "center", marginHorizontal: wp(4), marginTop: wp(6),
                paddingVertical:wp(15)
            }]}>
            </View>



        </View>
    )
}
export default EventsMainScreen;
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

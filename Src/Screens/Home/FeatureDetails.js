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
import moment from 'moment';
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

const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const FeatureDetails = (props) => {

    const newsData = props?.route?.params?.newsData;
    // console.log("item", newsData)

    return (
        <View style={styles.container}>
            <Header midtitleCenter title={newsData[0]?.categoryLabel}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            <ScrollView style={{}}>
                <Image source={iconPath.FootballImage} style={{ width: wp(100), height: wp(55) }} />
                <View style={{ paddingHorizontal: wp(6), paddingBottom: wp(10) }}>
                    <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} margin={[10, 0, 0, 0]}>
                    {newsData[0]?.title}
                    </ResponsiveText>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: wp(2) }}>
                        <ResponsiveText size={"h9"} color={"#878484"} margin={[0, 0, 0, 0]}>
                        {newsData[0]?.authors[0]?.name ? "by " + newsData[0]?.authors[0]?.name : null }
                        </ResponsiveText>
                        <ResponsiveText size={"h9"} color={"#878484"} margin={[0, 0, 0, 0]}>
                        {moment(newsData[0]?.createdAt).fromNow() }
                        </ResponsiveText>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#DADADA", width: "100%", marginVertical: wp(2) }} />

                    {/* <ResponsiveText size={"h15"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>
                    {"What is Lorem Ipsum?"}
                    </ResponsiveText>
                     */}
                    
                    <ResponsiveText size={"h10"} textAlign={'justify'} margin={[10, 0, 10, 0]}>
                    {newsData[0]?.subTitle}
                    </ResponsiveText>


                    {/* <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} margin={[8, 0, 8,]}>{"Best NBA Player Props (11/09/21)"}</ResponsiveText>

                    <View style={[styles.boxWithShadow,{ backgroundColor: Colors.white, paddingVertical: wp(3), paddingHorizontal: wp(4), borderRadius: 8 }]}>

                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <ResponsiveText size={"h9"} color={"#C4C4C4"} margin={[0, 3, 0, 0]}>{"Matchups"}</ResponsiveText>
                            <Fonticon type={'AntDesign'} name={'caretdown'} size={wp(2)} color={'#C4C4C4'} />

                            <ResponsiveText size={"h9"} color={"#C4C4C4"} margin={[0, 3, 0, wp(4)]}>{"Bets"}</ResponsiveText>
                            <Fonticon type={'AntDesign'} name={'caretdown'} size={wp(2)} color={'#C4C4C4'} />

                            <ResponsiveText size={"h9"} color={"#C4C4C4"} margin={[0, 3, 0, wp(4)]}>{"Odds"}</ResponsiveText>
                            <Fonticon type={'AntDesign'} name={'caretdown'} size={wp(2)} color={'#C4C4C4'} />

                            <View style={{ flex: 1, alignItems: "flex-end", paddingRight: wp(2) }}>
                                <Image source={iconPath.redFilter} style={{ width: wp(4), height: wp(4), resizeMode: "contain" }} />
                            </View>
                        </View>

                        <View style={{ backgroundColor: "#DADADA", height: 1, width: "100%", marginTop: wp(1.5), marginBottom: wp(3) }}></View>

                        <View style={[styles.boxWithShadow, { backgroundColor: "white", paddingVertical: wp(1), paddingHorizontal: wp(2), alignItems: "center", borderRadius:8 }]}>

                            <View style={{ paddingTop: (1), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, wp(3), 0, 0]}>{"1"}</ResponsiveText>
                                <Image source={iconPath.pointsPic} style={{ width: wp(11), height: wp(11), resizeMode: "contain" }} />
                                <View style={{ marginLeft: wp(3) }}>
                                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Name"}</ResponsiveText>
                                    <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]}>{"F - ATL"}</ResponsiveText>
                                </View>
                                <View style={{ flex: 1, height: "100%", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#DADADA", width: 1, height: "90%" }} />
                                    <View style={{ marginLeft: wp(14), marginRight: wp(3) }}>
                                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Diff: 3.3"}</ResponsiveText>
                                        <ResponsiveText size={"h10"} margin={[0, 0, 0, 0]}>{"Proj: 16:8"}</ResponsiveText>
                                    </View>
                                </View>
                            </View>

                            <View style={{ backgroundColor: "#DADADA", width: "94%", height: 1, marginTop: wp(2.5) }} />

                            <View style={{ flexDirection: "row", width: "90%", marginTop: 4, alignItems:"center", paddingBottom:3 }}>
                                <Image source={iconPath.pointsPic} style={{ width: wp(3), height: wp(3), resizeMode: "contain", borderRadius: 100 }} />
                                <ResponsiveText size={"h9"} margin={[0, 0, 0, 5]}>{"Over 13.5pts @ UTH (-128)"}</ResponsiveText>

                            </View>


                        </View>


                        <View style={[styles.boxWithShadow, { backgroundColor: "white", paddingVertical: wp(1), paddingHorizontal: wp(2), alignItems: "center", borderRadius:8, marginTop:wp(2.5), marginBottom:wp(.5) }]}>

                            <View style={{ paddingTop: (1), flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, wp(3), 0, 0]}>{"1"}</ResponsiveText>
                                <Image source={iconPath.pointsPic} style={{ width: wp(11), height: wp(11), resizeMode: "contain" }} />
                                <View style={{ marginLeft: wp(3) }}>
                                    <ResponsiveText size={"h9"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Name"}</ResponsiveText>
                                    <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]}>{"F - ATL"}</ResponsiveText>
                                </View>
                                <View style={{ flex: 1, height: "100%", justifyContent: "flex-end", flexDirection: "row", alignItems: "center" }}>
                                    <View style={{ backgroundColor: "#DADADA", width: 1, height: "90%" }} />
                                    <View style={{ marginLeft: wp(14), marginRight: wp(3) }}>
                                        <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>{"Diff: 3.3"}</ResponsiveText>
                                        <ResponsiveText size={"h10"} margin={[0, 0, 0, 0]}>{"Proj: 16:8"}</ResponsiveText>
                                    </View>
                                </View>
                            </View>

                            <View style={{ backgroundColor: "#DADADA", width: "94%", height: 1, marginTop: wp(2.5) }} />

                            <View style={{ flexDirection: "row", width: "90%", marginTop: 4, alignItems:"center", paddingBottom:3 }}>
                                <Image source={iconPath.pointsPic} style={{ width: wp(3), height: wp(3), resizeMode: "contain", borderRadius: 100 }} />
                                <ResponsiveText size={"h9"} margin={[0, 0, 0, 5]}>{"Over 13.5pts @ UTH (-128)"}</ResponsiveText>

                            </View>


                        </View>

                    </View> */}

                </View>

            </ScrollView>

        </View>
    )
}
export default FeatureDetails;
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
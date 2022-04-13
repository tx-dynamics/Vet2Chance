import React, { useState } from 'react'
import { View, StyleSheet,FlatList, Image, ImageBackground, Pressable } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";
import Fonticon from '../../Constants/FontIcon';

import HotMatchesCard from './HotMatchesCard'
import HomeHeadings from './HomeHeadings'
import EventCard from '../Events/EventCard'


const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const HotMatches = (props) => {

    const [selectedTab, setselectedTab] = useState('1')
    const [isData, setData] = useState([]);

    const items = props?.route?.params?.item;
    console.log("items", items)


    return (
        <View style={styles.container}>
            <Header midtitle title={"Live NFL Score"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            {/* <View style={[styles.boxWithShadow, {
                flexDirection: "row", paddingHorizontal: wp(14), justifyContent: "space-between", alignItems: "center",
                backgroundColor: "#fff", paddingTop: wp(2.5)
            }]}>
                <Pressable onPress={() => setselectedTab('1')}
                    style={{
                        borderBottomWidth: selectedTab === '1' ? 3 : 0, borderBottomColor: Colors.red, paddingBottom: wp(1.5),
                        width: wp(18), alignItems: "center"
                    }}>
                    {selectedTab === '1' ?
                        <ResponsiveText size={"h16"} color={Colors.red} fontFamily={fonts.Montserrat_Bold}>{"PREVIEW"}</ResponsiveText>
                        :
                        <ResponsiveText size={"h16"} >{"PREVIEW"}</ResponsiveText>

                    }
                </Pressable>
                <Pressable onPress={() => setselectedTab('2')}
                    style={{
                        borderBottomWidth: selectedTab === '2' ? 3 : 0, borderBottomColor: Colors.red, paddingBottom: wp(1.5),
                        width: wp(18), alignItems: "center"
                    }}>
                    {selectedTab === '2' ?
                        <ResponsiveText size={"h16"} color={Colors.red} fontFamily={fonts.Montserrat_Bold}>{"ODDS"}</ResponsiveText>
                        :
                        <ResponsiveText size={"h16"}>{"ODDS"}</ResponsiveText>
                    }

                </Pressable>
                <Pressable onPress={() => setselectedTab('3')}
                    style={{
                        borderBottomWidth: selectedTab === '3' ? 3 : 0, borderBottomColor: Colors.red, paddingBottom: wp(1.5),
                        width: wp(18), alignItems: "center"
                    }}>
                    {selectedTab === '3' ?
                        <ResponsiveText size={"h16"} color={Colors.red} fontFamily={fonts.Montserrat_Bold}>{"STATS"}</ResponsiveText>
                        :
                        <ResponsiveText size={"h16"} >{"STATS"}</ResponsiveText>
                    }

                </Pressable>

            </View> */}

            {/* <View style={[styles.boxWithShadow, { backgroundColor: Colors.white, marginTop: wp(5), marginHorizontal: wp(3), paddingVertical: wp(2), paddingHorizontal: wp(5), borderRadius: 8 }]}>
                <ResponsiveText size={"h7"} >{"Friday 6am on FOX"}</ResponsiveText>
                <ResponsiveText size={"h7"} >{"Stadium Name\nAddress"}</ResponsiveText>
            </View> */}

            {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(5) }}>
                <HomeHeadings textTitle={"CONSENSUS ODDS"}
                    marginLeft={wp(-5)}
                    marginTop={wp(.1)} />
                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
            </View> */}

                    <EventCard
                    LeftTeam={items?.T1[0]?.CoNm}
                    RightTeam={items?.T2[0]?.CoNm}
                    LeagueName={items?.Stg?.Cnm}
                    LeftImage={{uri : items?.T1[0]?.Img}}
                    Rightimg={{uri : items?.T2[0]?.Img}}
                    />



            {/* <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(5) }}>
                <HomeHeadings textTitle={"CONSENSUS PICKS"}
                    marginLeft={wp(-5)}
                    marginTop={wp(.1)} />
                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
            </View> */}



        </View>
    )
}
export default HotMatches;
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
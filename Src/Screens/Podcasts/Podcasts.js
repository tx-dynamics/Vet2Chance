import React from 'react'
import { View, StyleSheet, Image, ImageBackground, Pressable, TouchableOpacity } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Fonticon from '../../Constants/FontIcon';

const StuffData = [
    { id: "1", title: "Stuff\nYou Must Know", desc: "Description", color: "#950F12" },
    { id: "2", title: "Stuff\nYou Must Know", desc: "Description", color: "#000" },
    { id: "3", title: "Stuff\nYou Must Know", desc: "Description", color: "#DC603A" },
]
const ProdData = [
    { id: "1", title: "Podcast Name", desc: "Description", color: "#D4C739" },
    { id: "2", title: "Podcast Name", desc: "Description", color: "#4DA1FF" },
    { id: "3", title: "Podcast Name", desc: "Description", color: "#FF7D05" },
]


const Podcasts = (props) => {
    return (
        <View style={styles.container}>
            <Header midtitleCenter title={"Podcasts"}
                left LeftImage ImageName={iconPath.DrawerIcon}
                leftPress={() => props.navigation.openDrawer()} />
            {/* <Header midtitleCenter title={"Podcasts"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            /> */}

            <ResponsiveText size={"h7"} margin={[wp(4), 0, 0, 0]} textAlign={"center"} fontFamily={fonts.Montserrat_Bold} >{"Welcome to Betmoresports Podcasts"}</ResponsiveText>
            <View style={{ paddingHorizontal: wp(6), flex: 1 }}>
                <ResponsiveText size={"h7"} margin={[wp(7.5), 0, 0, 0]} fontFamily={fonts.Montserrat_Bold} >{"Trending Podcasts"}</ResponsiveText>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: wp(2.5), flex: 1 }}>

                        <View style={{ flex: 1, marginRight: wp(3), }}>
                            <ScrollView>
                                {StuffData.map((item, index) =>
                                    <Pressable style={{
                                        backgroundColor: item.color, borderRadius: 20, paddingHorizontal: wp(3), paddingVertical: wp(3),
                                        height: index % 2 === 0 ? wp(51) : wp(43.6),
                                        marginTop: index === 0 ? 0 : wp(4),
                                        marginBottom: index === StuffData.length - 1 ? wp(4) : 0
                                    }}>
                                        <ResponsiveText size={"h7"} padding={[index % 2 === 0 ? wp(2) : wp(1), wp(4), 0, wp(2)]} color={Colors.white} fontFamily={fonts.Montserrat_Bold} >{"Stuff\nYou Must Know"}</ResponsiveText>
                                        <ResponsiveText size={"h10"} padding={[wp(5), 0, 0, wp(2)]} color={Colors.white} >{"Description"}</ResponsiveText>
                                        <View style={{
                                            flexDirection: "row", justifyContent: "space-between",
                                            marginTop: index % 2 === 0 ? wp(6) : 0,
                                            alignItems: index % 2 === 0 ? "flex-end" : "center"
                                        }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate("PodcastsPlay")}>
                                                <Image source={iconPath.playPodcast} style={{ width: wp(7.5), height: wp(7.5), resizeMode: "contain", marginTop: wp(1) }} />
                                            </TouchableOpacity>
                                            <Image source={iconPath.podcastProd} style={{ width: wp(13.5), height: wp(13), resizeMode: "contain", marginRight: wp(1), borderRadius: 15 }} />
                                        </View>
                                    </Pressable>
                                )}
                            </ScrollView>
                        </View>

                        <View style={{ flex: 1, marginLeft: wp(3), }}>
                            <ScrollView>
                                {ProdData.map((item, index) =>
                                    <Pressable style={{
                                        backgroundColor: item.color, borderRadius: 20, paddingHorizontal: wp(3), paddingVertical: wp(3),
                                        marginTop: index === 0 ? 0 : wp(4),
                                        height: index % 2 !== 0 ? wp(51) : wp(43.6)
                                    }}>
                                        <ResponsiveText size={"h8"} padding={[wp(1), wp(4), 0, wp(2)]} fontFamily={fonts.Montserrat_Bold} >{"Podcast Name"}</ResponsiveText>
                                        <ResponsiveText size={"h10"} padding={[wp(1.5), 0, 0, wp(2)]}>{"Description"}</ResponsiveText>
                                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", flex: 1 }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate("PodcastsPlay")}>
                                                <Image source={iconPath.playPodcast} style={{ width: wp(7.5), height: wp(7.5), resizeMode: "contain", marginBottom: wp(1) }} />
                                            </TouchableOpacity>
                                            <Image source={iconPath.podcastProd} style={{ width: wp(13.5), height: wp(13), resizeMode: "contain", marginRight: wp(1), borderRadius: 15 }} />
                                        </View>
                                    </Pressable>

                                )}
                            </ScrollView>

                        </View>

                    </View>
                </ScrollView>

            </View>
        </View>
    )
}
export default Podcasts;
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
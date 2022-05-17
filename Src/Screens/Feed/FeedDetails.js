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

const filterData = [
    { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    { id: "6", ImageName: iconPath.addMore, title: "Add More" },
]

const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const FeedScreen = (props) => {
    
    const items = props?.route?.params?.item;
    console.log("item", items?.mainMedia?.thumbnail?.url)

    return (
        <View style={styles.container}>
            <Header midtitleCenter title={items?.categoryLabel}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            <ScrollView style={{}}>
                <Image source={{uri : items?.mainMedia?.thumbnail?.url}} style={{ width: wp(100), height: wp(55) }} />
                <View style={{ paddingHorizontal: wp(6), paddingBottom: wp(10) }}>
                    <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} margin={[10, 0, 0, 0]}>
                        {items?.title}</ResponsiveText>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: wp(2) }}>
                        <ResponsiveText size={"h9"} color={"#878484"} margin={[0, 0, 0, 0]}>
                        {items?.authors[0]?.name ? "by " + items?.authors[0]?.name : null}</ResponsiveText>
                        <ResponsiveText size={"h9"} color={"#878484"} margin={[0, 0, 0, 0]}>
                        {moment(items?.createdAt).fromNow()}</ResponsiveText>
                    </View>
                    <View style={{ height: 1, backgroundColor: "#DADADA", width: "100%", marginVertical: wp(2) }} />

                    {/* <ResponsiveText size={"h15"} fontFamily={fonts.Montserrat_Bold} margin={[0, 0, 0, 0]}>
                        {"What is Lorem Ipsum?"}</ResponsiveText>
                         */}

                    <ResponsiveText size={"h10"} textAlign={'justify'} margin={[15, 0, 0, 0]}>
                        {items?.subTitle}
                    </ResponsiveText>


                  
                </View>

            </ScrollView>

        </View>
    )
}
export default FeedScreen;
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
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), 
    paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6) }
})
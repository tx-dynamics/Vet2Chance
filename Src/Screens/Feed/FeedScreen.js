import React from 'react'
import { View, StyleSheet, Image, ImageBackground, Pressable, FlatList } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";
import Fonticon from '../../Constants/FontIcon';

const filterData = [
    { id: "1", ImageName: iconPath.FootballImage, title: "NFL" },
    { id: "2", ImageName: iconPath.FootballImage, title: "NCAAF" },
    { id: "3", ImageName: iconPath.FootballImage, title: "MLB" },
    { id: "4", ImageName: iconPath.FootballImage, title: "NBA" },
    { id: "5", ImageName: iconPath.FootballImage, title: "NHL" },
    { id: "6", ImageName: iconPath.FootballImage, title: "Add More" },
]

const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const FeedScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header midtitle title={"FEED"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            <FlatList
                data={filterData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => props.navigation.navigate("FeedDetails")}>
                        <View style={{ height: 267, width: "95%", margin: 10,}} >
                            <ImageBackground
                                source={item.ImageName} style={{ height: "100%", width: "100%", alignSelf: "center", }} imageStyle={{borderRadius:10}}>
                                <View style={{ position: "absolute", bottom: 10, width: "90%", marginStart: 20 }}>
                                    <ResponsiveText size={"h6"} color={"white"} fontFamily={fonts.Montserrat_Bold} margin={[10, 0, 0, 0]}>{"Michigan Wolverines Vs. Penn State Nittany Lions"}</ResponsiveText>
                                </View>

                            </ImageBackground>
                        </View>

                    </Pressable>
                )} />

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
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6) }
})
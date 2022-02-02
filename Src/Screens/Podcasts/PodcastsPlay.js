import React from 'react'
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { Colors } from '../../Constants/Colors';
import Header from '../../Components/Header';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import ResponsiveText from '../../Components/RnText';
import Stars from 'react-native-stars';
import Slider from 'react-native-slider';

const PlayData = [
    { id: "1", ImageName: iconPath.podcastProd, title: "Podcast Name", des :"By Name" },
    { id: "2", ImageName: iconPath.podcastProd, title: "Podcast Name" , des :"By Name"},
    { id: "3", ImageName: iconPath.podcastProd, title: "Podcast Name" , des :"By Name"},
    { id: "4", ImageName: iconPath.podcastProd, title: "Podcast Name" , des :"By Name"},
    { id: "5", ImageName: iconPath.podcastProd, title: "Podcast Name" , des :"By Name"},
]

export default function PodcastsPlay(props) {

    return (
        <ScrollView nestedScrollEnabled={true} style={{ flexGrow: 1, backgroundColor: "#E5E5E5" }}>
            <View style={{ height: 310, backgroundColor: Colors.red, borderBottomEndRadius: 20, borderBottomStartRadius: 20 }}>
                <Header midtitleCenter title={"Podcasts"}
                    left LeftImage ImageName={iconPath.backIcon}
                    leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                    leftPress={() => props.navigation.goBack()}
                />
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <ResponsiveText size={"h7"} margin={[wp(2.5), 0, 0, 0]} fontFamily={fonts.Montserrat_Bold} color={"white"} >{"Relevant Podcasts"}</ResponsiveText>
                    <View style={{ flexDirection: "row" }}>
                        <View>
                            <ResponsiveText size={"h7"} margin={[wp(2.5), wp(2.5), 0, 0]} fontFamily={fonts.Montserrat_Bold} color={"white"}>{"Posted By"}</ResponsiveText>
                            <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]} fontFamily={fonts.Montserrat} color={"white"}>{"Name"}</ResponsiveText>
                        </View>
                        <Image source={iconPath.podcastProd} style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 20 }} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <ResponsiveText size={"h8"} margin={[wp(2.5), 0, 0, 0]} fontFamily={fonts.Montserrat_Bold} color={"white"}>{"Description:"}</ResponsiveText>
                    <View style={{ width: "75%" }}>
                        <ResponsiveText size={"h9"} margin={[wp(1.5), 0, 0, 0]} fontFamily={fonts.Montserrat} color={"white"}>{"A world of infinite opportunities awaits just outside your home."}</ResponsiveText>
                    </View>
                    <View style={{ alignSelf: "flex-start", marginTop: wp(4) }}>
                        <Stars
                            default={2.5}
                            count={5}
                            starSize={20}
                            fullStar={iconPath.FilledStar}
                            emptyStar={iconPath.Star}
                        />
                    </View>
                    <View style={{ marginTop: wp(4) }}>
                        <Slider
                            style={{ width: "100%", height: 40, }}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#FFFFFF"
                            maximumTrackTintColor="#C4C4C4"
                            thumbTintColor={Colors.red}
                            thumbStyle={{ width: 20, height: 20, borderWidth: 4, borderColor: "white" }}
                        />

                    </View>
                </View>
            </View>
            <View style={{ flex:1, paddingBottom:30}}>
                <View style={{ flexDirection: "row", justifyContent: "space-evenly", position: "absolute", width: "100%", top: -30 ,  alignItems:"center"}}>
                        <Image source={iconPath.MusicBack} style={{height:50 , width:50}} resizeMode={"center"}/>
                    {/* <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 50 / 2, borderColor: "white", borderWidth: 2, elevation: 5 }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <Image source={iconPath.Play} style={{ width: 22, height: 22, resizeMode: "contain", }} />

                        </View>

                    </View> */}
                    <View style={{ height: 70, width: 70, borderRadius: 70 / 2, borderColor: "white", borderWidth: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center", elevation: 5 }}>
                        <Image source={iconPath.Play} style={{ width: 22, height: 22, resizeMode: "contain", }} />

                    </View>
                    <Image source={iconPath.MusicNext} style={{height:50 , width:50 ,resizeMode: "contain",}} />


                    {/* <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 50 / 2, borderColor: "white", borderWidth: 2, elevation: 5 }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <Image source={iconPath.Play} style={{ width: 22, height: 22, resizeMode: "contain", }} />
                        </View>
                    </View> */}

                </View>
                <View style={{ marginTop: wp(10), flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20 }}>
                    <ResponsiveText size={"h7"} margin={[wp(4.5), 0, 0, 0]} fontFamily={fonts.Montserrat_Bold} color={"black"}>{"Relevant Podcasts"}</ResponsiveText>
                    <ResponsiveText size={"h7"} margin={[wp(4.5), 0, 0, 0]} fontFamily={fonts.Montserrat} color={"#4DA1FF"}>{"View All"}</ResponsiveText>
                </View>
               <View style={{flex:1, backgroundColor:"#DADADA", marginHorizontal:20, borderRadius:20, marginTop:wp(4), padding:10,}}>
               {PlayData.map((item, index) =>
                    <TouchableOpacity  style={{flexDirection:"row", paddingVertical:10,  borderBottomWidth:1, borderBottomColor:"#C4C4C4"}}>
                        <Image source ={item.ImageName} style={{width:82, height:62, borderRadius:20}}/>
                        <View style={{flex:1,  justifyContent:"space-between"}}>
                        <ResponsiveText size={"h9"} margin={[wp(1.5), 0, 0, wp(3.5)]} fontFamily={fonts.Montserrat_Bold} color={"black"}>{item.title}</ResponsiveText>
                        <ResponsiveText size={"h10"} margin={[wp(1.5), 0, wp(2.5), wp(3.5)]} fontFamily={fonts.Montserrat} color={"black"}>{item.des}</ResponsiveText>

                        </View>
                        <View style={{justifyContent:"center"}}>
                        <ResponsiveText size={"h10"} margin={[0, 0, 0, wp(1.5)]} fontFamily={fonts.Montserrat} color={"black"}>{"41s"}</ResponsiveText>

                        </View>


                    </TouchableOpacity>
                )}
               </View>
            </View>
        </ScrollView>

    )
}

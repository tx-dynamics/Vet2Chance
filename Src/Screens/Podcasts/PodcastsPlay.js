import React, {useState, useEffect} from 'react'
import { View, Text, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import { Colors } from '../../Constants/Colors';
import Header from '../../Components/Header';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import ResponsiveText from '../../Components/RnText';
import Stars from 'react-native-stars';
import Slider from 'react-native-slider';
import { getAllOfCollection,getData, getListing} from "../../firebase/utility";
import TrackPlayer,{Capability,State,usePlaybackState,useProgress,useTrackPlayerEvents }from 'react-native-track-player';


const PlayData = [
    { id: 1, ImageName: iconPath.podcastProd, title: "Podcast Name1", des :"By Name1" },
    { id: 2, ImageName: iconPath.podcastProd, title: "Podcast Name2" , des :"By Name2"},
    { id: 3, ImageName: iconPath.podcastProd, title: "Podcast Name3" , des :"By Name3"},
    { id: 4, ImageName: iconPath.podcastProd, title: "Podcast Name4" , des :"By Name4"},
    { id: 5, ImageName: iconPath.podcastProd, title: "Podcast Name5" , des :"By Name5"},
]

export default function PodcastsPlay(props) {

    const items = props?.route?.params?.item;
    console.log("item", items)

    const [isPodCastData, setPodCastData] = useState([]);
    const playbackState = usePlaybackState();

    const podCastData = async () => {
        let res = await getAllOfCollection("Podcast")
        console.log("restt", res.media)
        setPodCastData(res.media)
    }

    useEffect(() => {
        podCastData()
    }, [])

    const start = async () => {
        // Set up the player
        await TrackPlayer.setupPlayer();  
        // Add a track to the queue
        await TrackPlayer.add({
            id: items?.id ? items?.id : null,
            // url: 'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_1MG.mp3',
            url: items.url ? items.url : null,
            title: items.title ? items.title : "Music Track",
            artist: items.desc ? items.desc : "Playlist Song",
            // artwork: playbackState === State.Playing ? require('../../../../assets/pause1.png') : require('../../../../assets/videoIcon.png')
        });

        // Start playing it
        // await TrackPlayer.play();
        await TrackPlayer.updateOptions({
        //     // Media controls capabilities
        //     capabilities: [
        //         Capability.Play,
        //         Capability.Pause,
        //     ],
        
        //     // Capabilities that will show up when the notification is in the compact form on Android
        //     compactCapabilities: [Capability.Play, Capability.Pause],
        
            // Icons for the notification on Android (if you don't like the default ones)
            // playIcon: require('../../../../assets/videoIcon.png'),
            // pauseIcon: require('../../../../assets/pause1.png'),
        });
    };
    const stop = async() => {
        await TrackPlayer.pause();
    };
    const togglePlayback = async(playbackState) => {
        console.log(playbackState)
        const currentTrack = await TrackPlayer.getCurrentTrack();
        if (currentTrack !== null ) {
            if (playbackState === State.Paused) {
                await TrackPlayer.play();
            }
            else{
                // await TrackPlayer.pause();
                stop();
            }
        }
    }


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
                            <ResponsiveText size={"h9"} margin={[0, 0, 0, 0]} fontFamily={fonts.Montserrat} color={"white"}>{items?.Name}</ResponsiveText>
                        </View>
                        <Image source={iconPath.podcastProd} style={{ width: 40, height: 40, resizeMode: "cover", borderRadius: 20 }} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 20 }}>
                    <ResponsiveText size={"h8"} margin={[wp(2.5), 0, 0, 0]} fontFamily={fonts.Montserrat_Bold} color={"white"}>{"Description:"}</ResponsiveText>
                    <View style={{ width: "75%" }}>
                        <ResponsiveText size={"h9"} margin={[wp(1.5), 0, 0, 0]} fontFamily={fonts.Montserrat} color={"white"}>
                            {items?.desc}
                            </ResponsiveText>
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
                    <TouchableOpacity 
                    onPress={() => {
                        togglePlayback(playbackState)
                        start();
                    }}
                    style={{ height: 70, width: 70, borderRadius: 70 / 2, borderColor: "white", 
                    borderWidth: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center",
                     elevation: 5 }}>

{
    playbackState === State.Playing ? 
    <Image source={iconPath.Cross} style={{ width: 22, height: 22, resizeMode: "contain", }} />
    :
    <Image source={iconPath.Play} style={{ width: 22, height: 22, resizeMode: "contain", }} />
}
                    </TouchableOpacity>
                    <Image source={iconPath.MusicNext} style={{height:50 , width:50 ,resizeMode: "contain",}} />


                    {/* <View style={{ height: 50, width: 50, justifyContent: "center", alignItems: "center", borderRadius: 50 / 2, borderColor: "white", borderWidth: 2, elevation: 5 }}>
                        <View style={{ height: 40, width: 40, borderRadius: 40 / 2, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
                            <Image source={iconPath.Play} style={{ width: 22, height: 22, resizeMode: "contain", }} />
                        </View>
                    </View> */}

                </View>
                <View style={{ marginTop: wp(10), flexDirection: "row", justifyContent: "space-between", 
                paddingHorizontal: 20 }}>
                    <ResponsiveText size={"h7"} margin={[wp(4.5), 0, 0, 0]} fontFamily={fonts.Montserrat_Bold} 
                    color={"black"}>{"Relevant Podcasts"}</ResponsiveText>
                    <ResponsiveText size={"h7"} margin={[wp(4.5), 0, 0, 0]} fontFamily={fonts.Montserrat} 
                    color={"#4DA1FF"}>{"View All"}</ResponsiveText>
                </View>
               <View style={{flex:1, backgroundColor:"#DADADA", marginHorizontal:20, borderRadius:20, 
               marginTop:wp(4), padding:10,}}>
               {isPodCastData.map((item, index) =>
                    <TouchableOpacity  style={{flexDirection:"row", paddingVertical:10,  
                    borderBottomWidth:1, borderBottomColor:"#C4C4C4"}}>
                        <Image source ={iconPath.podcastProd} style={{width:82, height:62, borderRadius:20}}/>
                        <View style={{flex:1,  justifyContent:"space-between"}}>
                        <ResponsiveText size={"h9"} margin={[wp(1.5), 0, 0, wp(3.5)]} 
                        fontFamily={fonts.Montserrat_Bold} color={"black"}>{item?.title}</ResponsiveText>
                        <ResponsiveText size={"h10"} margin={[wp(1.5), 0, wp(2.5), wp(3.5)]}
                         fontFamily={fonts.Montserrat} color={"black"}>{item?.desc}</ResponsiveText>

                        </View>
                        <View style={{justifyContent:"center"}}>
                        {/* <ResponsiveText size={"h10"} margin={[0, 0, 0, wp(1.5)]} fontFamily={fonts.Montserrat} 
                        color={"black"}>{"41s"}</ResponsiveText> */}

                        </View>


                    </TouchableOpacity>
                )}
               </View>
            </View>
        </ScrollView>

    )
}

import React, { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, Image, ActivityIndicator, ImageBackground, Pressable } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";
import HotMatchesCard from './HotMatchesCard'
import HomeHeadings from './HomeHeadings'
import PodcastCard from './PodcastCard'
import Snackbar from 'react-native-snackbar';
import CountryFlag from "react-native-country-flag";
import { getAllOfCollection,getData, getListing} from "../../firebase/utility";



const HomeScreen = (props) => {


    // const [
    //     filterData = [
    //     { id: "1", ImageName: iconPath.NFL, title: "NFL" },
    //     { id: "2", ImageName: iconPath.NCAAF, title: "NCAAF" },
    //     { id: "3", ImageName: iconPath.MLB, title: "MLB" },
    //     { id: "4", ImageName: iconPath.NBA, title: "NBA" },
    //     { id: "5", ImageName: iconPath.NHL, title: "NHL" },
    //     { id: "6", ImageName: iconPath.addMore, title: "Add More" },
    // ], setFilterData] = useState();
    const [filterData, setFilterData] = useState([]);

    const [matchesData, setMatchesData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [newsData, setNewsData] = useState(false);
    const [mainNews, setMainNews] = useState(false);
    const [isPodCastData, setPodCastData] = useState([]);


    const getLeagues = () => {
        setLoading(true)
        fetch(Colors.baseURL + '/leagues/v2/list?Category=Cricket', {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'livescore6.p.rapidapi.com',
                'x-rapidapi-key': '37f361a9f1msh0f867dbf2bcb62bp19ba82jsnc5b46c71f72f'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setFilterData(data.Ccg)
                setLoading(false)
            })
            .catch(err => {
                console.error(err);
                Snackbar.show({
                    text: err,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: Colors.yellowColor
                });
                setLoading(false)
            })
        // .catch((error) => Alert.alert("Error In API!"))
    }

    const getMatches = async () => {

        fetch(Colors.baseURL + '/matches/v2/list-live?Category=cricket', {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'livescore6.p.rapidapi.com',
                'x-rapidapi-key': '37f361a9f1msh0f867dbf2bcb62bp19ba82jsnc5b46c71f72f'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setMatchesData(data.Stages)
            })
            .catch(err => {
                console.error(err);
                Snackbar.show({
                    text: err,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: Colors.yellowColor
                });
            })
        // .catch((error) => Alert.alert("Error In API!"))
    }

    const getNews = async () => {

        fetch(Colors.baseURL + '/news/v2/list', {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'livescore6.p.rapidapi.com',
                'x-rapidapi-key': '37f361a9f1msh0f867dbf2bcb62bp19ba82jsnc5b46c71f72f'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setNewsData(data.featuredArticles)
                setMainNews(data)
            })
            .catch(err => {
                console.error(err);
                Snackbar.show({
                    text: err,
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: Colors.yellowColor
                });
            })
        // .catch((error) => Alert.alert("Error In API!"))
    }

    const podCastData = async () => {
        let res = await getAllOfCollection("Podcast")
        console.log("res", res.media)
        setPodCastData(res.media)
    }

    useEffect(() => {
        getLeagues()
        getMatches()
        getNews()
        podCastData()

    }, [])

    return (
        <View style={styles.container}>
            <Header midtitle title={"BETMOORSPORTS"}
                left LeftImage ImageName={iconPath.DrawerIcon}
                leftPress={() => props.navigation.openDrawer()}
            />
            <ScrollView style={{}}>
                {isLoading ? <ActivityIndicator size={"small"} color={Colors.red} />
                    :
                    <FlatList
                        data={filterData}
                        horizontal={true}
                        keyExtractor={(item) => item?.Cid}
                        renderItem={({ item, index }) => (
                            <View style={{ marginTop: wp(6), paddingHorizontal: wp(2) }}>
                                <Pressable onPress={() => props.navigation.navigate("HotMatches")}
                                    style={{ alignItems: "center" }}>
                                    {/* <Image source={iconPath.MLB}
                                        style={{
                                            width: wp(10), height: wp(10),
                                            resizeMode: "contain"
                                        }} /> */}
                                    <CountryFlag isoCode="de" size={20} />
                                    <ResponsiveText size={"h10"}
                                        fontFamily={fonts.Montserrat_Bold}
                                        textAlign={"center"} margin={[wp(2)]}>

                                        {item?.Cnm}

                                    </ResponsiveText>
                                </Pressable>
                            </View>
                        )} />
                }
                {/* <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: wp(6), paddingHorizontal: wp(5) }}>
                    {filterData.map((item, index) =>
                        <Pressable onPress={() => props.navigation.navigate("HotMatches")}
                            style={{ alignItems: "center" }}>
                            <Image source={item.ImageName} style={{ width: wp(10), height: wp(10), resizeMode: "contain" }} />
                            <ResponsiveText size={index === filterData.length - 1 ? "h10" : "h9"} fontFamily={index === filterData.length - 1 ? fonts.Montserrat : fonts.Montserrat_Bold} textAlign={"center"} margin={[index === filterData.length - 1 ? wp(2) : wp(1), 0, wp(0), 0]}>{item.title}</ResponsiveText>
                        </Pressable>
                    )}
                </View> */}

                <View style={[styles.boxWithShadow, styles.picksoftheDayOutter]}>
                    <View style={styles.picksoftheDayInner}>
                        <ResponsiveText size={"h0"} fontFamily={fonts.CarbonBlock} color={Colors.red}>{"Picks"}</ResponsiveText>
                        <Svg height="37" width="66" style={{}}>
                            <Text fill="#fff" stroke="black" strokeWidth='.7' fontSize="27" fontFamily={fonts.CarbonBlock} x={wp(9)} y={wp(8)} textAnchor="middle">
                                of The
                            </Text>
                        </Svg>
                        <ResponsiveText size={"h0"} fontFamily={fonts.CarbonBlock} color={Colors.red} margin={[wp(0), 0, wp(0), 0]}>{"day"}</ResponsiveText>
                    </View>
                    <ScrollView horizontal style={{}}>
                        {/* {filterData.map((item, index) =>
                            <Pressable onPress={() => props.navigation.navigate('OthersStack', { screen: 'PicksofTheDayDetails' })}>
                                <Image source={iconPath.PicksOfTheDay} style={{ width: wp(30), height: wp(40), resizeMode: "contain", marginTop: wp(2), borderRadius: 10 }} />
                            </Pressable>
                        )} */}
                        <FlatList
                            data={matchesData}
                            horizontal={true}
                            keyExtractor={(item) => item?.Sid}
                            renderItem={({ item, index }) => (
                                <Pressable onPress={() => props.navigation.navigate('OthersStack', { screen: 'PicksofTheDayDetails' })}>
                                <Image source={iconPath.PicksOfTheDay}
                                 style={{ width: wp(30), height: wp(40), resizeMode: "contain", marginTop: wp(2), borderRadius: 10 }} />
                            </Pressable>
                            )} />
                    </ScrollView>
                </View>

                {/* <Pressable onPress={() => props.navigation.navigate("HotMatches")}>
                    <HomeHeadings imageName={iconPath.FireIcon} textTitle={"HOT MATCHUPS"} />

                    <HotMatchesCard />
                </Pressable> */}

                <HomeHeadings imageName={iconPath.FeaturedIcon} textTitle={"FEATURED"}
                    marginTop={wp(2.5)} />
                <Pressable onPress={() => props.navigation.navigate("FeatureDetails", {newsData})}>
                    {/* <ImageBackground source={iconPath.FootballImage} style={{ width: wp(88), height: wp(66), alignSelf: "center", marginTop: wp(2) }}
                        resizeMode='contain'> */}
                        <ImageBackground source={{uri: newsData[0]?.mainMedia?.thumbnail?.url}} style={{ width: wp(88), height: wp(66),
                         alignSelf: "center", alignItems: "flex-start", justifyContent: "flex-end", paddingBottom: wp(10),
                          paddingHorizontal: wp(6) }}
                            resizeMode='contain'>
                            <ResponsiveText size={"h14"} fontFamily={fonts.Montserrat_Bold}
                             color={Colors.white}>
                            {mainNews?.layoutContext?.meta?.title}</ResponsiveText>
                        </ImageBackground>
                    {/* </ImageBackground> */}
                </Pressable>


                <View style={{ paddingHorizontal: wp(6), marginTop: -4 }}>
                    <ScrollView horizontal>
                        {/* {filterData.map((item, index) =>
                            <View style={{ marginLeft: index === 0 ? 0 : wp(2.2), width: wp(36) }}>
                                <Image source={iconPath.FootballImage} style={{ width: wp(36), height: wp(30), resizeMode: "contain", borderRadius: 10 }} />
                                <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} margin={[-6, 0, 0, 0]} color={"#878484"}>{"COLLEGE FOOTBALL"}</ResponsiveText>
                                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat_Bold} margin={[-2, 0, 0, 0]}>{"College Football Power Rankings: Week 11 (2021)"}</ResponsiveText>
                            </View>
                        )} */}
                           <FlatList
                            data={newsData}
                            horizontal={true}
                            keyExtractor={(item) => item?.id}
                            renderItem={({ item, index }) => (
                                <View style={{ marginLeft: index === 0 ? 0 : wp(2.2), width: wp(36) }}>
                                <Image source={{uri: item?.mainMedia?.gallery?.url}} style={{ width: wp(36), 
                                    height: wp(30), resizeMode: "contain", borderRadius: 10 }} />
                                <ResponsiveText size={"h10"} fontFamily={fonts.Montserrat} 
                                margin={[-6, 0, 0, 0]} color={"#878484"}>{item?.authors[0]?.name}
                                </ResponsiveText>
                                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat_Bold} 
                                margin={[-2, 0, 0, 0]}>{item?.title }
                                </ResponsiveText>
                            </View>
                            )} />
                    </ScrollView>
                </View>

                <HomeHeadings imageName={iconPath.FeedIcon} textTitle={"FEED"}
                    marginTop={wp(4)} />


                <ImageBackground source={{uri : mainNews?.topStories?.[0]?.mainMedia?.gallery?.url}} style={{ width: wp(88), height: wp(66),
                 alignSelf: "center", marginTop: wp(2) }}
                    resizeMode='contain'>
                    <ImageBackground source={iconPath.darkRactangle} style={{ width: wp(88), height: wp(66),
                    alignSelf: "center", alignItems: "flex-start", justifyContent: "flex-end", 
                    paddingBottom: wp(5), paddingHorizontal: wp(6) }}
                        resizeMode='contain'>
                        <ResponsiveText size={"h14"} fontFamily={fonts.Montserrat_Bold} color={Colors.white}>
                            {mainNews?.topStories?.[0]?.title}
                        </ResponsiveText>
                    </ImageBackground>
                </ImageBackground>


                <Pressable onPress={() => props.navigation.navigate("Podcasts")}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingRight: wp(6), marginTop: wp(3) }}>
                        <HomeHeadings imageName={iconPath.PodcastsImage} textTitle={"Podcasts"}
                            marginTop={wp(.1)} />
                        <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
                    </View>
                    <View style={[styles.boxWithShadow, {
                                    backgroundColor: Colors.white, borderRadius: 8, paddingVertical: wp(2), marginHorizontal: wp(6), marginTop: wp(2),
                                    paddingLeft: wp(6), paddingRight: wp(3), marginBottom: wp(5)
                                }]}>
                    <FlatList
                            data={isPodCastData}
                            keyExtractor={(item) => item?.id}
                            renderItem={({ item, index }) => (
                                    <View>
                                    <PodcastCard
                                    Name={item?.title}
                                    by={item?.desc}
                                    // img={{uri : item?.thumbnail}}
                                    // time={item?.secs}
                                    />
                                    <View style={{ backgroundColor: "#C4C4C4", height: 1, 
                                     width: "100%", marginVertical: wp(1) }} />
                                  </View> 
                            )} />

</View>

                    {/* <View style={[styles.boxWithShadow, {
                        backgroundColor: Colors.white, borderRadius: 8, paddingVertical: wp(2), marginHorizontal: wp(6), marginTop: wp(2),
                        paddingLeft: wp(6), paddingRight: wp(3), marginBottom: wp(5)
                    }]}>

                        <PodcastCard
                        Name={"ImAm"}
                        by={"By This ine"}
                        time={"30s"}
                        />
                        <View style={{ backgroundColor: "#C4C4C4", height: 1, width: "100%", marginVertical: wp(1) }} />
                    </View> */}
                </Pressable>





            </ScrollView>

        </View>
    )
}
export default HomeScreen;
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
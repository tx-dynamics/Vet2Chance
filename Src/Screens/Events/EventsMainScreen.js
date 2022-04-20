import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Image,ActivityIndicator,FlatList,Text,ImageBackground, Pressable, TextInput } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Fonticon from '../../Constants/FontIcon';
import HomeHeadings from '../Home/HomeHeadings'
import EventCard from './EventCard'
import Snackbar from 'react-native-snackbar';


const EventsMainScreen = (props) => {

    const [searchBar, setSearchBar] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [selectedTab, setselectedTab] = useState([])


    const getLeagues = () => {
        setLoading(true)
        console.log(Colors.baseURL + '/matches/v2/list-by-date?Category=football&Date=')
        fetch(Colors.baseURL + '/matches/v2/list-by-date?Category=football&Date=',{
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'livescore6.p.rapidapi.com',
                'x-rapidapi-key': '37f361a9f1msh0f867dbf2bcb62bp19ba82jsnc5b46c71f72f'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("chk Data ",data?.Stages[0]?.Events[0])
                setselectedTab(data.Stages)
                // data?.Stages?.map((val) => setselectedTab(val?.Events) )
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

    useEffect(() => {
        getLeagues()
    }, [])


    return (
        <View style={styles.container}>
            {searchBar ?
                <View style={{ height: 59, alignItems: "center", flexDirection: "row", justifyContent: "center", backgroundColor: Colors.red, }}>
                    <View style={{ backgroundColor: "white", flexDirection: "row", width: "90%", height: 46, borderRadius: 30, alignItems: "center" }}>
                        <Pressable onPress ={() => setSearchBar(!searchBar)}>
                            <Image source={iconPath.Cross} style={{ height: 20, width: 20, marginStart: 15 }} />
                        </Pressable>
                        <TextInput
                            keyboardType="email-address"
                            placeholder={"Search..."}
                            style={styles.searchField}
                        />
                        <Image source={iconPath.Group} style={{ height: 20, width: 20, marginEnd: 15, tintColor: "#878484" }} />
                    </View>
                </View>
                :
                <Header midtitle title={"EVENTS"}
                    left LeftImage ImageName={iconPath.backIcon}
                    leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                    leftPress={() => props.navigation.goBack()}

                    search SearchImage SearchImageName={iconPath.Group}
                    searchImageWidth={wp(5)} searchImageHeight={wp(5)}
                    searchPress={() => setSearchBar(!searchBar)}
                />
            }


            {/* <View style={[styles.boxWithShadow, {
                backgroundColor: "#fff", borderRadius: 35, flexDirection: "row",
                alignItems: "center", marginHorizontal: wp(4), marginTop: wp(6), height: 46,
            }]}>
                <TextInput style={{
                    backgroundColor: "#fff", flex: 1, borderRadius: 35, paddingLeft: wp(5), fontFamily: fonts.Poppins,
                    height: 46
                }}
                    placeholder={"Search"}
                    placeholderTextColor={"#C4C4C4"}>
                </TextInput>
                <Fonticon type={"AntDesign"} name={"search1"} size={wp(7)} color={Colors.red}
                    style={{ marginRight: wp(3) }}
                />
            </View> */}

{/* 
            <View style={{ flexDirection: "row", justifyContent: "space-between",
             alignItems: "center", paddingRight: wp(6), marginTop: wp(5) }}>
                <HomeHeadings imageName={iconPath.NFL2} 
                textTitle={"NFL"}
                    marginTop={wp(.1)} />
                <ResponsiveText size={"h7"} fontFamily={fonts.Montserrat} color={"#4DA1FF"} margin={[wp(.1), 0, 0, 0]}>{"View All"}</ResponsiveText>
            </View> */}

            <ScrollView >
            {isLoading ?  <ActivityIndicator size={"small"} color={Colors.red} /> :
                <FlatList
                    data={selectedTab}
                    keyExtractor={(item) => item?.Eid}
                    ListEmptyComponent={() => {
                        return (
                          <Text style={{ alignSelf: 'center', marginTop: 100 }}>No Record Found</Text>
                        )
                      }}
                    renderItem={({ item, index }) => (
                        <EventCard
                        // onPress={() => props.navigation.navigate("HomeStack" , {screen : "MatchesDetails"})}
                        LeftTeam={item?.Events[0]?.T1[0]?.Nm}
                        RightTeam={item?.Events[0]?.T2[0]?.Nm}
                        // LeagueName={items?.Ccd}
                        // dt={"12/02/2022 8:15PM"}
                        Leftimg={{uri: 'https://lsm-static-prod.livescore.com/medium/' + item?.Events[0]?.T1[0]?.Img}}
                        Rightimg={{uri : 'https://lsm-static-prod.livescore.com/medium/' + item?.Events[0]?.T2[0]?.Img}}
                    />
                    )} />
}

                {/* <EventCard /> */}
                <View style={{ paddingBottom: 15 }}></View>
            </ScrollView>



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
    searchField: {
        flex: 1,
        marginStart: 10,
        fontFamily: fonts.Montserrat_Bold,
        fontSize: 16,
        color: Colors.red
        // fontWeight:"700"
    },
    picksoftheDayInner: { flexDirection: "row", alignItems: "center", paddingLeft: wp(1) },
    picksoftheDayOutter: { backgroundColor: Colors.white, marginTop: wp(5), paddingVertical: wp(3), paddingLeft: wp(2), borderRadius: 6, marginHorizontal: wp(6) }
})

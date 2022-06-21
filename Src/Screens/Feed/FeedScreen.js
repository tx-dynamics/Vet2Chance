import React,{useState, useEffect} from 'react'
import { View, StyleSheet, Image,ActivityIndicator, ImageBackground, Pressable, FlatList } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";
import Fonticon from '../../Constants/FontIcon';
import Snackbar from 'react-native-snackbar';
import {
    getDocs,
    collection,
    getFirestore
  } from "@react-native-firebase/firestore";
import { getAllOfCollection } from '../../firebase/utility';

// const filterData = [
//     { id: "1", ImageName: iconPath.FootballImage, title: "NFL" },
//     { id: "2", ImageName: iconPath.FootballImage, title: "NCAAF" },
//     { id: "3", ImageName: iconPath.FootballImage, title: "MLB" },
//     { id: "4", ImageName: iconPath.FootballImage, title: "NBA" },
//     { id: "5", ImageName: iconPath.FootballImage, title: "NHL" },
//     { id: "6", ImageName: iconPath.FootballImage, title: "Add More" },
// ]


const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const FeedScreen = (props) => {


    const [newsData, setNewsData] = useState([]);
    const [isLoading, setLoading] = useState(false)
    // const db = getFirestore();

    const getArticles = async() => {
        let list = []
        const querySnapshot = await getDocs(collection(db, "articles"))
        console.log("query", querySnapshot)
        querySnapshot.forEach((doc) => {
          let data = doc.data()
          data['id'] = doc.id
          list.push(data)
          console.log("list", list)
        });
        return list
    }

    const getNews = async () => {
        setLoading(true)
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
                setNewsData(data?.topStories)
                setLoading(false)
            })
            .catch(err => {
                // console.error(err);
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
        getNews()
        // getArticles()
    },[])

    if (isLoading === true) {
        return <ActivityIndicator size={"small"} color={Colors.red} />
    }
    else{

    return (
        <View style={styles.container}>
            <Header midtitle title={"FEED"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            <FlatList
                data={newsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => props.navigation.navigate("FeedDetails", {item:item})}>
                        <View style={{ height: 267, width: "95%", margin: 10,}} >
                            <ImageBackground
                                source={{uri : item?.mainMedia?.thumbnail?.url}} style={{ height: "100%", width: "100%", 
                                alignSelf: "center", }} imageStyle={{borderRadius:10}}>
                                <View style={{ position: "absolute", bottom: 10, width: "90%",
                                marginStart: 20 }}>
                                    <ResponsiveText size={"h6"} color={"white"} fontFamily={fonts.Montserrat_Bold}
                                     margin={[10, 0, 0, 0]}>
                                    {item?.title}
                                    {/* {console.log(item?.mainMedia?.gallery?.url)} */}
                                     </ResponsiveText>
                                </View>

                            </ImageBackground>
                        </View>

                    </Pressable>
                )} />

        </View>
    )
                }
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
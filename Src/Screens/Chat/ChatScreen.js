import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'

import Header from '../../Components/Header';
import ResponsiveText from '../../Components/RnText';

import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { ScrollView } from 'react-native-gesture-handler';
import Svg, { Text } from "react-native-svg";
import Fonticon from '../../Constants/FontIcon';
import KeyboardAvoidingView from 'react-native/Libraries/Components/Keyboard/KeyboardAvoidingView'




const TextData = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? It is a long"

const ChatData = [
    {
        id: 1,
        message: "Hello Man, How are you!",
        check: "receiver",
    },
    {
        id: 2,
        message: "Would be awesome!",
        check: "sender"

    },
    {
        id: 3,
        message: "So what’s the plan for today",
        check: "receiver"


    },
    {
        id: 4,
        message: "I’m fine how about you? What are you doing?",
        check: "sender"
    },
    {
        id: 5,
        message: "Hello Man, How are you!",
        check: "receiver",
    },
    {
        id: 2,
        message: "Would be awesome!",
        check: "sender"

    },
    {
        id: 3,
        message: "So what’s the plan for today",
        check: "receiver"


    },
    {
        id: 4,
        message: "I’m fine how about you? What are you doing?",
        check: "sender"
    },
]
const ChatScreen = (props) => {
    return (
        <View style={styles.container}>
            <Header
                     midImage
                left LeftImage ImageName={iconPath.backIcon}
                imageWidth={wp(14)} imageWidth={wp(44)}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack(null)}
            />
          
          <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ flex: 1, marginTop:20 }}>
                    <FlatList
                        data={ChatData}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <View>
                                {item.check === "receiver" ?
                                    <View style={styles.recevierContainer}>
                                        <View style={styles.recevierInnerContainer}>
                                            <Text style={styles.receiverTxt}>{item.message}</Text>
                                        </View>
                                    </View>
                                    :
                                    <View style={styles.senderContainer}>
                                        <View style={styles.senderInnerContainer}>
                                            <Text style={styles.senderTxt}>{item.message}</Text>
                                        </View>

                                    </View>}
                            </View>)}
                    />
                </View>

            </ScrollView>

            <KeyboardAvoidingView style={styles.avoidContainer}
                behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <View style={styles.inputContainer}>

                    <TextInput
                        placeholderTextColor={Colors.darkBlack}
                        placeholder={"Type your message here..."}
                        multiline={false}
                        underlineColorAndroid="transparent"
                        style={styles.inputField} />
                    {/* <TouchableOpacity >
                        <Image source={Images.Attachment} style={styles.attachmentIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={Images.Send} style={styles.sendIcon} />
                    </TouchableOpacity> */}
                </View>
            </KeyboardAvoidingView>

        </View>
    )
}
export default ChatScreen;
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
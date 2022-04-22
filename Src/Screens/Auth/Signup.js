import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, Switch, ScrollView, TouchableOpacity } from 'react-native'
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import { Colors } from '../../Constants/Colors';
import { saveData } from '../../firebase/utility';
import auth from '@react-native-firebase/auth';
import Apptext from '../../Components/Apptext';
import Swiper from 'react-native-swiper';


const Signup = (props) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mailChk, setMailChk] = useState(false);
    const [passChk, setPassChk] = useState(false);
    const [tickChk, setTckChk] = useState(false);
    const [duplicateEmail, setDuplicateEmail] = useState(false);
    const [weakPass, setWeakPass] = useState(false);
    const [badFormat, setBadFormat] = useState(false);


    const checkValues = () => {
        if (email === "" && password === "") {
            setMailChk(true)
            setPassChk(true)
        }
        else if (email === "") {
            setMailChk(true)
        }
        else if (password === "") {
            setPassChk(true)
        }
        else if(mailChk === true){
            setMailChk(true)
        }
        else {
            console.log("Sign Up Called")
            props.navigation.navigate("CompleteProfile", {email, password})
            // signUp(email, password, isEnabled)
        }
    }
   

    const ValidateEmail = (inputText) => {
        console.log(inputText)
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
             setMailChk(false)
            return true;
        }
        else {
            setMailChk(true)
            return false;
        }
    }


    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: wp(7), width: "100%", flex: .79 }}>
                <Image source={iconPath.Logo} style={{ width: wp(70), height: wp(20), resizeMode: "contain", alignSelf: "center", marginTop: wp(20) }}></Image>
                <ResponsiveText size="h5" fontFamily={fonts.Montserrat_Bold} textAlign={"center"} margin={[wp(3), 0, wp(6), 0]}>{"Signup"}</ResponsiveText>
                <InputField
                    keyboardType="email-address"
                    placeholder={"Email"}
                    placeholderTextColor={"lightgray"}
                    secureText
                    RightImage
                    newImage={iconPath.tick}
                    rightImageWidth={wp(8.5)}
                    rightImageHeight={wp(8.5)}
                    onChangeText={(txt) => {
                        setEmail(txt)
                        setMailChk(false)
                        ValidateEmail(txt)

                    }}
                />

                {mailChk ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Please Enter Valid Email</Apptext>
                </View> : null}
                {duplicateEmail ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        The email address is already in use by another account.</Apptext>
                </View> : null}
                {badFormat ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        The email address is badly formatted</Apptext>
                </View> : null}

                <InputField
                    // keyboardType="email-address"
                    placeholder={"●●●●●●"}
                    placeholderTextColor={"lightgray"}
                    secureText
                    secureTextEntry={true}
                    RightImage
                    newImage={iconPath.tick}
                    rightImageWidth={wp(8.5)}
                    rightImageHeight={wp(8.5)}
                    marginTopp={wp(5)}
                    onChangeText={(txt) => {
                        setPassword(txt)
                        setPassChk(false)
                    }}
                />

                {passChk ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Please Enter Strong Password</Apptext>
                </View> : null}
                {weakPass ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Password should be at least 6 characters</Apptext>
                </View> : null}

                {/* <View style={{ flexDirection: "row", justifyContent: "space-between",
                 marginTop: wp(3), paddingHorizontal: wp(4), alignItems: "center" }}>
                    <ResponsiveText size="h9" textAlign={"center"} margin={[0, 0, 0, 0]}>
                    {"Private Profile"}</ResponsiveText>
                    <Switch
                        style={{ transform: [{ scaleX: .7 }, { scaleY: .7 }] }}
                        trackColor={{ false: "#767577", true: Colors.red }}
                        thumbColor={"#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setIsEnabled(!isEnabled)}
                        value={isEnabled}
                    />
                </View> */}
                <ResponsiveText size="h9" textAlign={"center"} margin={[wp(6), 0, 0, 0]}>{"1 / 2"}</ResponsiveText>
                <View style={{ paddingHorizontal: wp(22) }}>
                    <Button
                        onPress={() => checkValues()}
                        // onPress={() =>props.navigation.navigate("CompleteProfile")}
                        Text={'Next'}
                        marginTop={wp(2)}
                        marginHorizontal={wp(20)}
                        borderRadius={35}
                        height={wp(11)}
                    />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "center", marginTop: wp(8) }}>
                    <ResponsiveText size="h9" textAlign={"center"}>{"Already have an account?"}</ResponsiveText>
                    <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
                        <ResponsiveText size="h9" textAlign={"center"} color={Colors.red}>{" Click here to login."}</ResponsiveText>
                    </TouchableOpacity>
                </View>
                <View style={{height:wp(5)}}>

                </View>

            </View>
            {/* <View style={{ flex: .21, backgroundColor: Colors.red, width: "100%", paddingVertical: wp(5), paddingHorizontal: wp(10) }}>
                <ResponsiveText size="h4" fontFamily={fonts.Montserrat_Bold} color={"#fff"} textAlign={"center"} margin={[wp(5), 0, 0, 0]}>{"Heading"}</ResponsiveText>
                <ResponsiveText size="h9" color={"#fff"} textAlign={"center"} margin={[wp(4), 0, wp(8), 0]} padding={0, wp(0), 0, wp(0)}>{"Any tips’ related text will go her it could be 2 or three screens"}</ResponsiveText>
                
                <Image source={iconPath.dots} style={{ width: wp(20), height: wp(5), resizeMode: "contain", alignSelf: "center", }}></Image>
            </View> */}
            <View style={{
                flex: .21, backgroundColor: Colors.red, width: "100%",
                paddingVertical: wp(5), paddingHorizontal: wp(10)
            }}>
                <Swiper 
                 style={styles.wrapper}
                 showsButtons={false}
                 dotColor={"white"}
                 loop={true}
                 autoplay={true}
                 activeDotColor={"white"}
                 activeDotStyle={{height:15, width:15, borderRadius:20}}
                 >
                    <View style={styles.slide1}>
                    <ResponsiveText size="h4" fontFamily={fonts.Montserrat_Bold} 
                    color={"#fff"} textAlign={"center"} margin={[wp(5), 0, 0, 0]}>{"Heading"}</ResponsiveText>
                    <ResponsiveText size="h9" color={"#fff"} textAlign={"center"} 
                    margin={[wp(4), 0, wp(8), 0]} padding={0, wp(0), 0, wp(0)}>
                        {"Any tips’ related text will go her it could be 2 or three screens"}</ResponsiveText>
                   
                    </View>
                    <View style={styles.slide2}>
                    <ResponsiveText size="h4" fontFamily={fonts.Montserrat_Bold} 
                    color={"#fff"} textAlign={"center"} margin={[wp(5), 0, 0, 0]}>{"Heading 2"}</ResponsiveText>
                    <ResponsiveText size="h9" color={"#fff"} textAlign={"center"} 
                    margin={[wp(4), 0, wp(8), 0]} padding={0, wp(0), 0, wp(0)}>
                        {"Any tips’ related text will go her it could be 2 or three screens"}</ResponsiveText>
                   
                    </View>

                    <View style={styles.slide3}>
                    <ResponsiveText size="h4" fontFamily={fonts.Montserrat_Bold} 
                    color={"#fff"} textAlign={"center"} margin={[wp(5), 0, 0, 0]}>{"Heading 2"}</ResponsiveText>
                    <ResponsiveText size="h9" color={"#fff"} textAlign={"center"} 
                    margin={[wp(4), 0, wp(8), 0]} padding={0, wp(0), 0, wp(0)}>
                        {"Any tips’ related text will go her it could be 2 or three screens"}</ResponsiveText>
                   
                    </View>
                    
                </Swiper>
            </View>

        </ScrollView>
    )
}
export default Signup;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: "center"
    },
    scrollContainer: {
        flexGrow: 1
    },
    wrapper:{
        height:wp(40),
        width:'100%',
    },
    slide1: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#97CAE5'
    },
    slide3: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
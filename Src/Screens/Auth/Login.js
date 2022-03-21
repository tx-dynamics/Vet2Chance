import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, ScrollView,ActivityIndicator } from 'react-native'
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import { Colors } from '../../Constants/Colors';
import { getData } from '../../firebase/utility';
import Apptext from '../../Components/Apptext';
import auth from '@react-native-firebase/auth';
import Snackbar from 'react-native-snackbar';


const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [mailChk, setMailChk] = useState(false);
    const [passChk, setPassChk] = useState(false);
    const [duplicateEmail, setDuplicateEmail] = useState(false);
    const [weakPass, setWeakPass] = useState(false);
    const [badFormat, setBadFormat] = useState(false);
    const [noUser, setNoUser] = useState(false);
    const [isLoading, setLoading] = useState(false);


    const checkValues = () => {
        if (email === "" && password === "") {
            setMailChk(true)
            setPassChk(true)
        }
        else if (email === "") {
            setMailChk(true)
            setPassChk(false)
        }
        else if (password === "") {
            setPassChk(true)
            setMailChk(false)
        }
        else {
            console.log("Sign IN Called")
            signIn(email, password)
        }

    }

    const signIn = async (email, password) => {

        let success = true;
        setLoading(true)
        console.log("LoginValues", email, password)

        await auth().signInWithEmailAndPassword(email, password)
            .then(async user => {
                setMailChk(false)
                setPassChk(false)
                setWeakPass(false)
                setBadFormat(false)
                setDuplicateEmail(false)
                let userinfo = await getData('Users', user.user.uid);
                var user1 = auth().currentUser;
                console.log(user1)
                props.navigation.navigate("Drawer")
                setLoading(false)
                // props.navigation.navigate("SignUp")
            })
            .catch(function (error) {
                success = false;
                setLoading(false)
                console.log(error.code + ':: ' + error.message);
                if (error.code === 'auth/email-already-in-use') {
                    setDuplicateEmail(true)
                }
                else if (error.code === 'auth/user-not-found') {
                    setNoUser(true)
                    setWeakPass(false)
                    setBadFormat(false)

                }
                else if (error.code === 'auth/invalid-email') {
                    setBadFormat(true)
                    setWeakPass(false)
                    setNoUser(false)

                }
                else if (error.code === 'auth/wrong-password') {
                    setWeakPass(true)
                    console.log(error.code)
                    setPassChk(false)
                    setBadFormat(false)
                    setNoUser(false)

                }
                else {
                    Snackbar.show({
                        text: error.code,
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor:Colors.yellowColor
                      });
                    // Alert.alert(error.code)
                }
            });
        return success;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={{ paddingHorizontal: wp(7), width: "100%", flex: .79 }}>
                <Image source={iconPath.Logo} style={{ width: wp(70), height: wp(20), resizeMode: "contain", alignSelf: "center", marginTop: wp(20) }}></Image>
                <ResponsiveText size="h5" fontFamily={fonts.Montserrat_Bold} textAlign={"center"} margin={[wp(3), 0, wp(6), 0]}>{"Login"}</ResponsiveText>
                <InputField
                    keyboardType="email-address"
                    placeholder={"Email"}
                    secureText
                    RightImage
                    newImage={iconPath.tick}
                    rightImageWidth={wp(8.5)}
                    rightImageHeight={wp(8.5)}
                    onChangeText={(txt) => {
                        setEmail(txt)
                        setMailChk(false)
                    }}
                />
                {mailChk ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Please Must Enter Email Address</Apptext>
                </View> : null}
                {duplicateEmail ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        The email address is already in use by another account.</Apptext>
                </View> : null}
                {badFormat ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        The email address is badly formatted</Apptext>
                </View> : null}
                {noUser ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        There is no user record found with this email
                    </Apptext>
                </View> : null}
                <InputField
                    // keyboardType="email-address"
                    placeholder={"●●●●●●"}
                    placeholderTextColor={Colors.red}
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
                        Please Must Enter Password</Apptext>
                </View> : null}
                {weakPass ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        The password is weak or the user enter invalid password.
                    </Apptext>
                </View> : null}
                
            {isLoading ?
                <ActivityIndicator size={"small"} color={Colors.red} />
                :
                
                <View style={{ paddingHorizontal: wp(22) }}>
                    <Button
                        onPress={() =>
                            checkValues()
                        }
                        Text={'Login'}
                        marginTop={wp(15)}
                        marginHorizontal={wp(20)}
                        borderRadius={35}
                        height={wp(12)}
                    />
                </View>
}
            <View style={{ paddingHorizontal: wp(22) }}>
                    <Button
                        onPress={() => props.navigation.navigate("SignUp")}
                        Text={'Signup'}
                        marginTop={wp(4)}
                        marginHorizontal={wp(20)}
                        borderRadius={35}
                        height={wp(11)}
                        TextColor={Colors.red}
                        borderColor={Colors.red}
                        backgroundColor={Colors.background}
                    />
                </View>
                
            </View>
            <View style={{ flex: .21, backgroundColor: Colors.red, width: "100%", paddingVertical: wp(5), paddingHorizontal: wp(10) }}>
                <ResponsiveText size="h4" fontFamily={fonts.Montserrat_Bold} color={"#fff"} textAlign={"center"} margin={[wp(5), 0, 0, 0]}>{"Heading"}</ResponsiveText>
                <ResponsiveText size="h9" color={"#fff"} textAlign={"center"} margin={[wp(4), 0, wp(8), 0]} padding={0, wp(0), 0, wp(0)}>{"Any tips’ related text will go her it could be 2 or three screens"}</ResponsiveText>
                <Image source={iconPath.dots} style={{ width: wp(20), height: wp(5), resizeMode: "contain", alignSelf: "center", }}></Image>
            </View>

        </ScrollView>
    )
}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: "center"
    },
    scrollContainer: {
        flexGrow: 1
    }
})

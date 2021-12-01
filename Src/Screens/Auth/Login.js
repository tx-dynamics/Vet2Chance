import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import { Colors } from '../../Constants/Colors';


const Login = (props) => {
    return (
        <View style={styles.container}>
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
                />

                <InputField
                    keyboardType="email-address"
                    placeholder={"●●●●●●"}
                    placeholderTextColor={Colors.red}
                    secureText
                    RightImage
                    newImage={iconPath.tick}
                    rightImageWidth={wp(8.5)}
                    rightImageHeight={wp(8.5)}
                    marginTopp={wp(5)}
                />
                <View style={{ paddingHorizontal: wp(22) }}>
                    <Button
                        Text={'Login'}
                        marginTop={wp(15)}
                        marginHorizontal={wp(20)}
                        borderRadius={35}
                        height={wp(12)}
                    />
                </View>
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

        </View>
    )
}
export default Login;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        alignItems: "center"
    },
})
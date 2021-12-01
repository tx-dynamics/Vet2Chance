import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, StatusBar, Switch } from 'react-native'
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import { Colors } from '../../Constants/Colors';
import CheckBox from '@react-native-community/checkbox';

const CompleteProfile = (props) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <View style={styles.container}>
            <Header midtitle title={"Complete Your Profile"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack()}
            />
            <View style={{ paddingHorizontal: wp(7), width: "100%", flex: .79, paddingTop: wp(40) }}>

                <InputField
                    keyboardType="email-address"
                    placeholder={"Username*"}
                />
                <InputField
                    keyboardType="email-address"
                    placeholder={"Select a Region*"}
                    secureText
                    RightImage
                    newImage={iconPath.down}
                    rightImageWidth={wp(3)}
                    rightImageHeight={wp(4)}
                    marginRight={wp(4)}
                    marginTopp={wp(6)}
                />

                <View style={{ flexDirection: "row", marginTop: wp(5) , alignItems:"center"}}>
                    <CheckBox
                        style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
                        tintColors={{ false: Colors.red, true: Colors.red }}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <ResponsiveText size="h9" textAlign={"center"} margin={[0,0,0,-3]}>{"I agree to the"}</ResponsiveText>
                    <ResponsiveText size="h9" textAlign={"center"} color={Colors.red}>{" Terms and Conditions"}</ResponsiveText>
                </View>

                <ResponsiveText size="h9" textAlign={"center"} margin={[wp(38), 0, 0, 0]}>{"2/ 2"}</ResponsiveText>
                <View style={{ paddingHorizontal: wp(22) }}>
                    <Button
                        onPress={() => props.navigation.navigate("Drawer")}
                        Text={'Signup'}
                        marginTop={wp(2)}
                        marginHorizontal={wp(20)}
                        borderRadius={35}
                        height={wp(11)}
                    />
                </View>


            </View>
        </View>
    )
}
export default CompleteProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
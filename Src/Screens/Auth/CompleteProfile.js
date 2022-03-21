import React, { useState } from 'react'
import { View,ScrollView, Text, StyleSheet, Image, Alert, StatusBar, Switch } from 'react-native'
import ResponsiveText from '../../Components/RnText';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';
import { wp } from '../../Helpers/Responsiveness';
import InputField from '../../Components/InputField';
import Button from '../../Components/Button';
import Header from '../../Components/Header';
import { Colors } from '../../Constants/Colors';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker';
import Apptext from '../../Components/Apptext';
import auth from '@react-native-firebase/auth';
import { saveData } from '../../firebase/utility';
import Snackbar from 'react-native-snackbar';


const CompleteProfile = (props) => {

    const dat = props?.route?.params;
    console.log("Details Page", dat.email)

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [nameChk, setNameChk] = useState(false);
    const [itemsChk, setItemsChk] = useState(false);
    const [isTick, setTick] = useState(false);

    const [value, setValue] = useState('Select a Region*');
    const [items, setItems] = useState([
        { tag: 'Bank', label: "Select a Region*", value: 'Select a Region*' },
    ]);

    console.log(items)

    const signUp = async () => {

        if (name === "" && toggleCheckBox === false && items === "") {
            setNameChk(true)
            setItemsChk(true)
            setTick(true)
        }
        else if (name === "") {
            setNameChk(true)
            console.log("name error")
        }
        else if (items === "") {
            setItemsChk(true)
            console.log("items error")

        }
        else if (toggleCheckBox === false) {
            setTick(true)
            console.log("Tick error")
        }
        else {
            console.log("Sign Up Called")
            // signUp(email, password, isEnabled)
            let success = true;
            await auth()
                .createUserWithEmailAndPassword(dat?.email, dat?.password)
                .then(async user => {
                    let Details = {
                        email: dat?.email,
                        fullName: name,
                        Region: items,
                        Terms: toggleCheckBox,
                        isPrivate: dat?.isEnabled,
                    };

                    console.log(Details)
                    await saveData('Users', user.user.uid, Details);
                    console.log(user);
                    props.navigation.navigate("Login")
                    // Alert.alert("Account Created")
                    Snackbar.show({
                        text: 'Account Created',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor:Colors.yellowColor
                      });

                })
                .catch(function (error) {
                    success = false;
                    console.log(error)
                    Snackbar.show({
                        text: error.code,
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor:Colors.yellowColor
                      });
                    // Alert.alert(error.code)
                    props.navigation.navigate("SignUp")
                    
                });
            return success;
        }
    }


    return (
        <View style={styles.container}>
            <Header midtitleCenter title={"Complete Your Profile"}
                left LeftImage ImageName={iconPath.backIcon}
                leftImageWidth={wp(4)} leftImageHeight={wp(4)}
                leftPress={() => props.navigation.goBack(null)}
            />
            <ScrollView style={{ paddingHorizontal: wp(7), width: "100%", flex: .79, paddingTop: wp(40) }}>

                <InputField
                    keyboardType="email-address"
                    placeholder={"Username*"}
                    onChangeText={(e) => {
                        let value = e
                        value = value.replace(/[^A-Za-z]/ig, '')
                        setName(value)
                        setNameChk(false)

                    }}
                />
                {nameChk ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Please Enter Name</Apptext>
                </View> : null}
                <View></View>
                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    maxHeight={300}
                    dropDownMaxHeight={300}
                    containerStyle={{ height: 50 }}
                    style={{
                        color: "red",
                        // backgroundColor: "orange",
                        borderWidth: 1,
                        marginTop: 15,
                        borderRadius: 35,
                        borderColor: Colors.red
                    }}
                    labelStyle={{
                        fontFamily: fonts.Montserrat,
                        fontSize: 16,
                        color: "#00000099",
                        fontWeight: '400',
                    }}
                    arrowColor={Colors.red}
                    activeLabelStyle={{ color: Colors.red }}
                    selectedLabelStyle={{ color: Colors.red }}
                />
                {/* <InputField
                    keyboardType="email-address"
                    placeholder={"Select a Region*"}
                    secureText
                    RightImage
                    newImage={iconPath.down}
                    rightImageWidth={wp(3)}
                    rightImageHeight={wp(4)}
                    marginRight={wp(4)}
                    marginTopp={wp(6)}
                /> */}
                {itemsChk ? <View style={{ marginHorizontal: wp(5), marginTop: wp(7) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Please Must Select Value From DropDown</Apptext>
                </View> : null}
                <View style={{ flexDirection: "row", marginTop: wp(10), alignItems: "center" }}>
                    <CheckBox
                        style={{ transform: [{ scaleX: .6 }, { scaleY: .6 }] }}
                        tintColors={{ false: Colors.red, true: Colors.red }}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => {
                            setToggleCheckBox(newValue)
                            setTick(false)
                        
                        }}
                    />
                    <ResponsiveText size="h9" textAlign={"center"} margin={[0, 0, 0, -3]}>{"I agree to the"}</ResponsiveText>
                    <ResponsiveText size="h9" textAlign={"center"} color={Colors.red}>{" Terms and Conditions"}</ResponsiveText>
                </View>
                {isTick ? <View style={{ marginHorizontal: wp(5), marginTop: wp(2) }}>
                    <Apptext style={{ fontSize: 10, color: "red" }}>
                        Please Agree to Terms & Conditions First</Apptext>
                </View> : null}
                <ResponsiveText size="h9" textAlign={"center"} margin={[wp(38), 0, 0, 0]}>{"2/ 2"}</ResponsiveText>
                <View style={{ paddingHorizontal: wp(22) }}>
                    <Button
                        onPress={() =>
                            signUp()
                        }
                        Text={'Signup'}
                        marginTop={wp(2)}
                        marginHorizontal={wp(20)}
                        borderRadius={35}
                        height={wp(11)}
                    />
                </View>


            </ScrollView>
        </View>
    )
}
export default CompleteProfile;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
})
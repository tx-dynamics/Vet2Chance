import React from 'react'
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native'
import { iconPath } from '../Constants/icon';
import { hp, wp } from '../Helpers/Responsiveness';
import { Colors } from '../Constants/Colors';

const Splash = () => {
    return (
        <>
            <StatusBar backgroundColor={"#D4C739"} barStyle={'dark-content'} />
            <View style={styles.container}>
                <View style={[styles.triangleCorner]} />
                <Image source={iconPath.Logo} style={{ width: wp(88), height: wp(75), resizeMode: "contain" }}></Image>
            </View>
        </>
    )
}
export default Splash;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: "center",
        alignItems: "center"
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: wp(100),
        borderTopWidth: hp(100),
        borderRightColor: "transparent",
        borderTopColor: "#D4C739",
        position: "absolute"
    },
})
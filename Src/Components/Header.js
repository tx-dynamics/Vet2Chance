import React from 'react'
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import { iconPath } from '../Constants/icon';

import { Colors } from '../Constants/Colors';
import Fonticon from '../Constants/FontIcon';
import { wp } from '../Helpers/Responsiveness';
import ResponsiveText from './RnText';
import { fonts } from '../Constants/Fonts';

const Header = (props) => {
    return (
        <View style={{ height: 50, alignItems: "center", flexDirection: "row", justifyContent: "space-between", backgroundColor: Colors.red }}>
            {props.halfBlack &&
                <View style={{ backgroundColor: Colors.black, position: "absolute", width: wp(50), right: 0, height: "100%" }} />
            }
            {props.left &&
                <Pressable style={{ paddingLeft: wp(4) }} onPress={props.leftPress}>
                    {props.LeftImage ?
                        <Image source={props.ImageName} style={{ width: props.leftImageWidth ? props.leftImageWidth : wp(6.5), height: props.leftImageHeight ? props.leftImageHeight : wp(6.5), resizeMode: "contain" }} />
                        :
                        <Fonticon type={props.LeftIconType} name={props.LeftIconName} size={wp(7)} color={Colors.black} />}
                </Pressable>
            }
            {props.midImage &&
                <View style={{ position: "absolute", width: "100%", alignItems: "center" }}>
                    <Image source={iconPath.Logo} style={{ width: props.imageWidth ? props.imageWidth : wp(15), height: props.imageHeight ? props.imageHeight : wp(15), resizeMode: "contain" }} />
                </View>}
            {props.midtitle &&
                <View style={{  flex:1, marginStart: wp(14)}}>
                    <ResponsiveText color={"#fff"} size="header" fontFamily={fonts.Montserrat_Bold}>{props.title}</ResponsiveText>
                </View>}
            {props.right &&
                <Pressable onPress={props.RightPress}
                    style={{ paddingRight: wp(4) }}>
                    <Fonticon type={props.RightIconType} name={props.RightIconName} size={wp(6.7)} color={Colors.black} />
                </Pressable>
            }
               {props.search &&
                <Pressable style={{ paddingRight: wp(4) }} onPress={props.searchPress}>
                    {props.SearchImage ?
                        <Image source={props.SearchImageName} style={{ width: props.searchImageWidth ? props.searchImageWidth : wp(6.5), height: props.searchImageHeight ? props.searchImageHeight : wp(6.5), resizeMode: "contain" }} />
                        :
                        <Fonticon type={props.LeftIconType} name={props.LeftIconName} size={wp(7)} color={Colors.black} />}
                </Pressable>
            }
        </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
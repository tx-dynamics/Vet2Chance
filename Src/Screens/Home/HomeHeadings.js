import React from 'react'
import { View, Text, Image, } from 'react-native'

import ResponsiveText from '../../Components/RnText';
import { wp } from '../../Helpers/Responsiveness';
import { Colors } from '../../Constants/Colors';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';


export default function HomeHeadings(props) {
    return (
        <View style={{ flexDirection: "row", paddingLeft: wp(6), marginTop: props.marginTop ?  props.marginTop : wp(6) , alignItems: "center" }}>
            <Image source={props.imageName} style={{ width: wp(4), height: wp(4), resizeMode: "contain" }} />
            <ResponsiveText size={"h6"} fontFamily={fonts.Montserrat_Bold} color={Colors.red} margin={[wp(0), 0, wp(0), 5]}>{props.textTitle}</ResponsiveText>
        </View>
    )
}

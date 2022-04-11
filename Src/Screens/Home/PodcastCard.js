import React from 'react'
import { View, Text, Image } from 'react-native'

import ResponsiveText from '../../Components/RnText';
import { Colors } from '../../Constants/Colors';
import { wp } from '../../Helpers/Responsiveness';
import { fonts } from '../../Constants/Fonts';
import { iconPath } from '../../Constants/icon';

export default function PodcastCard(props) {
    return (
        <View style={{ flexDirection: "row" }}>
            <Image 
            source={iconPath.podcastProd}
            // source={props.img}
            style={{ width: wp(17),
                 height: wp(17), resizeMode: "contain", borderRadius: 15 }} />
            <View style={{ marginLeft: wp(3.5), paddingVertical: wp(2), 
                justifyContent: "space-between" }}>
                <ResponsiveText size={"h8"} fontFamily={fonts.Montserrat_Bold} margin={[wp(0), 0, 0, 0]}>
                    {props.Name}
                    </ResponsiveText>
                <ResponsiveText size={"h9"} margin={[wp(0), 0, 0, 0]}>{props.by}</ResponsiveText>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ResponsiveText size={"h9"} color={'#9F9F9F'} margin={[0, 0, 0, 12]}>{props.time}</ResponsiveText>
            </View>
        </View>
    )
}

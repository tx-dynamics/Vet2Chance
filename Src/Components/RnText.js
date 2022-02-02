import React from 'react';
import {Text} from 'react-native';
import { Colors } from '../Constants/Colors';
import { fonts } from '../Constants/Fonts';
import {handleMargin, handlePadding} from '../Constants/theme';
import {wp} from '../Helpers/Responsiveness';

const ResponsiveText = ({
  children,
  color,
  size,
  fontFamily,
  margin,
  position,
  padding,
  numberOfLines,
  style,
  textAlign,
  cutText,
  alignSelf,
  fontWeight,
  //sizes
  ...props
}) => {
  return (
    <Text
      {...props}
      numberOfLines={numberOfLines}
      style={[
        {...styles.text},
        // props.style,
        size && styles[size] ? styles[size] : wp(size),
        margin ? handleMargin(margin) : undefined,
        padding ? handlePadding(padding) : undefined,
        alignSelf ? alignSelf : undefined,
        position && {alignSelf: position},
        textAlign && {textAlign: textAlign},
        cutText && {textDecorationLine: 'line-through'},
        {fontWeight: fontWeight ? fontWeight : "400"},

        {color: color ? color : Colors.black },
        {fontFamily: fontFamily ? fontFamily : fonts.Montserrat},
      ]}>
      {children}
    </Text>
  );
};
const styles = {
  text: {
    fontFamily: fonts.Montserrat,
    fontSize: 14,
  },
  h0: {fontSize: wp(10)},
  h1: {fontSize: wp(9)},
  h2: {fontSize: wp(8)},
  h3: {fontSize: wp(7)},
  h4: {fontSize: wp(6)},
  h5: {fontSize: wp(5)},
  h6: {fontSize: wp(4.5)},
  h7: {fontSize: wp(4)},
  h8: {fontSize: wp(3.5)},
  h9: {fontSize: wp(3)},
  h10: {fontSize: wp(2.5)},
  h11: {fontSize: wp(2.3)},
  h12: {fontSize: wp(2)},
  h13: {fontSize: wp(1.5)},
  h14: {fontSize: wp(5.5)},
  h15: {fontSize: wp(2.75)},
  h16: {fontSize: wp(3.3)},
  header: {fontSize: wp(4.5)},
};
export default ResponsiveText;

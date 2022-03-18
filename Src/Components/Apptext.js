import React from "react";
import { Text, StyleSheet } from "react-native";

function Apptext({ children, style, ...otherprops }) {
  return (
    <Text style={[styles.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text:{
    color: "black",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
  }
})

export default Apptext;

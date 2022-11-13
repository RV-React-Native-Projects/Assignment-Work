import { StyleSheet, Text, View } from "react-native";
import React from "react";
import theme from "../../../Theme";

export default function AppText(props) {
  const {
    size = 14,
    fontWeight = "400",
    color = "#000",
    fontStyle = "normal",
    style,
    children,
    fontFamily = theme.Secondary_Font,
    onPress,
  } = props || {};
  return (
    <Text
      style={{
        fontSize: size,
        fontWeight: fontWeight,
        fontStyle: fontStyle,
        color: color,
        fontFamily: fontFamily,
        ...style,
      }}
      onPress={onPress}
    >
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({});

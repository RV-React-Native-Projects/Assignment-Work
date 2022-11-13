import { View, TouchableOpacity } from "react-native";
import React from "react";
import AppText from "../Text/AppText";
import theme from "../../../Theme";
import ActivityIndicator from "../ActivityIndicator/ActivityIndicator";

export function Icon({ icon, styles }) {
  return <>{icon ? <View style={{ ...styles }}>{icon}</View> : null}</>;
}

export default function AppButton(props) {
  const {
    onPress,
    Title = "Button",
    Outlined,
    color = theme.primary,
    LinkButton,
    textColor = theme.primaryButtonText,
    fontWeight = "600",
    height = 40,
    width = LinkButton ? null : "100%",
    fontSize = 18,
    rounded,
    borderRadius = rounded ? 50 : 3,
    borderWidth = 1,
    borderColor = color,
    textStyle,
    leftIcon,
    IcontoEnd,
    rightIcon,
    Dotted,
    Dashed,
    borderStyle = Outlined && Dotted
      ? "dotted"
      : Outlined && Dashed
      ? "dashed"
      : "solid",
    loading = false,
    indicatorBackgroundColor = theme.primary,
    indicatorColor = theme.white,
    style,
  } = props || {};
  return (
    <>
      {loading ? (
        <View
          style={{ alignItems: "center", justifyContent: "center", ...style }}
        >
          <ActivityIndicator
            backgroundColor={indicatorBackgroundColor}
            indicatorColor={indicatorColor}
          />
        </View>
      ) : (
        <>
          {LinkButton ? (
            <TouchableOpacity
              onPress={onPress}
              style={{ alignSelf: "center", ...style }}
            >
              <AppText
                color={color}
                size={fontSize}
                extraStyle={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  ...textStyle,
                }}
                fontWeight={fontWeight}
              >
                {Title}
              </AppText>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPress}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: height,
                width: width,
                backgroundColor: Outlined || LinkButton ? "transparent" : color,
                borderRadius: borderRadius,
                borderWidth: Outlined ? borderWidth : 0,
                borderColor: Outlined ? borderColor : null,
                borderStyle: borderStyle,
                ...style,
              }}
            >
              {leftIcon ? (
                <View
                  style={[
                    { marginRight: 10 },
                    IcontoEnd && { position: "absolute", left: 15 },
                  ]}
                >
                  {leftIcon}
                </View>
              ) : null}
              <AppText
                color={Outlined ? color : textColor}
                size={fontSize}
                extraStyle={{
                  textAlign: "center",
                  textTransform: "capitalize",
                  ...textStyle,
                }}
                fontWeight={fontWeight}
              >
                {Title}
              </AppText>
              {rightIcon ? (
                <View
                  style={[
                    { marginLeft: 10 },
                    IcontoEnd && { position: "absolute", right: 15 },
                  ]}
                >
                  {rightIcon}
                </View>
              ) : null}
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}

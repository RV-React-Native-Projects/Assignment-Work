import React from "react";
import { StatusBar, View, ScrollView, Dimensions } from "react-native";
import { KeyboardAvoidingView } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import theme from "../../../Theme";

const { windowHieght } = Dimensions.get("screen").height;

export default function AppContainer(props) {
  const {
    children,
    statusBarColor = theme.primary,
    barStyle = "light-content",
    hidden = false,
    translucent = true,
    hideStatusbar = false,
    style,
    ContainerStyle,
  } = props || {};
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      {hideStatusbar ? null : (
        <View
          style={{
            backgroundColor: statusBarColor,
            height: insets.top,
          }}
        >
          <StatusBar
            barStyle={barStyle}
            StatusBarStyle={barStyle}
            backgroundColor={statusBarColor}
            animated={true}
            StatusBarAnimation="slide"
            hidden={hidden}
            translucent={translucent}
          />
        </View>
      )}
      <ScrollView
        style={{ flex: 1, minHeight: windowHieght, ...style }}
        contentContainerStyle={{ paddingBottom: 150, ...ContainerStyle }}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

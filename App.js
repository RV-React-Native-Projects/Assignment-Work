// import "react-native-gesture-handler";

import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/Navigation/Navigation";
import * as Font from "expo-font";

function App() {
  LogBox.ignoreLogs(["Require cycle:"]);

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Poppins_Regular: require("./src/Assets/fonts/Poppins-Black.ttf"),
        Poppins_Regular_Italic: require("./src/assets/fonts/Poppins-BlackItalic.ttf"),
        Poppins_Italic: require("./src/assets/fonts/Poppins-Italic.ttf"),
        Poppins_Bold: require("./src/assets/fonts/Poppins-Bold.ttf"),
        Poppins_BoldItalic: require("./src/assets/fonts/Poppins-BoldItalic.ttf"),
        Poppins_Medium: require("./src/assets/fonts/Poppins-Medium.ttf"),
        Poppins_Medium_Italic: require("./src/assets/fonts/Poppins-MediumItalic.ttf"),
        Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
        Poppins_Extra_Bold: require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
        Poppins_Extra_Bold_Italic: require("./src/assets/fonts/Poppins-ExtraBoldItalic.ttf"),
        Poppins_Light: require("./src/assets/fonts/Poppins-Light.ttf"),
        Poppins_Light_Italic: require("./src/assets/fonts/Poppins-LightItalic.ttf"),
        Poppins_SemiBold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
        Poppins_SemiBold_Italic: require("./src/assets/fonts/Poppins-SemiBoldItalic.ttf"),
        Poppins_Thin: require("./src/assets/fonts/Poppins-Thin.ttf"),
        Poppins_Thin_Italic: require("./src/assets/fonts/Poppins-ThinItalic.ttf"),
      }))();
  }, []);

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

export default App;

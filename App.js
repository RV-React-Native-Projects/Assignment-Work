// import "react-native-gesture-handler";

import React, { useEffect } from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/Navigation/Navigation";
import * as Font from "expo-font";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import usersManager from "./src/features/Users/usersManager";

function App() {
  LogBox.ignoreLogs(["Require cycle:"]);

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Poppins_Regular: require("./src/Assets/fonts/Poppins_Black.ttf"),
        Poppins_Regular_Italic: require("./src/Assets/fonts/Poppins_BlackItalic.ttf"),
        Poppins_Italic: require("./src/Assets/fonts/Poppins_Italic.ttf"),
        Poppins_Bold: require("./src/Assets/fonts/Poppins_Bold.ttf"),
        Poppins_BoldItalic: require("./src/Assets/fonts/Poppins_BoldItalic.ttf"),
        Poppins_Medium: require("./src/Assets/fonts/Poppins_Medium.ttf"),
        Poppins_Medium_Italic: require("./src/Assets/fonts/Poppins_MediumItalic.ttf"),
        Poppins: require("./src/Assets/fonts/Poppins_Regular.ttf"),
        Poppins_Extra_Bold: require("./src/Assets/fonts/Poppins_ExtraBold.ttf"),
        Poppins_Extra_Bold_Italic: require("./src/Assets/fonts/Poppins_ExtraBoldItalic.ttf"),
        Poppins_Light: require("./src/Assets/fonts/Poppins_Light.ttf"),
        Poppins_Light_Italic: require("./src/Assets/fonts/Poppins_LightItalic.ttf"),
        Poppins_SemiBold: require("./src/Assets/fonts/Poppins_SemiBold.ttf"),
        Poppins_SemiBold_Italic: require("./src/Assets/fonts/Poppins_SemiBoldItalic.ttf"),
        Poppins_Thin: require("./src/Assets/fonts/Poppins_Thin.ttf"),
        Poppins_Thin_Italic: require("./src/Assets/fonts/Poppins_ThinItalic.ttf"),
      }))();
  }, []);

  // useEffect(() => {
  //   let params = {
  //     phone: "9479789211",
  //     signature: "xyz",
  //   };
  //   usersManager.sendOTP(
  //     params,
  //     (response) => {
  //       console.log("REs===>", JSON.stringify(response));
  //     },
  //     (error) => {
  //       console.log("Coupons response : ", JSON.stringify(error, null, 2));
  //     }
  //   );
  // }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <PaperProvider>
          <MyStack />
        </PaperProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

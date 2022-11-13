// import "react-native-gesture-handler";

import React, { useEffect, useContext } from "react";
import { View, Text, LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./src/Navigation/Navigation";
import * as Font from "expo-font";
import { Provider as PaperProvider } from "react-native-paper";
import { NativeBaseProvider } from "native-base";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import usersManager from "./src/features/Users/usersManager";
// import { MessagesContextProvider } from "./src/contexts/MessageContext";
import { ThemeContextProvider } from "./src/contexts/ThemeContext";
import { UserContextProvider } from "./src/contexts/UserContext";

function App() {
  LogBox.ignoreLogs(["Require cycle:"]);

  useEffect(() => {
    (async () =>
      await Font.loadAsync({
        Poppins_Regular: require("./assets/fonts/Poppins_Black.ttf"),
        Poppins_Regular_Italic: require("./assets/fonts/Poppins_BlackItalic.ttf"),
        Poppins_Italic: require("./assets/fonts/Poppins_Italic.ttf"),
        Poppins_Bold: require("./assets/fonts/Poppins_Bold.ttf"),
        Poppins_BoldItalic: require("./assets/fonts/Poppins_BoldItalic.ttf"),
        Poppins_Medium: require("./assets/fonts/Poppins_Medium.ttf"),
        Poppins_Medium_Italic: require("./assets/fonts/Poppins_MediumItalic.ttf"),
        Poppins: require("./assets/fonts/Poppins_Regular.ttf"),
        Poppins_Extra_Bold: require("./assets/fonts/Poppins_ExtraBold.ttf"),
        Poppins_Extra_Bold_Italic: require("./assets/fonts/Poppins_ExtraBoldItalic.ttf"),
        Poppins_Light: require("./assets/fonts/Poppins_Light.ttf"),
        Poppins_Light_Italic: require("./assets/fonts/Poppins_LightItalic.ttf"),
        Poppins_SemiBold: require("./assets/fonts/Poppins_SemiBold.ttf"),
        Poppins_SemiBold_Italic: require("./assets/fonts/Poppins_SemiBoldItalic.ttf"),
        Poppins_Thin: require("./assets/fonts/Poppins_Thin.ttf"),
        Poppins_Thin_Italic: require("./assets/fonts/Poppins_ThinItalic.ttf"),
      }))();
  }, []);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {/* <MessagesContextProvider> */}
        <ThemeContextProvider>
          <UserContextProvider>
            <SafeAreaProvider>
              <PaperProvider>
                <MyStack />
              </PaperProvider>
            </SafeAreaProvider>
          </UserContextProvider>
        </ThemeContextProvider>
        {/* </MessagesContextProvider> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;

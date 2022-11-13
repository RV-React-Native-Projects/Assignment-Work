import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import svgs from "../../All_Svgs";
import images from "../../All_Images";
import AppText from "../components/Text/AppText";
import theme from "../../Theme";

var windowHieght = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

export default function LandingPage(props) {
  const goToLoginPage = () => {
    props?.navigation.navigate("SignUp_Page");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          zIndex: -2,
          position: "absolute",
          height: "104%",
          width: "100%",
        }}
      >
        <View style={{ flex: 0.7, zIndex: 10 }}>
          <svgs.Main_BG height={windowHieght / 1.09} width={windowWidth + 10} />
        </View>

        <LinearGradient
          colors={["#EAF0FF10", "#868BFE"]}
          style={{ flex: 0.5 }}
        ></LinearGradient>
      </View>
      <View>
        <View
          style={{
            backgroundColor: "#CCCBFF",
            borderRadius: 12,
            width: 90,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 30,
            margin: 20,
            height: 25,
          }}
        >
          <AppText
            fontFamily={theme.Primary_SemiBold}
            size={16}
            fontStyle="semibold"
            fontWeight="600"
          >
            TASKOO
          </AppText>
        </View>
        <Image
          source={images.Landing}
          style={{ height: windowHieght / 2, width: windowWidth }}
          resizeMode="contain"
        />
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <AppText size={30} fontWeight="bold" color="#18306D">
            Manage every Task
          </AppText>
          <AppText
            size={16}
            fontWeight="bold"
            fontStyle="semibold"
            color="#1B21B5"
            style={{
              width: 160,
              textAlign: "center",
              lineHeight: 25,
              marginTop: 20,
            }}
          >
            Balance work, life and everything in between with Taskoo
          </AppText>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => goToLoginPage()}
          style={{
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: windowHieght / 1.27,
            left: 12,
            right: 0,
          }}
        >
          <LinearGradient
            colors={["#FFA19B", "#FB4949"]}
            style={{
              alignItems: "center",
              justifyContent: "center",
              width: 60,
              height: 60,
              borderRadius: 100,
            }}
          >
            <svgs.Next_Icon height={50} width={60} />
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

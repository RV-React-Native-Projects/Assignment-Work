import React, { useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import svgs from "../../All_Svgs";
import images from "../../All_Images";
import AppText from "../components/Text/AppText";
import theme from "../../Theme";
import usersManager from "../features/Users/usersManager";
import Utils from "../common/Utils";
import { useToast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserContext from "../contexts/UserContext";

var windowHieght = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

export default function Otp(props) {
  const [phone, setPhone] = useState(props?.route?.params?.phone || "");
  const [otp, setOTP] = useState("");
  const toast = useToast();
  const { setUser } = useContext(UserContext);

  const onPressTermConditions = () => {
    console.log("onPressTermConditions==>");
  };

  const userLoggedInToolTip = () => {
    toast.show({
      title: `Logged in Successfully!`,
      placement: "bottom",
      backgroundColor: "green.500",
    });
  };

  const getUserDetails = (token) => {
    let params = {
      phone: `%2B91${phone}`,
      token: token,
    };
    usersManager.getUserDetails(
      params,
      (response) => {
        console.log("getUserDetails Res===>", JSON.stringify(response));
        saveUserInfo(JSON.stringify(response?.data?.data?.user));
        setUser(response?.data?.data?.user);
        props.navigation.navigate("Home_Page");
        userLoggedInToolTip();
      },
      (error) => {
        console.log("getUserDetails error : ", JSON.stringify(error, null, 2));
        props.navigation.navigate("Name_Page", {
          token: token,
          phone: phone,
          otp: otp,
        });
      }
    );
  };

  const saveUserInfo = async (value) => {
    try {
      await AsyncStorage.setItem("taskoo_user", value);
    } catch (e) {
      console.log("Error in storing==>", e);
    }
  };

  const onPressVerifyOTP = () => {
    if (otp?.length >= 4) {
      let params = {
        phone: `+91${phone}`,
        code: JSON.parse(otp),
      };
      usersManager.verifyOTP(
        params,
        (response) => {
          console.log(" verifyOTP Res===>", JSON.stringify(response));
          getUserDetails(response?.data?.data?.token);
        },
        (error) => {
          console.log("verifyOTP error : ", JSON.stringify(error, null, 2));
          alert("OTP Incorrect");
        }
      );
    } else alert("OTP Incorrect");
  };

  return (
    <LinearGradient colors={["#868BFE", "#FFFFFF"]} style={{ flex: 1 }}>
      <View style={{ flex: 1, position: "absolute", bottom: 0, zIndex: 0 }}>
        <svgs.SignUp_BG height={windowHieght / 1.09} width={windowWidth + 10} />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.4,
            justifyContent: "center",
            margin: 20,
          }}
        >
          <AppText size={36} fontWeight="bold" color="#FFFFFF">
            Sign UP
          </AppText>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 40,
          }}
        >
          <View style={{}}>
            <AppText size={20} fontWeight="bold" color="#18306D">
              OTP
            </AppText>
            <TextInput
              style={styles.input}
              onChangeText={setOTP}
              value={otp}
              placeholder="1567"
              keyboardType="numeric"
              // autoFocus={true}
              numberOfLines={1}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => onPressVerifyOTP()}
              style={{
                padding: 10,
                backgroundColor: "#868BFE",
                borderRadius: 50,
                height: 50,
                marginTop: 20,
              }}
            >
              <AppText
                size={25}
                fontWeight="bold"
                color="#fff"
                style={{ textAlign: "center" }}
              >
                Verify
              </AppText>
            </TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
              }}
            >
              <AppText
                size={16}
                fontStyle="normal"
                fontWeight="400"
                color="#18306D"
                fontFamily={theme.Font_Light}
                style={{ textAlign: "center", width: 200 }}
              >
                By signing up you agree to the{" "}
                <AppText
                  onPress={() => onPressTermConditions()}
                  size={16}
                  fontWeight="semibold"
                  color="#18306D"
                >
                  Terms and Conditions
                </AppText>{" "}
                of Taskoo
              </AppText>
            </View>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  input: {
    overflow: "hidden",
    height: 50,
    marginTop: 10,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    padding: 10,
    paddingLeft: 15,
    width: windowWidth - 90,
    maxWidth: 400,
    borderRadius: 50,
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 15,
  },
});

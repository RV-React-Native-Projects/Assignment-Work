import React, { useState } from "react";
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

var windowHieght = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

export default function SignUp(props) {
  const [phone, setPhone] = useState("");
  const toast = useToast();

  const onPressTermConditions = () => {
    console.log("onPressTermConditions==>");
  };

  const messageToolTip = () => {
    toast.show({
      title: `OTP sent to +91 - ${phone}`,
      placement: "bottom",
    });
  };

  const onPressSendOTP = () => {
    if (Utils.isValidPhoneNumber(phone)) {
      let params = {
        phone: phone,
        signature: "xyz",
      };
      usersManager.sendOTP(
        params,
        (response) => {
          console.log("Res===>", JSON.stringify(response));
          props.navigation.navigate("Otp_Page", { phone: phone });
          messageToolTip();
        },
        (error) => {
          console.log("Coupons response : ", JSON.stringify(error, null, 2));
          alert("Please Enter a Valid Phone Number");
        }
      );
    } else alert("Please Enter a Valid Phone Number");
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
              Phone
            </AppText>
            <TextInput
              style={styles.input}
              onChangeText={setPhone}
              value={phone}
              placeholder="XXXXX XXXXX"
              keyboardType="numeric"
              // autoFocus={true}
              numberOfLines={1}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={onPressSendOTP}
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
                Get OTP
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
    letterSpacing: 10,
  },
});

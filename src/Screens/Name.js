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

export default function Name(props) {
  const { phone, otp, token } = props?.route?.params || {};
  const [name, setName] = useState("");
  const toast = useToast();
  const { user, setUser } = useContext(UserContext);

  const onPressTermConditions = () => {
    console.log("onPressTermConditions==>");
  };

  const userCreatedToolTip = () => {
    toast.show({
      title: `Congratulations ! New User Created.`,
      placement: "bottom",
      backgroundColor: "green.500",
    });
  };

  const createNewUser = () => {
    if (name?.length > 0) {
      let params = {
        phone: `+91${phone}`,
        name: name,
        token: token,
      };
      usersManager.createNewUser(
        params,
        (response) => {
          console.log("createNewUser Res===>", JSON.stringify(response));
          saveUserInfo(JSON.stringify(response?.data?.data));
          setUser(response?.data?.data);
          props.navigation.navigate("Home_Page", { phone: phone });
          userCreatedToolTip();
        },
        (error) => {
          console.log(
            "getUserDetails error : ",
            JSON.stringify(error, null, 2)
          );
          alert("Please enter a valid Name");
        }
      );
    } else alert("Please enter a valid Name");
  };

  const saveUserInfo = async (value) => {
    try {
      await AsyncStorage.setItem("taskoo_user", value);
    } catch (e) {
      console.log("Error in storing==>", e);
    }
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
              What is your name?
            </AppText>
            <TextInput
              style={styles.input}
              onChangeText={setName}
              value={name}
              placeholder="Enter Name"
              keyboardType="name-phone-pad"
              // autoFocus={true}
              numberOfLines={1}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => createNewUser()}
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
                Let's Go
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
    textAlign: "left",
    letterSpacing: 5,
  },
});

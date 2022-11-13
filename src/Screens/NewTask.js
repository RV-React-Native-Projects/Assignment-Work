import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  TextInput,
} from "react-native";
import UserContext from "../contexts/UserContext";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "../../All_Images";
import AppText from "../components/Text/AppText";
import theme from "../../Theme";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import usersManager from "../features/Users/usersManager";
import { useFocusEffect } from "@react-navigation/native";
import svgs from "../../All_Svgs";
import { useToast } from "native-base";
import moment from "moment";

var windowHieght = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

export default function Home(props) {
  const { user, isUserLoggedIn, setUser } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [discription, setDiscription] = useState("");
  const [currnetMode, setCurrnetMode] = useState("work");
  const toast = useToast();

  const messageToolTip = () => {
    toast.show({
      // title: `OTP sent to +91 - ${phone}`,
      placement: "bottom",
      backgroundColor: "green.500",
    });
  };

  console.log("USER New task===>", user);

  const goToHome = () => {
    props?.navigation?.navigate("Home_Page");
  };

  const onPressCreateNewTask = (token) => {
    if (title?.length > 0) {
      let params = {
        phone: user?.phone,
        name: title,
        details: discription,
        category: currnetMode,
        expiry_date: moment().add(2, "days"),
      };
      usersManager.createNewTask(
        params,
        (response) => {
          console.log("createNewTask Res===>", JSON.stringify(response));
          // setTasks(response?.data?.data?.task);
        },
        (error) => {
          console.log("createNewTask error : ", JSON.stringify(error, null, 2));
          alert(error.message);
        }
      );
    } else alert("Task's Title is Required");
  };

  // useFocusEffect(
  //   useCallback(() => {
  //     getAllUserTasks();
  //   }, [user])
  // );

  const logOut = () => {
    setUser(null);
    removeUser();
  };

  return (
    <LinearGradient
      colors={["#868BFE", "#FFFFFF"]}
      style={{ flex: 1, width: "100%", height: "100%" }}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* User info */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 20,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={images.user}
              style={{ height: 55, width: 55, borderRadius: 50 }}
              resizeMode="cover"
            />
            <AppText
              fontFamily={theme.Primary_SemiBold}
              size={22}
              fontStyle="semibold"
              fontWeight="600"
              color={theme.white}
              numberOfLines={1}
              style={{ marginLeft: 5, maxWidth: 300 }}
            >
              New task
            </AppText>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            backgroundColor: "#FAFAFA",
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <ScrollView style={{ flex: 1, height: "100%", width: "100%" }}>
            <View
              style={{
                margin: 20,
                justifyContent: "center",
              }}
            >
              {/* <AppText size={20} fontWeight="bold" color="#18306D">
                Phone
              </AppText> */}
              <TextInput
                style={styles.input}
                onChangeText={setTitle}
                value={title}
                placeholder="Title"
                keyboardType="default"
                // autoFocus={true}
                numberOfLines={1}
              />

              <TextInput
                style={styles.inputArea}
                multiline={true}
                numberOfLines={4}
                onChangeText={setDiscription}
                value={discription}
              />
            </View>
          </ScrollView>
          <View
            style={{
              backgroundColor: theme.white,
              height: 60,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: 20,
              borderRadius: 50,
              ...theme.Shadowdark,
            }}
          >
            <TouchableOpacity onPress={() => setCurrnetMode("work")}>
              <svgs.Timer
                color={currnetMode === "work" ? "#FDBA5D" : "none"}
                stroke={currnetMode === "work" ? "none" : "#526066"}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrnetMode("case")}>
              {currnetMode === "case" ? (
                <svgs.SuitcaseFilled color={"#FDBA5D"} />
              ) : (
                <svgs.Suitcase />
              )}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCurrnetMode("personal")}>
              <svgs.Person
                color={currnetMode === "personal" ? "#FDBA5D" : "none"}
                stroke={currnetMode === "personal" ? "none" : "#526066"}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              height: 50,
              margin: 20,
              marginTop: 0,
              alignItems: "center",
              ...theme.Shadowdark,
            }}
            activeOpacity={0.7}
            onPress={() => onPressCreateNewTask()}
          >
            <LinearGradient
              colors={["#F82626", "#FD393960"]}
              style={{
                width: "80%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 200,
              }}
            >
              <AppText
                fontFamily={theme.Primary_SemiBold}
                size={24}
                fontStyle="semibold"
                fontWeight="600"
                color={theme.white}
                numberOfLines={1}
                style={{ marginLeft: 5, maxWidth: 300 }}
              >
                CREATE
              </AppText>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
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
    width: windowWidth - 40,
    // maxWidth: 400,
    borderRadius: 50,
    fontSize: 20,
    textAlign: "left",
    letterSpacing: 2,
  },
  inputArea: {
    overflow: "hidden",
    height: 250,
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#E5E5E5",
    padding: 10,
    paddingLeft: 15,
    width: windowWidth - 40,
    // maxWidth: 400,
    borderRadius: 50,
    fontSize: 18,
    textAlign: "left",
    letterSpacing: 1,
  },
});

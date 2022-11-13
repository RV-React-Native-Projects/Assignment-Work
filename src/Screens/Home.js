import React, { useState, useContext, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
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

var windowHieght = Dimensions.get("window").height;
var windowWidth = Dimensions.get("window").width;

export default function Home(props) {
  const { user, isUserLoggedIn, setUser } = useContext(UserContext);
  const [tasks, setTasks] = useState([]);

  console.log("USER Home===>", user);

  const goToCreateNewTask = () => {
    props?.navigation?.navigate("New_Task_Page");
  };

  const removeUser = async () => {
    try {
      await AsyncStorage.removeItem("taskoo_user");
    } catch (e) {
      console.log("removeItem error : ", e);
    }
    console.log("Done.");
  };
  const getAllUserTasks = (token) => {
    var phoneNumber = user?.phone?.substring(3);
    let params = {
      phone: `%2B91${phoneNumber}`,
    };
    usersManager.getAllTasks(
      params,
      (response) => {
        console.log("getUserDetails Res===>", JSON.stringify(response));
        setTasks(response?.data?.data?.task);
      },
      (error) => {
        console.log("getUserDetails error : ", JSON.stringify(error, null, 2));
      }
    );
  };

  useFocusEffect(
    useCallback(() => {
      getAllUserTasks();
    }, [user])
  );

  const logOut = () => {
    setUser(null);
    removeUser();
  };

  return (
    <LinearGradient
      colors={["#F89623", "#FFFFFF"]}
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
              {user?.name}
            </AppText>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => logOut()}
            style={{
              height: 40,
              width: 40,
              borderRadius: 50,
              backgroundColor: theme.white,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AntDesign name="poweroff" color={theme.warning} size={30} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            height: "100%",
            width: "100%",
            backgroundColor: theme.white,
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
          }}
        >
          <TouchableOpacity
            style={{ height: 50, margin: 20, alignItems: "center" }}
            activeOpacity={0.7}
            onPress={() => goToCreateNewTask()}
          >
            <LinearGradient
              colors={["#F82626", "#FD393960"]}
              style={{
                width: "100%",
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
          <ScrollView>
            {tasks?.length > 0 ? (
              <View>
                
              </View>
            ) : (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <svgs.Person_BG
                  height={windowHieght - 400}
                  width={windowWidth - 100}
                />
                <AppText
                  fontFamily={theme.Primary_SemiBold}
                  size={28}
                  fontStyle="semibold"
                  fontWeight="600"
                  color="#D9D9D9"
                  style={{ marginLeft: 5, maxWidth: 300, textAlign: "center" }}
                >
                  Create a task to get started
                </AppText>
              </View>
            )}
          </ScrollView>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({});

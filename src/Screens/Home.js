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
import ChartUi from "../Screen_Component/Home/ChartUi";
import TaskList from "../Screen_Component/Home/TaskList";

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
      props?.navigation?.popToTop();
    } catch (e) {
      console.log("removeItem error : ", e);
    }
    console.log("Done.");
  };
  const completeTask = (text) => {
    if (user?.phone) {
      var phoneNumber = user?.phone?.substring(3);
      let params = {
        phone: `+91${phoneNumber}`,
        uniquelink: text,
        status: "completed",
      };
      usersManager.updateTask(
        params,
        (response) => {
          console.log("updateTask Res===>", JSON.stringify(response));
          getAllUserTasks();
        },
        (error) => {
          console.log("updateTask error : ", JSON.stringify(error, null, 2));
        }
      );
    }
  };

  const getAllUserTasks = () => {
    if (user?.phone) {
      var phoneNumber = user?.phone?.substring(3);
      let params = {
        phone: `%2B91${phoneNumber}`,
      };
      usersManager.getAllTasks(
        params,
        (response) => {
          console.log("getAllTasks Res===>", JSON.stringify(response));
          setTasks(response?.data?.data?.task);
        },
        (error) => {
          console.log("getAllTasks error : ", JSON.stringify(error, null, 2));
        }
      );
    }
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

  console.log("tasks===>", tasks);

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
            backgroundColor: "#FAFAFA",
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
          <ScrollView
            style={{ minHeight: "100%", flex: 1 }}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 200 }}
          >
            {tasks?.length > 0 ? (
              <View>
                <AppText
                  fontFamily={theme.Primary_SemiBold}
                  size={26}
                  fontStyle="semibold"
                  fontWeight="600"
                  color="#1B21B5"
                  numberOfLines={1}
                  style={{ margin: 15, marginTop: 5 }}
                >
                  Consistancy
                </AppText>
                <ChartUi data={tasks} />
                <View style={{ marginHorizontal: 15 }}>
                  {tasks?.map((item, index) => (
                    <TaskList
                      key={index}
                      item={item}
                      onPressComplete={(e) => completeTask(e)}
                    />
                  ))}
                </View>
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

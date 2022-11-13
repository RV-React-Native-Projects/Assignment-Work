import React, { useContext, useEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import NewTask from "../Screens/NewTask";
import Name from "../Screens/Name";
import Otp from "../Screens/Otp";
import SignUp from "../Screens/SignUp";
import LandingPage from "../Screens/LandingPage";
import UserContext from "../contexts/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  const { user, setUser, isUserLoggedIn } = useContext(UserContext);

  const getUserInfo = async (value) => {
    try {
      const userInfo = await AsyncStorage.getItem("taskoo_user");
      // console.log("USERinfo===>", userInfo);
      setUser(JSON.parse(userInfo));
    } catch (e) {
      console.log("Error in storing==>", e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={isUserLoggedIn() ? "Home_Page" : "Landin_Page"}
    >
      <Stack.Screen name="Landin_Page" component={LandingPage} />
      <Stack.Screen name="SignUp_Page" component={SignUp} />
      <Stack.Screen name="Otp_Page" component={Otp} />
      <Stack.Screen name="Name_Page" component={Name} />
      <Stack.Screen name="Home_Page" component={Home} />
      <Stack.Screen name="New_Task_Page" component={NewTask} />
    </Stack.Navigator>
  );
}

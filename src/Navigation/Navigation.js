import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import NewTask from "../Screens/NewTask";
import Name from "../Screens/Name";
import Otp from "../Screens/Otp";
import SignUp from "../Screens/SignUp";

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Landin_Page"
    >
      <Stack.Screen name="Landin_Page" component={LandingPage} />
      <Stack.Screen name="Home_Page" component={Home} />
      <Stack.Screen name="New_Task_Page" component={NewTask} />
      <Stack.Screen name="Name_Page" component={Name} />
      <Stack.Screen name="Otp_Page" component={Otp} />
      <Stack.Screen name="SignUp_Page" component={SignUp} />
    </Stack.Navigator>
  );
}

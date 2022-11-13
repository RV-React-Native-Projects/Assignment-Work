import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import UserContext from "../contexts/UserContext";

export default function Home({ navigation }) {
  const { user, isUserLoggedIn } = useContext(UserContext);
  console.log("USER==>", user);
  console.log("isUserLoggedIn==>", isUserLoggedIn());
  const goToAboutPage = () => {
    navigation.navigate("About");
  };
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Page</Text>
      <TouchableOpacity onPress={() => goToAboutPage()}>
        <Text>Go to About</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

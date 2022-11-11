import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Home({ navigation }) {
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

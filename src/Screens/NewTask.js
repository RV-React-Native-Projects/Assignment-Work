import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NewTask({ navigation }) {
  const goToHomePage = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>NewTask Page</Text>
      <TouchableOpacity onPress={() => goToHomePage()}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});

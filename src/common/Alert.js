import React from "react";
import { Platform, Alert } from "react-native";

export const alertBox = (
  title,
  message = "",
  buttons = [
    {
      text: "ok",
      style: "cancel",
    },
  ],
  isCancelable
) => {
  if (Platform.OS != "web") {
    Alert.alert(title, message, [...buttons], { cancelable: isCancelable });
  } else {
    alert(`${title} \n${message}`);
  }
};
export const confirmBox = (title, message, buttons, isCancelable, callBack) => {
  if (Platform.OS != "web") {
    Alert.alert(title, message, [...buttons], { cancelable: isCancelable });
  } else {
    callBack(confirm(`${title} \n${message}`));
  }
};

export const AsyncAlert = async (
  title,
  message,
  successTitle,
  cancelTitle,
  isCancelable
) =>
  new Promise((resolve) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: successTitle,
          onPress: () => {
            resolve("yes");
          },
        },
        {
          text: cancelTitle,
          onPress: () => resolve("cancel"),
          style: "cancel",
        },
      ],
      { cancelable: isCancelable }
    );
  });

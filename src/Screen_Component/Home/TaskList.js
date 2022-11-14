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
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import AppText from "../../components/Text/AppText";
import theme from "../../../Theme";
import svgs from "../../../All_Svgs";
import moment from "moment";

export default function TaskList(props) {
  const { item, onPressComplete } = props || {};
  const [show, setShow] = useState(false);

  console.log("ITEmmm==>", item);

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => setShow(!show)}
      style={{
        width: "100%",
        padding: 15,
        backgroundColor: "#FFF",
        ...theme.Shadowdark,
        borderRadius: 15,
        marginTop: 15,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppText
          fontFamily={theme.Primary_SemiBold}
          size={22}
          fontStyle="semibold"
          fontWeight="600"
          color="#868BFE"
          numberOfLines={2}
          style={{ width: "80%" }}
        >
          {item?.name}
        </AppText>
        <svgs.Save height={35} width={35} />
      </View>
      <View style={{ display: show ? "flex" : "none" }}>
        <AppText> {item?.details}</AppText>
      </View>
      <View>
        <AppText
          fontFamily={theme.Primary_SemiBold}
          size={16}
          fontStyle="semibold"
          fontWeight="600"
          color={theme.grayText}
          numberOfLines={1}
        >
          {moment(item?.date_created).format("lll")} -{" "}
          {moment(item?.expiry_date).format("lll")}
        </AppText>
      </View>
      <View
        style={{
          width: "100%",
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 10,
          display: show && item?.status === "active" ? "flex" : "none",
        }}
      >
        <TouchableOpacity
          style={{
            width: "47%",
            height: 30,
            justifyContent: "center",
            borderRadius: 20,
            overflow: "hidden",
            ...theme.Shadowdark,
          }}
          activeOpacity={0.7}
          onPress={() => setShow(false)}
        >
          <LinearGradient
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            colors={["#FD3939", "#FD393990"]}
          >
            <AppText
              fontFamily={theme.Primary_SemiBold}
              size={16}
              fontStyle="semibold"
              fontWeight="600"
              color={theme.white}
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                marginTop: 7,
              }}
            >
              Ignore
            </AppText>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "47%",
            height: 30,
            justifyContent: "center",
            borderRadius: 20,
            overflow: "hidden",
            ...theme.Shadowdark,
          }}
          activeOpacity={0.7}
          onPress={() => onPressComplete(item?.uniquelink)}
        >
          <LinearGradient
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            colors={["#8AF9A2", "#8AF9A2"]}
          >
            <AppText
              fontFamily={theme.Primary_SemiBold}
              size={16}
              fontStyle="semibold"
              fontWeight="600"
              color={theme.white}
              style={{
                textAlign: "center",
                width: "100%",
                height: "100%",
                marginTop: 7,
              }}
            >
              Complete
            </AppText>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <View
        style={{
          display: show && item?.status === "completed" ? "flex" : "none",
          backgroundColor: theme.success,
          borderRadius: 30,
          overflow: "hidden",
          marginTop: 10,
        }}
      >
        <AppText
          fontFamily={theme.Primary_SemiBold}
          size={16}
          fontStyle="semibold"
          fontWeight="600"
          color={theme.white}
          style={{
            textAlign: "center",
            padding: 5,
          }}
        >
          Already Complete !
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

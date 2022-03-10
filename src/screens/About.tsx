import React from "react";
import {Linking, View, Text as ReactText, StyleSheet} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Layout, Text } from "react-native-rapi-ui";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
    const styles = StyleSheet.create({
        text: {
            color: "white",
            fontSize: 30,
        }
    })

  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>
            Github: <Text onPress={() => Linking.openURL('http://github.com/12Wass')}>12Wass</Text>
        </Text>
      </View>
    </Layout>
  );
}

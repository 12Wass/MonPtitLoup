import React from "react";
import {Linking, View} from "react-native";
import { MainStackParamList } from "../types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {Button, Layout, Text} from "react-native-rapi-ui";
import WerewolfLogo from "../components/utils/WerewolfLogo";

export default function ({
  navigation,
}: NativeStackScreenProps<MainStackParamList, "MainTabs">) {
  return (
    <Layout>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <WerewolfLogo />
          <Button
              style={{ marginTop: 10 }}
              text="Commencer une nouvelle partie"
              status="info"
              onPress={() => {
                  // @ts-ignore
                  navigation.navigate("GameForm");
              }}
          />
      </View>
    </Layout>
  );
}

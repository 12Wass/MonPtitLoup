import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SecondScreen from "../screens/SecondScreen";
import GameForm from "../screens/GameForm";
import MainTabs from "./MainTabs";
import Cards from "../screens/Cards";

const MainStack = createNativeStackNavigator();
const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="MainTabs" component={MainTabs} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
      <MainStack.Screen name="GameForm" component={GameForm} />
      <MainStack.Screen name="Cards" component={Cards} />
    </MainStack.Navigator>
  );
};

export default Main;

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/home";
import React from "react";

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default AppStack;

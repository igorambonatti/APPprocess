import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { SafeAreaProvider } from "react-native-safe-area-context";

import Main from "./pages/Main";
import ProcessList from "./pages/ProcessList";
import Alarm from "./pages/Alarm";
import Light from "./pages/Light";
import AddLight from "./pages/Dashboard/AddLight";

const Stack = createStackNavigator();

function Routes() {
  return (
    <SafeAreaProvider>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="List" component={ProcessList} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="Light" component={Light} />
        <Stack.Screen name="AddLight" component={AddLight} />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
}

export default Routes;

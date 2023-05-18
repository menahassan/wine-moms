import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./components/pages/LoginPage";
import PostDetails from "./components/pages/PostDetails";
import BottomTabNavigator from "./components/elements/BottomTabNavigator";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <SafeAreaProvider>
      {!loggedInUser ? (
        // Render LoginPage if not logged in
        <LoginPage setLoggedInUser={setLoggedInUser} />
      ) : (
        <NavigationContainer screenProps={{ setLoggedInUser }}>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PostDetails"
              component={PostDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}

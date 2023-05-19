import "react-native-gesture-handler";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import PostDetails from "./components/pages/PostDetails";
import BottomTabNavigator from "./components/elements/BottomTabNavigator";
import { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <SafeAreaProvider>
      {!loggedInUser ? (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" options={{ headerShown: false }}>
            {(props) => <LoginPage {...props} setLoggedInUser={setLoggedInUser} />}
            </Stack.Screen>
            <Stack.Screen name="Register" options={{ headerShown: false }}>
            {() => <RegisterPage setLoggedInUser={setLoggedInUser} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Main" options={{ headerShown: false }}>
              {(props) => <BottomTabNavigator {...props} setLoggedInUser={setLoggedInUser} />}
            </Stack.Screen>
            <Stack.Screen
              name="PostDetails"
              options={{ headerShown: false }}
            >
            {(props) => <PostDetails {...props} setLoggedInUser={setLoggedInUser} />}
            </Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}

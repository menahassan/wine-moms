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
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{ backgroundColor: "#845780" }}
          labeled = {false}
        >
          <Tab.Screen
            name="Feed"
            component={HomePage}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            })}
          />
          <Tab.Screen
            name="Explore"
            component={Explore}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="search" color={color} size={26} />
              ),
            })}
          />
          <Tab.Screen
            name="Create"
            component={CreatePost}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="add-box" color={color} size={26} />
              ),
            })}
          />
          <Tab.Screen
            name="Chat"
            component={Chat}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <Icon name="chatbubbles" size={26} color={color} />
              ),
            })}
          />
          <Tab.Screen
            name="User Profile"
            component={UserProfile}
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            })}
          />
        </Tab.Navigator>
      </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}

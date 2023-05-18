import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";

import HomePage from "./components/pages/HomePage";
import UserProfile from "./components/pages/UserProfile";
import Explore from "./components/pages/ExplorePage";
import Chat from "./components/pages/Chat";
import CreatePost from "./components/pages/CreatePost";
import LoginPage from "./components/pages/LoginPage";
import { useState } from "react";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <SafeAreaProvider>
      {!loggedInUser ? (
         // Render LoginPage if not logged in
         <LoginPage setLoggedInUser={setLoggedInUser}/>
      ) : (
      <NavigationContainer>
        <Tab.Navigator
          barStyle={{ backgroundColor: "#845780" }}
          labeled = {false}
        >
          <Tab.Screen
            name="FYP"
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            })}
          >
           {() => <HomePage setLoggedInUser={setLoggedInUser} />}
           </Tab.Screen>
          <Tab.Screen
            name="Explore"
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="search" color={color} size={26} />
              ),
            })}
          >
            {() => <Explore setLoggedInUser={setLoggedInUser} />}
          </Tab.Screen>
          <Tab.Screen
            name="Create"
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="add-box" color={color} size={26} />
              ),
            })}
          >
             {() => <CreatePost setLoggedInUser={setLoggedInUser} />}
          </Tab.Screen>
          <Tab.Screen
            name="Chat"
            options={() => ({
              tabBarIcon: ({ color }) => (
                <Icon name="chatbubbles" size={26} color={color} />
              ),
            })}
          >
             {() => <Chat setLoggedInUser={setLoggedInUser} />}
          </Tab.Screen>
          <Tab.Screen
            name="User Profile"
            options={() => ({
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            })}
          >
             {() => <UserProfile setLoggedInUser={setLoggedInUser} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
      )}
    </SafeAreaProvider>
  );
}

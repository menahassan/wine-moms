import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";

import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import Explore from "../pages/ExplorePage";
import Chat from "../pages/Chat";
import CreatePost from "../pages/CreatePost";

const Tab = createMaterialBottomTabNavigator();

export default function BottomTabNavigator({ navigation, setLoggedInUser }) {
  return (
    <Tab.Navigator barStyle={{ backgroundColor: "#845780" }} labeled={false}>
      <Tab.Screen
        name="FYP"
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" color={color} size={26} />
          ),
        })}
      >
        {() => (
          <HomePage navigation={navigation} setLoggedInUser={setLoggedInUser} />
        )}
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
  );
}

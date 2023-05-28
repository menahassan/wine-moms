import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/Ionicons";
import { createStackNavigator } from "@react-navigation/stack";

import HomePage from "../pages/HomePage";
import UserProfile from "../pages/UserProfile";
import Explore from "../pages/ExplorePage";
import Chat from "../pages/Chat";
import CreatePost from "../pages/CreatePost";
import CommunityPage from "../pages/CommunityPage";
import CreateCommunity from  "../pages/CreateCommunity";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function BottomTabNavigator({ navigation, setLoggedInUser, loggedInUser }) {
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
          <Stack.Navigator>
            <Stack.Screen name="Home" options={{ headerShown: false }}>
              {() => (
                <HomePage
                  navigation={navigation}
                  setLoggedInUser={setLoggedInUser}
                  loggedInUser = {loggedInUser}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="CommunityPage" options={{ headerShown: false }}>
              {() => (
                <CommunityPage
                  navigation={navigation}
                  setLoggedInUser={setLoggedInUser}
                  loggedInUser = {loggedInUser}
                />
              )}
            </Stack.Screen>
            <Stack.Screen name="CreateCommunity" options={{ headerShown: false }}>
              {() => (
                <CreateCommunity
                  navigation={navigation}
                  setLoggedInUser={setLoggedInUser}
                  loggedInUser = {loggedInUser}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
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
        {(props) => <Explore {...props} setLoggedInUser={setLoggedInUser} loggedInUser = {loggedInUser}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Create"
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="add-box" color={color} size={26} />
          ),
        })}
      >
        {() => <CreatePost setLoggedInUser={setLoggedInUser} loggedInUser = {loggedInUser}/>}
      </Tab.Screen>
      <Tab.Screen
        name="Chat"
        options={() => ({
          tabBarIcon: ({ color }) => (
            <Icon name="chatbubbles" size={26} color={color} />
          ),
        })}
      >
        {() => <Chat setLoggedInUser={setLoggedInUser} loggedInUser = {loggedInUser}/>}
      </Tab.Screen>
      <Tab.Screen
        name="User Profile"
        options={() => ({
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="person" color={color} size={26} />
          ),
        })}
      >
        {() => <UserProfile navigation={navigation} setLoggedInUser={setLoggedInUser} loggedInUser = {loggedInUser} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

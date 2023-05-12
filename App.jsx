import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Icon from 'react-native-vector-icons/Ionicons';

import HomePage from "./components/HomePage";
import UserProfile from "./components/UserProfile";
import Explore from './components/ExplorePage';
import Chat from './components/Chat';
import CreatePost from './components/CreatePost';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator barStyle={{ backgroundColor: "#845780" }}>
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
    </SafeAreaProvider>
  );
}

import { Text, ScrollView } from "react-native";
import TopBar from "../elements/TopBar";

export default function UserProfile({setLoggedInUser}) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>
      <Text>User Profile</Text>
    </ScrollView>
  );
}

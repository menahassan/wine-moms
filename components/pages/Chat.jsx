import { Text, ScrollView } from "react-native";
import TopBar from "../elements/TopBar";

export default function Chat({setLoggedInUser}) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>
      <Text>Chat Page</Text>
    </ScrollView>
  );
}

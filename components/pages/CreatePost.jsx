import { Text, ScrollView } from "react-native";
import TopBar from "../elements/TopBar";

export default function CreatePost({setLoggedInUser}) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>
      <Text>CreatePost</Text>
    </ScrollView>
  );
}

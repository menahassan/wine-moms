import { Text, ScrollView } from "react-native";
import TopBar from "../elements/TopBar";

export default function Explore({setLoggedInUser}) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>
      <Text>Explore Page</Text>
    </ScrollView>
  );
}

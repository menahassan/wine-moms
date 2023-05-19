import { Text, ScrollView } from "react-native";
import TopBar from "../elements/TopBar";
import MessageLog from "../elements/MessageLog";

export default function Chat({setLoggedInUser}) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>
      <MessageLog/>
      <MessageLog/>
      <MessageLog/>
      <MessageLog/>
      <MessageLog/>
    </ScrollView>
  );
}

import { Text, ScrollView } from "react-native";
import TopBar from "../elements/TopBar";
import { NavigationContainer } from "@react-navigation/native";

export default function PostDetails({ setLoggedInUser, navigation }) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser} icon="arrow-back-ios" navigation={navigation} />
      <Text>Post Details Page</Text>
    </ScrollView>
  );
}

import { Text, ScrollView} from "react-native";
import TopBar from "../elements/TopBar";
import MessageLog from "../elements/MessageLog";
import { TouchableOpacity } from "react-native-gesture-handler";
import EnclosedButton from "../elements/EnclosedButton";

export default function Chat({setLoggedInUser, navigation }) {
    const handleClick = () => {
        // Eventually have invalid login logic
        navigation.navigate("CommunityPage");
      };
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}></TopBar>
      <EnclosedButton title="arizonamom" onPress={handleClick}/>
    </ScrollView>
  );
}

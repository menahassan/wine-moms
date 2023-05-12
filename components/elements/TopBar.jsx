import { Text, StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function TopBar() {
  return (
  <View style={styles.topContainer}>
    <MaterialIcons name="menu" color={"#ffffff"} size={30} />
    <Text style={styles.appTitle}>wine
    <Text style={[styles.appTitle, styles.boldText]}>moms</Text>
    </Text>
  </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    width: "100%",
    height: 90,
    backgroundColor: "#845780",
    paddingTop: 45,
    paddingLeft: 15
  },
  appTitle: {
    color: "#ffffff",
    paddingLeft: 10,
    fontSize: 22,
    marginTop: -2
  },
  boldText: {
    fontWeight: 600,
  },
});
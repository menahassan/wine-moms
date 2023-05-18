import { Text, StyleSheet, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EnclosedButton from "./EnclosedButton";

export default function TopBar({ setLoggedInUser }) {
  const handleLogout = () => {
    setLoggedInUser("");
  };

  return (
    <View style={styles.topContainer}>
      <MaterialIcons name="menu" color={"#ffffff"} size={30} />
      <Text style={styles.appTitle}>
        wine
        <Text style={[styles.appTitle, styles.boldText]}>moms</Text>
      </Text>
      <View style={styles.logoutContainer}>
        <EnclosedButton
          title="Logout"
          onPress={handleLogout}
          fontSize="10"
        ></EnclosedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    width: "100%",
    height: "10%",
    backgroundColor: "#845780",
    paddingTop: 45,
    paddingLeft: 15,
    paddingBottom: 5,
    paddingRight: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  appTitle: {
    color: "#ffffff",
    fontSize: 22,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 50,
    textAlign: 'center',
  },
  boldText: {
    fontWeight: 600,
  },
});


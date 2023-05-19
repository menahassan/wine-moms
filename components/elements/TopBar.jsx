import { Text, StyleSheet, View, TouchableOpacity, Modal, TouchableWithoutFeedback} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import EnclosedButton from "./EnclosedButton";
import HomePage from "../pages/HomePage";
import { useState } from "react";
import { useNavigationState } from "@react-navigation/native";

export default function TopBar({ setLoggedInUser, icon, navigation }) {
  const [showMenu, setShowMenu] = useState(false);

  const navigationState = useNavigationState((state) => state);

  const handleLogout = () => {
    setLoggedInUser("");
  };

  const handleMenuPress = (icon) => {
    if (icon === "arrow-back-ios") {
      navigation.goBack();
    } else {
      setShowMenu(true);
    }
  };

  const pressCommunityPage = () => {

    navigation.navigate('CommunityPage')
  };

  const pressHome = () => {
    navigation.navigate('Home')
  };

  const pressCreateCommunity= () => {
    navigation.navigate('CreateCommunity')
  };

  const handleOverlayClick = () => {
    setShowMenu(false);
  };

  const Divider = () => {
    return <View style={styles.divider} />;
  };
  return (
    <View style={styles.menuContainer}>
    <View style={styles.topBar}>
    
      <TouchableOpacity>
      {(navigationState.index === 0 || navigationState.index === 1)  && (
        <MaterialIcons name={icon || "menu"} color={"#ffffff"} size={40} onPress={() => handleMenuPress(icon)}/>
        )}
      </TouchableOpacity>
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
    <View>
    <Modal visible={showMenu} transparent animationType="fade" onRequestClose={handleOverlayClick}>
    <TouchableWithoutFeedback onPress={handleOverlayClick}>
            <View style={styles.modalOverlay} />
          </TouchableWithoutFeedback>
        <View style={styles.menu}>
          {/* Render your menu items here */}
          <View><Text style={styles.menuText} onPress={pressHome}>Home</Text><Divider /></View>
          <View><Text onPress={pressCommunityPage} style={styles.menuText}>your<Text style={styles.menuTextBold}>moms</Text></Text><Divider /></View>
          <View><Text style={styles.menuText} onPress={pressCommunityPage}>chef<Text style={styles.menuTextBold}>moms</Text></Text><Divider /></View>
          <View><Text style={styles.menuText} onPress={pressCommunityPage}>arizona<Text style={styles.menuTextBold}>moms</Text></Text><Divider /></View>
          <View><Text style={styles.menuText} onPress={pressCreateCommunity}>Add Community</Text></View>
          </View>
    </Modal>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'column',
  },
  topBar: {
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
    position: "absolute",
    left: 0,
    right: 0,
    top: 50,
    textAlign: "center",
  },
  boldText: {
    fontWeight: 600,
  },
  menu: {
    marginTop: 91,
    width: 155,
    backgroundColor: '#B18BAE',
    height: '32%', // edit this to change height of modal popup
    zIndex: 10,
  },
  menuText: {
    fontSize: 22,
    color: "white",
    padding: 10,
  },
  menuTextBold: {
    fontWeight: "bold",
  },
  modalOverlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
  divider: {
    height: 2,
    backgroundColor: '#845780',
  },
});

import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

const CommunityButton = ({ navigation, title }) => {
  const handleClick = () => {
    // Eventually have invalid login logic
    navigation.navigate("CommunityPage");
  };

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity title={""} onPress={handleClick}>
        <Text style={styles.buttonText}>
          <Text style={styles.boldText}>{title}</Text>
          moms
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#B18BAE",
    borderRadius: 15,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    marginTop: 10,
    marginRight: 16,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
  boldText: {
    fontWeight: 600,
  },
});

export default CommunityButton;

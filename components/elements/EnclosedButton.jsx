import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const EnclosedButton = ({title, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity title={''} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#694066",
    borderRadius: 7,
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 10,
    paddingLeft:10,
    margin: 5,
  },
  buttonText: {
    color: "white",
  }
});

export default EnclosedButton;

import React from "react";
import {
  StyleSheet,
  Button,
  View,
} from "react-native";

const EnclosedButton = ({title, onPress}) => {
  return (
    <View style={styles.buttonContainer}>
      <Button title={title} onPress={onPress} color="white" fontWeight="bold"/>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#694066",
    borderRadius: 7,
    padding: 2,
    margin: 10,
  },
});

export default EnclosedButton;

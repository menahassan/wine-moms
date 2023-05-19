import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const MessageLog = () => {
  return (
    <View style={styles.chat}>
      <Text style = {styles.message}> Hi, how are you doing? It has been a while we should ....</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  chat: {
    backgroundColor: "#EBEBEB",
    width:'100%',
    height: 70,
    marginBottom: 2,
    alignItems: "flex-end",
    paddingLeft: 80,
    paddingTop: 10,
    paddingRight: 10
    
  },
  message:{
    fontSize: 18
  }
});

export default MessageLog;
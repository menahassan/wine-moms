import React from "react";
import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import TopBar from "../elements/TopBar";

const user = require("../../modelData/users.json")[0];

export default function UserProfile({ setLoggedInUser }) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser} />
      <View style={styles.profileContainer}>
        <Image style={styles.coverPhoto} source={{ uri: user.cover_photo }} />
        <View style={styles.profilePhotoContainer}>
          <Image
            style={styles.profilePhoto}
            source={{ uri: user.profile_photo }}
          />
        </View>
        <Text style={styles.userName}>
        <Text style={styles.boldText}>{user.first_name}</Text>
          {` ${user.last_name}`}
        </Text>
        <Text style={styles.description}>
          {user.description}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profilePhotoContainer: {
    position: "absolute",
    top: 185 - 150 / 2, // Half of the cover photo height minus half of the profile photo height
    left: "50%",
    zIndex: 1,
    transform: [{ translateX: -75 }], // Half of the profile photo width
  },
  profilePhoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#FFFFFF",
  },
  coverPhoto: {
    width: "100%",
    height: 185,
    opacity: 0.7,
  },
  profileContainer: {
    width: "100%",
    height: 408,
    backgroundColor: "#B497B1",
    alignItems: "center",
  },
  userName: {
    color: "#FFFFFF",
    fontSize: 27,
    paddingTop: 88,
  },
  boldText: {
    fontWeight: 600,
  },
  description: {
    color: "#FFFFFF",
    fontSize: 17,
    paddingTop: 12,
    paddingHorizontal: 36,
    textAlign: "center"
  },
});

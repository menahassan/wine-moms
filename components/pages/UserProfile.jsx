import React from "react";
import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import TopBar from "../elements/TopBar";
import CommunityButton from "../elements/CommunityButton";

const user = require("../../modelData/users.json")[0];

export default function UserProfile({ navigation, setLoggedInUser }) {
  const handleEditProfile = () => {
    // Eventually have valid
    console.log("handle edit profile");
  };

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
        <Text style={styles.description}>{user.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity title={""} onPress={handleEditProfile}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.communitiesContainer}>
        <Text style={styles.header}>Communities</Text>
        <View style={styles.row}>
          {user.communities.map((title, index) => {
            return (
              <CommunityButton
                key={index}
                title={title}
                navigation={navigation}
              ></CommunityButton>
            );
          })}
        </View>
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
    height: 460,
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
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: "#7E6095",
    borderRadius: 7,
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 22,
    paddingLeft: 22,
    marginTop: 13,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: 600,
  },
  communitiesContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 25,
    fontWeight: 500,
  },
  row: {
    flexDirection: "row",
    flex: 2,
  }
});

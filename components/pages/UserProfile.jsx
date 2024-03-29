import React from "react";
import { useEffect, useState } from "react";
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
import PostCard from "../elements/PostCard";
import axios from "axios";

const qs = require('qs');

export default function UserProfile({ navigation, setLoggedInUser, loggedInUser }) {
  const [currentUser, setCurrentUser] = useState({});

  const HOSTNAME = "https://shining-dogs-2af8207625.strapiapp.com";

  const handleEditProfile = () => {
    // Eventually have valid
    console.log("handle edit profile");
  };

  // get data from current user
  useEffect(() => {
    console.log(currentUser?.profilePhoto);
    const query = qs.stringify(
      {
        populate: {
          posts: {
            populate: ['community', 'createdByUser', 'likedByUsers', 'comments','imageLink'],
          },
          communities: {
            fields: "*"
          },
          profilePhoto: {
            fields: "*"
          },
          coverPhoto: {
            fields: "*"
          }
        },
      },
      {
        encodeValuesOnly: true, // prettify URL
      }
    );
    // get data from backend again, because user object does not store relational data, including images
    axios
      .get(`${HOSTNAME}/api/users/${loggedInUser.user.id}?${query}`)
      .then((response) => {
        setCurrentUser(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser} />
      {currentUser == {}  || !currentUser || !currentUser.firstName ? (
        <></>
      ) : (
        <View>
          <View style={styles.profileContainer}>
            {
              currentUser?.coverPhoto
              ?
              <Image
                style={styles.coverPhoto}
                source={{ uri: `${currentUser.coverPhoto[0].url}` }}
              />
              :
              <></>
            }
            <View style={styles.profilePhotoContainer}>
              {
                currentUser?.profilePhoto
                ?
                <Image
                  style={styles.profilePhoto}
                  source={{ uri: `${currentUser.profilePhoto.url}` }}
                />
                :
                <></>
              }
            </View>
            <Text style={styles.userName}>
              <Text style={styles.boldText}>{currentUser.firstName}</Text>
              {` ${currentUser.lastName}`}
            </Text>
            <Text style={styles.description}>{currentUser.description}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity title={""} onPress={handleEditProfile}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.sectionContainer}>
            <Text style={styles.header}>Communities</Text>
            <View style={styles.row}>
              {currentUser.communities.map((community, index) => {
                return (
                  <CommunityButton
                    key={index}
                    title={community.Name}
                    navigation={navigation}
                  ></CommunityButton>
                );
              })}
            </View>
          </View>
          <View style={[styles.sectionContainer, styles.extraPadding]}>
            <Text style={styles.header}>Recent Posts</Text>
            {currentUser.posts.map((post, index) => {
                return (
                  <View key={index}>
                    <PostCard
                      navigation={navigation}
                      postInfo={post}
                    ></PostCard>
                  </View>
                );
            })}
          </View>
        </View>
      )}
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
  sectionContainer: {
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
  },
  extraPadding: {
    paddingBottom: 20,
  },
});

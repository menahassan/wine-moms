import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import PostDetails from "../pages/PostDetails";
import axios from "axios";

export default function PostCard({ navigation, postInfo, postId, loggedInUser }) {

  const [likedByUser, setLikedByUser] = useState(postInfo.likedByCurrentUser);

  const HOSTNAME = "https://shining-dogs-2af8207625.strapiapp.com";

  var dateDifference =
    new Date().getTime() - new Date(postInfo.timestamp).getTime();
  var daysAgo = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  var hoursAgo = Math.floor(dateDifference / (1000 * 60 * 60));

  const handlePostDetailsPress = () => {
    if (typeof(navigation) !== "undefined") {
      navigation.navigate("PostDetails", {postInfo: postInfo, postId: postId});
    }
  };

  const handleLike = () => {
    console.log(postId);
    console.log(postInfo);
    axios
    .put(`${HOSTNAME}/api/posts/${postId}`, {
      data: {
        attributes: {
          timestamp: new Date()
        }
      }
    })
    .then((response) => {
      console.log("Post liked or unliked");
    })
    .catch((error) => {
      console.log("An error occurred:", error.message);
    });
    setLikedByUser(prevLikedByUser => !prevLikedByUser); // Toggle the value of likedByUser
  }


  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        <Text style={styles.boldText}>
          {postInfo.community.data ? postInfo.community.data.attributes.Name : postInfo.community.Name}
        </Text>
        moms
      </Text>
      <TouchableOpacity onPress={handlePostDetailsPress}>
        {postInfo.image &&  postInfo.imageLink? (
        <Image
        style={styles.postImage}
          source={{ uri: postInfo.imageLink.data ? `${postInfo.imageLink.data.attributes.url}` : `${postInfo.imageLink.url}` }}
        />
        ) : <></>}
        <View style={styles.row}>
          <Text style={styles.profile_pic}>
            {postInfo.anonymous
              ? "Anonymous"
              : `${postInfo.createdByUser.data ? postInfo.createdByUser.data.attributes.firstName : postInfo.createdByUser.firstName} ${postInfo.createdByUser.data ? postInfo.createdByUser.data.attributes.lastName : postInfo.createdByUser.lastName}`}
          </Text>
          <Text style={styles.timestamp}>
            {daysAgo == 0
              ? `Posted ${hoursAgo} hours ago`
              : `Posted ${daysAgo} days ago`}
          </Text>
        </View>
        <Text style={styles.text}>{postInfo.description}</Text>
        <View style={styles.likeBar}>
          {likedByUser ? (
            <MaterialIcons
              style={styles.heartSpacing}
              name="favorite"
              color={"#ff4747"}
              size={22}
              onPress={handleLike}
            />
          ) : (
            <MaterialIcons
              style={styles.heartSpacing}
              name="favorite-border"
              color={"#ff4747"}
              size={22}
              onPress={handleLike}
            />
          )}
          <Text
            style={[styles.text, styles.likeSpacing]}
          >{`${postInfo.likedByUsers.data ? postInfo.likedByUsers.data.length : postInfo.likedByUsers.length} likes`}</Text>
          <Text
            style={[styles.text, styles.commentSpacing]}
          >{`${postInfo.comments.data ? postInfo.comments.data.length : postInfo.comments.length} comments`}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEBEB",
    flexDirection: "column",
    flex: 1,
    borderRadius: 9,
    marginTop: 20,
    marginHorizontal: 20,
    height: "100%",
    paddingVertical: 8,
  },
  row: {
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
  },
  likeBar: {
    flexDirection: "row",
    flex: 3,
    backgroundColor: "#DFD6DE",
  },
  timestamp: {
    fontSize: 10,
    padding: 6,
    paddingHorizontal: 14,
  },
  profile_pic: {
    fontSize: 13,
    padding: 6,
    paddingHorizontal: 14,
    fontWeight: "bold",
  },
  text: {
    fontSize: 13,
    padding: 6,
    paddingHorizontal: 14,
  },
  heartSpacing: {
    paddingLeft: 14,
    paddingTop: 3,
  },
  likeSpacing: {
    paddingLeft: 4,
    paddingRight: 0,
    color: "#616161",
  },
  commentSpacing: {
    paddingLeft: 4,
    paddingRight: 0,
    color: "#898989",
  },
  boldText: {
    fontWeight: 600,
  },
  postImage: {
    width: "100%",
    height: 185,
  },
});

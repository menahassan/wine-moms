import { StyleSheet, Text, ScrollView, View, TextInput} from "react-native";
import TopBar from "../elements/TopBar";
import { NavigationContainer } from "@react-navigation/native";
import EnclosedButton from "../elements/EnclosedButton";
import { useRoute } from "@react-navigation/native";
import PostCard from "../elements/PostCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PostDetails({
  setLoggedInUser,
  navigation,
  loggedInUser,
}) {
  const handleBack = () => {
    navigation.navigate("Home");
  };

  const handlePost = () => {
    navigation.navigate("Home");
  };

  const route = useRoute();
  const { postInfo } = route.params;
  const HOSTNAME = "https://shining-dogs-2af8207625.strapiapp.com";
  const [names, setNames] = useState([]);
  const [comment, onChangeComment] = useState("");

  useEffect(() => {
    const comments = postInfo.comments.data;
    const idList = comments.map(comment => comment.id);
    const namesArray = [];
    const fetchNames = async () => {
      try {
        const promises = idList.map((id) =>
          axios.get(`${HOSTNAME}/api/comments/${id}/?populate=*`)
        );
        const responses = await Promise.all(promises);
        responses.forEach((response) => {
          namesArray.push(
            response.data.data.attributes.author.data.attributes.firstName
          );
        });
        setNames(namesArray);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchNames();
  }, []);

  var dateDifference =
    new Date().getTime() - new Date(postInfo.timestamp).getTime();
  var daysAgo = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  var hoursAgo = Math.floor(dateDifference / (1000 * 60 * 60));

  const getTimeStamp = (comment) => {
    var dateDifference =
    new Date().getTime() - new Date(comment.attributes.timestamp).getTime();
  var daysAgo = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  var hoursAgo = Math.floor(dateDifference / (1000 * 60 * 60));
  if (daysAgo > 0) {
    return `Posted ${daysAgo} days ago`;
  }
  return `Posted ${hoursAgo} hours ago`;
  
  }

  return (
    <ScrollView >
      <TopBar
        setLoggedInUser={setLoggedInUser}
        icon="arrow-back-ios"
        navigation={navigation}
      />
      <PostCard postInfo={postInfo} loggedInUser={loggedInUser}></PostCard>
      {postInfo.comments.data.length > 0 ? (
        postInfo.comments.data.map((comment, index) => {
          return (
            <View key={index}>
              <View style={styles.container}>
                <Text style={styles.username}>
                  {postInfo.anonymous ? "Anonymous" : names[index]}
                </Text>
                <Text style={styles.timestamp}>
                  {getTimeStamp(comment)}
                </Text>
              </View>
              <Text style={styles.content}>
                {comment.attributes.content
                  ? comment.attributes.content
                  : "null"}
              </Text>
              <View
                style={{
                  borderBottomColor: "gray",
                  borderBottomWidth: 1,
                }}
              />
            </View>
          );
        })
      ) : (
        <></>
      )}
      <View style={styles.container_two}>
      <TextInput
        autoCapitalize="none"
        style={styles.input}
        onChangeText={onChangeComment}
        placeholder="Add a comment"
        value={comment}
      />
       <EnclosedButton title="Post" onPress={handlePost}></EnclosedButton>
      </View>
      <EnclosedButton title="Back" onPress={handleBack}></EnclosedButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flex: 2,
    justifyContent: "space-between",
  },
  username: {
    fontSize: 13,
    padding: 6,
    paddingHorizontal: 14,
    fontWeight: "bold",
  },
  content: {
    fontSize: 13,
    padding: 6,
    paddingHorizontal: 14,
  },
  timestamp: {
    fontSize: 10,
    padding: 6,
    paddingHorizontal: 14,
  },
  container_two: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EFECEC",
    color: "#8F8F8F",
    borderColor: "#8F8F8F",
    borderRadius: 7,
    flex: 1,
  },
});

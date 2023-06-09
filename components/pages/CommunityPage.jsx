import { Text, ScrollView, Image, StyleSheet, View } from "react-native";
import TopBar from "../elements/TopBar";
import PostCard from "../elements/PostCard";
import { useEffect, useState } from "react";
import EnclosedButton from "../elements/EnclosedButton";
import { useRoute } from "@react-navigation/native";
import axios from "axios";

export default function CommunityPage({ navigation, setLoggedInUser, loggedInUser}) {
  const [posts, setPosts] = useState({});
  const [communityInfo, setCommunityInfo] = useState({name: "", description: "", rules: ""});
  const HOSTNAME = "https://shining-dogs-2af8207625.strapiapp.com";

  const route = useRoute();
  const { community_name } = route.params;

  const handleBack = () => {
    navigation.navigate("UserProfile");
  };

  useEffect(() => {
    // get data from backend again, because user object does not store relational data, including images
    axios
      .get(`${HOSTNAME}/api/posts?populate=*`)
      .then((response) => {
        let postsArr = response.data.data;
        for (let i = 0; i < postsArr.length; i++) {
          let likedByCurrentUser = false;
          for (
            let j = 0;
            j < postsArr[i].attributes.likedByUsers.data.length;
            j++
          ) {
            if (
              loggedInUser.user.id ===
              postsArr[i].attributes.likedByUsers.data[j].id
            ) {
              likedByCurrentUser = true;
              break;
            }
          }
          postsArr[i].attributes["likedByCurrentUser"] = likedByCurrentUser;
        }
        setPosts(postsArr);
      })
      .catch((error) => console.log(error.message));

      axios
      .get(`${HOSTNAME}/api/communities?populate=*`)
      .then((response) => {
        let array = response.data.data;
        let community = array.find(obj => obj.attributes.Name === community_name);
        console.log(community.attributes.coverPhoto.data.attributes.url);
        setCommunityInfo(community.attributes);
        console.log(communityInfo.coverPhoto.data.attributes.url);
      })
      .catch((error) => console.log(error.message));
  
  }, []);

  return (
    <ScrollView>
      <TopBar
        setLoggedInUser={setLoggedInUser}
        navigation={navigation}
      ></TopBar>
      {communityInfo && communityInfo.coverPhoto && (
      <Image
        style={styles.image}
        source={{ uri: communityInfo.coverPhoto.data.attributes.url }}
      />
    )}

      <View style={styles.titlecard}>
        <Text style={styles.communityTitle}>
          {communityInfo.Name}
          <Text style={[styles.communityTitle, styles.boldText]}>moms</Text>
        </Text>
        <Text style={styles.description}>
        {communityInfo.communityGuidelines}
        </Text>
      </View>

      <View>
        {posts?.length > 0 ? (
          posts.map((post, index) => {
            return (
              <View key={index}>
                <PostCard
                  navigation={navigation}
                  postInfo={post.attributes}
                ></PostCard>
              </View>
            );
          })
        ) : (
          <></>
        )}
      </View>
      <EnclosedButton title="Back" onPress={handleBack}></EnclosedButton>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  titlecard: {
    backgroundColor: "#ECECEC", //#ECECEC
    flexDirection: "column",
    //height: 100,
    paddingVertical: 10,
    width: "100%",
    marginTop: 0,
  },
  communityTitle: {
    color: "#000000",
    fontSize: 25,
    marginTop: 10,
    left: 20,
  },
  boldText: {
    fontWeight: 600,
  },
  description: {
    color: "#000000",
    fontSize: 15,
    marginLeft: 10,
    marginRight: 20,
    marginTop: 10,
    left: 10,
  },
});

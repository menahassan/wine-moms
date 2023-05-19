import {
  Text,
  ScrollView,
  Image,
  StyleSheet,
  SafeAreaView,
  View,
} from "react-native";
import TopBar from "../elements/TopBar";
import PostCard from "../elements/PostCard";

const fakePosts = require("../../modelData/posts.json");

export default function CommunityPage({ navigation, setLoggedInUser }) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser}navigation={navigation}></TopBar>
      <Image
        style={styles.image}
        source={require("../../assets/arizona_mom.jpeg")}
      />

      <View style={styles.titlecard}>
        <Text style={styles.communityTitle}>
          arizona
          <Text style={[styles.communityTitle, styles.boldText]}>moms</Text>
        </Text>
        <Text style={styles.description}>
          Welcome! arizonamoms is a community for moms located in Arizona. Here
          are our community norms:
        </Text>
        <Text style = {styles.description}> - No discrimination or harassment</Text>
        <Text style = {styles.description}> - Treat others with respect </Text>


      </View>

      <View>
        {fakePosts.map((post, index) => {
          return (
            <View key={index}>
              <PostCard navigation={navigation} postInfo={post}></PostCard>
            </View>
          );
        })}
      </View>
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
    width: '100%',
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

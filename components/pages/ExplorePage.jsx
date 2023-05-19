import { ScrollView, View } from "react-native";
import PostCard from "../elements/PostCard";
import TopBar from "../elements/TopBar";

const fakePosts = require("../../modelData/posts.json");

export default function ExplorePage({ navigation, setLoggedInUser }) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser} navigation={navigation}></TopBar>
      <View>
        {fakePosts.map((post, index) => {
          const reverseIndex = fakePosts.length - index - 1;
          return (
            <View key={reverseIndex}>
              <PostCard navigation={navigation} postInfo={fakePosts[reverseIndex]}></PostCard>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

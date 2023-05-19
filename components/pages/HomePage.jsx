import { ScrollView, View } from "react-native";
import PostCard from "../elements/PostCard";
import TopBar from "../elements/TopBar";

const fakePosts = require("../../modelData/posts.json");

export default function HomePage({ navigation, setLoggedInUser }) {
  return (
    <ScrollView>
      <TopBar setLoggedInUser={setLoggedInUser} navigation={navigation}></TopBar>
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

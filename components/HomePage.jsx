import { ScrollView,StyleSheet, Text, View } from "react-native";
import PostCard from "./PostCard";

const fakePosts = require("../modelData/posts.json");

export default function HomePage() {
  return (
    <ScrollView>
      <View style={styles.topContainer}></View>
      <View>
        {fakePosts.map((post, index) => {
          return (
            <View key = {index} >
              <PostCard postInfo={post}></PostCard>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 80,
    backgroundColor: "#845780",
  },
});

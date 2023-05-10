import { ScrollView, Text, View } from "react-native";
import PostCard from "./PostCard";

const fakePosts = require("../modelData/posts.json");

export default function HomePage() {
  return (
    <ScrollView>
      <View>
        {fakePosts.map((post, index) => {
          return (
            <View>
              <PostCard postInfo={post}></PostCard>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

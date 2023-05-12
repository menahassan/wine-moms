import { ScrollView, StyleSheet, Text, View } from "react-native";
import PostCard from "../elements/PostCard";
import TopBar from "../elements/TopBar"

const fakePosts = require("../../modelData/posts.json");

export default function HomePage() {
  return (
    <ScrollView>
      <TopBar></TopBar>
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
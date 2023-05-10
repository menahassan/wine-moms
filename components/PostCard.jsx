import { StyleSheet, Text, Image, View } from "react-native";

export default function PostCard({ postInfo }) {
  var dateDifference =
    new Date().getTime() - new Date(postInfo.timestamp).getTime();
  var daysAgo = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  var hoursAgo = Math.floor(dateDifference / (1000 * 60 * 60));
  return (
    <View style={styles.card}>
      <Text style={styles.text}>
        {postInfo.community}
        <Text style={styles.boldText}>moms</Text>
      </Text>
      {postInfo.image == "" ? (
        <></>
      ) : (
        <Image
          style={styles.image}
          source={require("../assets/wine.jpg")}
        ></Image>
      )}
      <Text style={styles.text}>{postInfo.user}</Text>
      <Text style={styles.text}>
        {daysAgo == 0
          ? `Posted ${hoursAgo} hours ago`
          : `Posted ${daysAgo} days ago`}
      </Text>
      <Text style={styles.text}>{postInfo.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBEBEB",
    height: 500,
    borderRadius: 9,
    marginTop: 20,
    marginHorizontal: 20,
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  text: {
    padding: 5,
  },
  boldText: {
    fontWeight: 600,
  },
});

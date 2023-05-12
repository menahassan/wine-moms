import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function PostCard({ postInfo }) {
  // set image dimensions
  const [dimensions, setDimensions] = useState([]);

  // get mobile window dimensions
  const win = Dimensions.get("window");

  if (postInfo.image !== "") {
    Image.getSize(postInfo.image, (width, height) => {
      setDimensions([width, height]);
    });
  }

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
          style={
            dimensions == []
              ? {
                  margin: 0,
                  padding: 0,
                  width: win.width - 40,
                  height: 0,
                }
              : {
                  margin: 0,
                  padding: 0,
                  width: win.width - 40,
                  height: dimensions[1] * ((win.width - 40) / dimensions[0]),
                }
          }
          source={{ uri: postInfo.image }}
        />
      )}
      <View style={styles.row}>
        <Text style={styles.text}>
          {postInfo.anonymous ? "Anonymous" : postInfo.user}
        </Text>
        <Text style={styles.timestamp}>
          {daysAgo == 0
            ? `Posted ${hoursAgo} hours ago`
            : `Posted ${daysAgo} days ago`}
        </Text>
      </View>
      <Text style={styles.text}>{postInfo.description}</Text>
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
  timestamp: {
    fontSize: 10,
    padding: 6,
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 13,
    padding: 6,
    paddingHorizontal: 14,
  },
  boldText: {
    fontWeight: 600,
  },
});

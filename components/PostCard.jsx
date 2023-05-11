import React, { useState, useEffect } from "react";
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
                }
              : {
                  margin: 0,
                  padding: 0,
                  width: win.width - 40,
                  height: dimensions[1] * ((win.width - 40)/dimensions[0]),
                }
          }
          source={{ uri: postInfo.image }}
        />
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
    flexDirection: "column",
    flex: 1,
    borderRadius: 9,
    marginTop: 20,
    marginHorizontal: 20,
    height: "100%",
  },
  text: {
    padding: 5,
  },
  boldText: {
    fontWeight: 600,
  },
});

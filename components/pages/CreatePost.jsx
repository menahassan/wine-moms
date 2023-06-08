import React from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Switch,
  Image,
  Button,
} from "react-native";
import TopBar from "../elements/TopBar";
import { useState } from "react";
import EnclosedButton from "../elements/EnclosedButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import DropdownComponent from "../elements/DropdownComponent";
import ToggleSwitch from "../elements/ToggleSwitch";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";
import * as FileSystem from "expo-file-system";

export default function CreatePost({
  navigation,
  setLoggedInUser,
  loggedInUser,
}) {
  const [title, onChangeTitle] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);

  const handleSelectedItemsChange = (newSelectedItems) => {
    setSelectedItems(newSelectedItems);
  };

  const handleToggleSwitch = (value) => {
    setIsEnabled(value);
  };

  const HOSTNAME = "http://localhost:1337";

  const uploadToStrapi = async () => {
    console.log(selectedImage._parts[0][1].uri);
    try {
      let uploading = await FileSystem.uploadAsync(
        `${HOSTNAME}/api/upload`,
        `${selectedImage._parts[0][1].uri}`,
        {
          uploadType: FileSystem.FileSystemUploadType.MULTIPART,
          fieldName: "files",
        }
      );
      const uploadingBody = JSON.parse(uploading.body);
      console.log(uploadingBody[0].id);
      let imageId = uploadingBody[0].id;
      axios
      .post(`${HOSTNAME}/api/posts`, {
        data: {
          anonymous: isEnabled,
          comments: {}, // Placeholder for comments, replace with appropriate data
          community: selectedItems, // Placeholder for community, replace with appropriate data
          createdByUser: loggedInUser.user, // Placeholder for createdByUser, replace with appropriate data
          description: description,
          image: selectedImage ? true : false,
          imageLink: imageId, // Placeholder for imageLink, replace with appropriate data
          likedByUsers: {}, // Placeholder for likedByUsers, replace with appropriate data
          timestamp: new Date(),
        },
      })
      .then((response) => {
        console.log("Post uploaded");
      })
      .catch((error) => {
        console.log("An error occurred:", error.message);
      });
      return uploading;
    } catch (error) {
      console.log("Error", error);
      return error;
    }
  };

  const handlePost = () => {
    uploadToStrapi();
  };

  const handleImageUpload = async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (!permissionResult.granted) {
        alert("Permission to access camera roll is required!");
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        const formData = new FormData();
        formData.append("files", {
          uri: result.assets[0].uri,
          type: "image/jpeg", // Modify the type if needed
          name: "image.jpg", // Modify the name if needed
        });
        console.log(result.uri);
        console.log(formData._parts[0][1].uri);
        setSelectedImage(formData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAwareScrollView>
      <TopBar
        navigation={navigation}
        setLoggedInUser={setLoggedInUser}
      ></TopBar>
      <View style={styles.name}>
        <DropdownComponent
          selectedItems={selectedItems}
          onSelectedItemsChange={handleSelectedItemsChange}
        />
      </View>
      <View style={styles.picture}>
        <Text onPress={handleImageUpload} style={styles.pictureText}>
          Upload Picture...
        </Text>
        {selectedImage && (
          <Image
            source={{ uri: selectedImage._parts[0][1].uri }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </View>
      <TextInput
        style={styles.description}
        onChangeText={onChangeDescription}
        placeholder="Write Text Here"
        multiline={true}
        numberOfLines={10}
        textAlignVertical="top"
        value={description}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 110,
        }}
      >
        <ToggleSwitch isEnabled={isEnabled} onToggle={handleToggleSwitch} />
      </View>

      <View style={styles.button}>
        <Text style={styles.communityGuideline}>
          {" "}
          By posting, I am agreeing to the community guidelines
        </Text>
        <EnclosedButton title="Post" onPress={handlePost}></EnclosedButton>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EFECEC",
    color: "#8F8F8F",
    borderColor: "#8F8F8F",
    borderRadius: 7,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#8F8F8F",
    margin: 7,
  },
  picture: {
    fontSize: 13,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EFECEC",
    marginTop: 10,
  },
  pictureText: {
    color: "#845780",
  },
  description: {
    margin: 20,
    color: "#8F8F8F",
    fontSize: 17,
  },
  button: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    width: "100%",
  },
  communityGuideline: {
    margin: 20,
    color: "#8F8F8F",
    fontSize: 15,
  },
});

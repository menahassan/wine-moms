import React from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, Switch} from "react-native";
import TopBar from "../elements/TopBar";
import { useState} from "react";
import EnclosedButton from "../elements/EnclosedButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropdownComponent from '../elements/DropdownComponent';
import ToggleSwitch from '../elements/ToggleSwitch'

export default function CreatePost({ navigation, setLoggedInUser }) {
  const [title, onChangeTitle] = React.useState("");
  const [description, onChangeDescription] = React.useState("");

  const handlePost = () => {
    navigation.navigate('Home')
  };

  return (
    <KeyboardAwareScrollView>
      <TopBar navigation={navigation} setLoggedInUser={setLoggedInUser}></TopBar>
      <View style={styles.name}>
       <DropdownComponent/>
      </View>
      <View style={styles.picture}>
        <Text style={styles.pictureText}>Upload Picture...</Text>
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

      <View style = {{alignItems: 'center', justifyContent: 'center', marginTop: 110}}>
        <ToggleSwitch /> 
      </View>

      <View style={styles.button}>
        <Text style = {styles.communityGuideline}> By posting, I am agreeing to the community guidelines
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end', 
    width: '100%',
  },
  communityGuideline:{
    margin: 20,
    color: "#8F8F8F",
    fontSize: 15,
  }
});


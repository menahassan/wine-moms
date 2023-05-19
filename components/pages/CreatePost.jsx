import React from "react";
import { SafeAreaView, Text, StyleSheet, View, TextInput, Switch} from "react-native";
import TopBar from "../elements/TopBar";
import { useState} from "react";
import EnclosedButton from "../elements/EnclosedButton";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropdownComponent from '../elements/DropdownComponent';

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
      <View style={styles.button}>
        <EnclosedButton title="Post" onPress={handlePost}></EnclosedButton>
      </View>

      

        <View style = {styles.switchView}>
          <Switch/>
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
    width: 80,
    margin: 10,
    marginLeft: "auto",
    top: 100,
  },
  switchView: {
    flex: 1, 
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 20,
    marginLeft: 10,
    backgroundColor: '#D3D3D3',
    height: 40,
    width: '95%',
    padding: 5,
    borderRadius: 8
  },
  SwitchTitle:{
    fontSize: 17,
    color: '#7f7f7f',
  },
});


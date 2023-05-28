import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
} from "react-native";
import EnclosedButton from "../elements/EnclosedButton";
import { useState } from "react";
import TopBar from "../elements/TopBar";
import DropdownComponent from "../elements/DropdownComponent";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

const RegisterPage = ({ setLoggedInUser }) => {
  const [firstname, onChangeFirstname] = React.useState("");
  const [lastname, onChangeLastname] = React.useState("");
  const [email, onChangeEmail] = React.useState("");
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [description, onChangeDescription] = React.useState("");
  const [selectedItems, setSelectedItems] = useState([]);

  const HOSTNAME = "http://localhost:1337";

  const handleRegister = () => {
    // send inputted data from user to database
    axios
      .post(`${HOSTNAME}/api/auth/local/register`, {
        username: username,
        email: email,
        password: password,
        firstName: firstname,
        lastName: lastname,
        description: description,
        communities: selectedItems
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        console.log("An error occurred:", error.message);
      });
      console.log(selectedItems)
    // Eventuall have invalid login logic
    setLoggedInUser(username);
  };

  return (
    <SafeAreaView flex="1" backgroundColor="#845780">
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Text style={styles.makeaccount}>Let's Make An Account!</Text>
          <Text style={styles.title}>
            wine
            <Text style={styles.boldTitle}>moms</Text>
          </Text>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          ></Image>
          <TextInput
            style={styles.input}
            onChangeText={onChangeFirstname}
            placeholder="firstname"
            value={firstname}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeLastname}
            placeholder="lastname"
            value={lastname}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            onChangeText={onChangeEmail}
            placeholder="email"
            value={email}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            onChangeText={onChangeUsername}
            placeholder="username"
            value={username}
          />
          <TextInput
            autoCapitalize="none"
            style={styles.input}
            onChangeText={onChangePassword}
            placeholder="password"
            value={password}
          />
          <TextInput
            autoCapitalize="none"
            multiline
            style={styles.largeInput}
            onChangeText={onChangeDescription}
            placeholder="description"
            value={description}
          />
          <DropdownComponent
            setSelectedItems={setSelectedItems}
            selectedItems={selectedItems}
          />
          <EnclosedButton
            title="Register"
            onPress={handleRegister}
          ></EnclosedButton>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  makeaccount: {
    marginTop: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  container: {
    backgroundColor: "#845780",
    flex: 1,
    alignItems: "center",
  },
  logo: {
    height: 100,
    width: 100,
  },
  title: {
    marginTop: 20,
    color: "white",
    fontSize: 40,
  },
  boldTitle: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EFECEC",
    color: "#8F8F8F",
    borderColor: "#8F8F8F",
    borderRadius: 7,
  },
  buttonContainer: {
    backgroundColor: "#694066",
    borderRadius: 7,
    padding: 2,
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
  register: {
    color: "white",
    fontWeight: "bold",
  },
  largeInput: {
    height: 70,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#EFECEC",
    color: "#8F8F8F",
    borderColor: "#8F8F8F",
    borderRadius: 7,
  },
});

export default RegisterPage;

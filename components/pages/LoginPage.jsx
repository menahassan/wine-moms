import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Text, Image } from "react-native";
import EnclosedButton from "../elements/EnclosedButton";
import { useState, useEffect } from "react";
import axios from "axios";

const LoginPage = ({ navigation, setLoggedInUser }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const HOSTNAME = "http://localhost:1337";

  const handleLogin = () => {
    // user can login with either email or username and password
    axios
      .post(`${HOSTNAME}/api/auth/local`, {
        identifier: username,
        password: password,
      })
      .then((response) => {
        console.log("User profile", response.data.user);
        //token is used to access data that only an authorized user can access
        console.log("User token", response.data.jwt);
        //sets loggedInUser with user info and access token
        setLoggedInUser({ user: response.data.user, token: response.data.jwt });
      })
      .catch((error) => {
        console.log("An error occurred:", error.response);
      });
  };

  const handleRegisterRedirect = () => {
    navigation.navigate("Register");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        wine
        <Text style={styles.boldTitle}>moms</Text>
      </Text>
      <Image
        source={require("../../assets/logo.png")}
        style={styles.logo}
      ></Image>
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
      <EnclosedButton title="Login" onPress={handleLogin}></EnclosedButton>
      <Text style={styles.register} onPress={handleRegisterRedirect}>
        Don't Have An Account?
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
});

export default LoginPage;

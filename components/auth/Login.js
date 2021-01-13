import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  function onSignIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <View>
      <TextInput
        placeholder="name"
        onChangeText={(name) => setname(name)}
      ></TextInput>{" "}
      <TextInput
        placeholder="email"
        onChangeText={(email) => setemail(email)}
      ></TextInput>{" "}
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      ></TextInput>
      <Button
        onPress={() => {
          onSignIn();
        }}
        title="SignIn"
      />
    </View>
  );
};

export default LoginScreen;

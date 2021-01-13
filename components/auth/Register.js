import React, { useState } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase";

const RegisterScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  function onSignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
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
      ></TextInput>
      <TextInput
        placeholder="email"
        onChangeText={(email) => setemail(email)}
      ></TextInput>
      <TextInput
        placeholder="password"
        secureTextEntry={true}
        onChangeText={(password) => setpassword(password)}
      ></TextInput>

      <Button
        onPress={() => {
          onSignUp();
        }}
        title="SignUp"
      />
    </View>
  );
};

export default RegisterScreen;

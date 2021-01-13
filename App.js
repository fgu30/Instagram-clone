import React, { useState, useEffect } from "react";
import * as firebase from "firebase";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LandingScreen from "./components/auth/Landing";
import RegisterScreen from "./components/auth/Register";
import { View, Text } from "react-native";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYklWNJawTwLTHXMcMIlF7czVqpL5Qgxo",
  authDomain: "instagram-dev-12897.firebaseapp.com",
  projectId: "instagram-dev-12897",
  storageBucket: "instagram-dev-12897.appspot.com",
  messagingSenderId: "631218914318",
  appId: "1:631218914318:web:ab8e4e60db4588f033a85f",
  measurementId: "G-F34ZQSK922",
};

//check if there is another firebase running
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  const [loaded, setloaded] = useState(false);
  const [login, setlogin] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setloaded(true);
        setlogin(true);
      } else {
        setloaded(true);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  if (!login) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Landing">
          <Stack.Screen
            name="Landing"
            component={LandingScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text>User is logged in.</Text>
    </View>
  );
}

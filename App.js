import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContainer from './src/navigations/AppNavigation';
// import { Platform } from "react-native";
// import React, { useEffect } from "react";
// import { Button } from "react-native";



export default function App() {
  // const checkPhoneOSAndSaveToFirebase = () => {
  //   // Get the phone OS
  //   const phoneOS = Platform.OS;
  
  //   // Save the phone OS value to the Firebase database
  //   set(dbRef, phoneOS)
  //     .then(() => {
  //       console.log("Phone OS saved to Firebase database:", phoneOS);
  //     })
  //     .catch((error) => {
  //       console.error("Error saving phone OS to Firebase database:", error);
  //     });
  // };
  // function MyComponent() {
  //   const handleButtonPress = () => {
  //     checkPhoneOSAndSaveToFirebase();
  //   };
  
  //   return (
  //     <Button name="Check Phone OS" onPress={handleButtonPress} />
  //   );
  // }
    
  return (
    
    
    
     <AppContainer />
     
     
  );
}

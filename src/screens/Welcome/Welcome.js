import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useLayoutEffect, useState,  } from "react";

import { StyleSheet, Text, View, TouchableOpacity, TextInput , Image} from 'react-native';
import TextField from '../../components/Button/TextField';
import PasswordField from '../../components/Button/PasswordField';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import { getDatabase, ref, set } from "firebase/database";

// const db = getDatabase(app); 
// const dbRef = ref(db);



export default function Welcome({ navigation }) {
    const[email, setEmail]=useState('');
    const[password, setPassword]=useState('');
    const auth = getAuth()
    const login=( )=>{
        console.log(email,password)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
         navigation.navigate('HomeScreen');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage)
        });
        
      
    }
    // useEffect(() => {
    //     const screenName = "Welcome"; // Set the screen name to 'Welcome'
    
    //     set(ref(dbRef, "userScreen"), screenName)
    //       .then(() => {
    //         console.log("Firebase value updated successfully");
    //       })
    //       .catch((error) => {
    //         console.error("Error updating Firebase value: ", error);
    //       });
    //   }, []);
    
    const handleEmailChange = (text) => {
        setEmail(text);
      };
      const handlePasswordChange = (text) => {
        setPassword(text);
      };
      
    return (
       
        <View style={styles.container}>
            <Image style ={{ marginTop: 30, marginBottom: 50, width:'68%',height:250 ,borderRadius:10 }}  source={require("../../../assets/image3.png")} ></Image>
            
            <View style={{ width: '100%', marginBottom: 50 }}>
                <TextField place={ 'E-mail'} change={handleEmailChange}  >
                   
                     </TextField>
            </View>
            <PasswordField change={handlePasswordChange} place={'Password'}></PasswordField>
            <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={{ color: 'grey', fontSize: 12, marginLeft: 180 }}> Forget password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor: "transparent", width: "80%", height: 60, marginBottom: 10,
                borderRadius: 30, justifyContent: 'center', alignItems: 'center', marginTop: 12, borderWidth:2, borderColor:'aquamarine'
            }} onPress={() => { 
                login()
                // navigation.navigate('Home')
                 }} >
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}> Login  </Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }} onPress={() => { navigation.navigate("Signup") }}>
                <Text style={{ color: 'grey', fontWeight: 'bold', fontSize: 15 }}> or Signup with</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{
                flex: 0.7, justifyContent: 'flex-end',
                alignItems: 'baseline',
            }}  >

                <Text style={{ color: 'grey', fontSize: 15, }}>New on Receptoria? Signup now </Text>
            </TouchableOpacity>



        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
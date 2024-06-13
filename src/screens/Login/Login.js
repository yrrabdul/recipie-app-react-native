import React, { useLayoutEffect } from "react";
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Button from '../../components/Button/Button';



export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
        
        <View style={{ flex:0.7,marginBottom:50 ,width:'90%' ,justifyContent:'center',alignItems:'center' }}>
        <Text style={ styles.text}> Receptoria</Text> 
        <Image style ={{ marginTop: 10, width: 250,height:230 ,borderRadius:10,}} source={require("../../../assets/image1.png")} ></Image>
        <Text style={{marginLeft:10, fontSize:19,fontWeight:'bold'}}>Welcome!</Text> 
        <Text style={{marginLeft:10, fontSize:15, color:'grey',marginTop:5}}>Come join us now </Text> 
        <Text style={{marginLeft:10, fontSize:15, color:'grey'}}>Create an account or login </Text>
        
        </View>
          
        <TouchableOpacity style={{ backgroundColor: "transparent", width: "70%", height: 60,marginBottom:10, 
            borderRadius: 30, justifyContent:'center',alignItems:'center' , borderColor:'aquamarine' ,borderWidth:2}} onPress={()=>{navigation.navigate("Welcome")}} >
             <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20  }}> Login</Text>
            </TouchableOpacity>
            <Button name={'Sign up'}  />
            <Text style={{marginLeft:10, fontSize:12, color:'black', marginTop:30}}>Create an account or login </Text>
        
        <StatusBar style="auto" />
        
    </View>
   
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        fontSize:50,
        marginLeft:12,
        fontStyle:'italic'
        ,color:'black',
        marginBottom:5
        

        
        
        
        
    }});
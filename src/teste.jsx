import React from "react";
import { StatusBar } from 'expo-status-bar';
import {
   StyleSheet,
   Text, View,
   TextInput,
   Image,
   TouchableOpacity } from 'react-native';
import Header from "./src/Components/Header";


function PediuOndeLogin() {
  return (
    <View>
    <Image style={{
      width:80,
      height:80,
      borderRadius:20,
    }} source={{
      uri: "https://github.com/Jherrerocavadas.png"
    }}
    />
    <TouchableOpacity>
      <View style={styles.loginbuttons}>
      <Text> Cadastre-se </Text>
      </View>
    </TouchableOpacity>

    </View>
  )
}


export default function App() {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  return (
    <View style={styles.container}>
      <Header/>
      <PediuOndeLogin/>
      <Text>Opa</Text>



      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="placeholder bacanudo"
        keyboardType="text"
      />
      <Text>O número digitado é: {number}</Text>


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

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  loginbuttons: {
    height:50,
    width:225,
    backgroundColor:"orange",
    borderRadius:30,
    alignItems: "center",
    justifyContent: "center",
  },
});

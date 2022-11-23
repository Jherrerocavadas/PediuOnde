import React, {useState} from "react";
import {View, TextInput } from 'react-native';


export function YourMessages() {

  const [texto, setTexto] = useState("Texto") //Teste
  const yourMessage = {
      container:{
      height:60,
      width:180,
      margin: 5,
      padding:5,
      backgroundColor:"white",
      borderWidth:1.5,
      borderRadius:10,
      borderColor: "orange",
      alignSelf:"flex-start"
    },
    textbox:{
      fontSize: 15,
      color: "black",
    },

  };

  return (
    <View style={yourMessage.container}>
      <TextInput
        style={yourMessage.textbox}
        onChangeText={setTexto}
        value={texto}
        editable={false}
        placeholder= "Lorem Ipsum is simply"
        keyboardType="text"

      />
    </View>
  );



};

export function OtherMessages() {

  const [texto, setTexto] = useState("Texto") //Teste

  const otherMessage = {
      container:{
      height:60,
      width:180,
      margin: 5,
      padding:5,
      backgroundColor:"orange",
      borderWidth:1.5,
      borderRadius:10,
      borderColor: "orange",
      alignSelf:"flex-end"
    },
    textbox:{
      fontSize: 15,
      color: "white",
    },
  };

  return (

    <View style={otherMessage.container}>
      <TextInput
        style={otherMessage.textbox}
        onChangeText={setTexto}
        value={texto}
        editable={false}
        placeholder= "Lorem Ipsum is simply"
        keyboardType="text"

      />
    </View>
  );
};

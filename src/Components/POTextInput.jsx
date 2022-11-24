import React from "react";
import {View, TextInput } from 'react-native';


export default function POTextInput(
    {valor, setter, placeholderText = "", tipoInput, maxInput, icone, posIcone, isTextoSeguro=false}
  ) {
    const input = {
      height:30,
      width:350,
      margin: 15,
      fontSize: 20,
      fontWeight: "bold",
      color:"gray",
      borderBottomColor: 'black',
      borderBottomWidth: 2,
      alignItems: "center",
      justifyContent: "center",
  };

    const error = {
      height:30,
      width:350,
      margin: 15,
      fontSize: 20,
      color:"red",
      borderBottomColor: '#000',
      borderBottomWidth: 1,
      alignItems: "center",
      justifyContent: "center",
  };

  return (

    <TextInput
      style={input}
      onChangeText={setter}
      value={valor}
      error = {error}
      textColor = "gray"
      activeUnderlineColor= "red"
      placeholder= {placeholderText}
      keyboardType={tipoInput}
      maxLength= {maxInput}

      secureTextEntry = {isTextoSeguro}
      //Colocar as máscaras de input
      //Colocar esquema para alternar a máscara de senha
    />
  );
}

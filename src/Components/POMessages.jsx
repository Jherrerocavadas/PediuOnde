import React, {useState} from "react";
import {View, TextInput, Text } from 'react-native';

export function VendedorMessages( { texto } ) {

  const vendedorMessage = {
      container:{
      maxWidth:180,
      minWidth:50,
      margin: 5,
      paddingVertical:5,
      paddingHorizontal:10,
      backgroundColor:"white",
      borderWidth:1.5,
      borderRadius:10,
      borderBottomLeftRadius: 0,
      borderColor: "#FF881D",
      alignSelf:"flex-start",
      alignItens:'center'
    },
    textbox:{
      fontSize: 15,
      color: "black",
    },

  };

  return (
    <View style={vendedorMessage.container}>
      <Text style={vendedorMessage.textbox}>{texto}</Text>
    </View>
  );

};

export function YourMessages( { texto } ) {

  const yourMessage = {
      container:{
      width:180,
      margin: 5,
      paddingVertical:5,
      paddingHorizontal:10,
      backgroundColor:"#FF881D",
      borderWidth:1.5,
      borderRadius:10,
      borderBottomRightRadius: 0,
      borderColor: "#FF881D",
      alignSelf:"flex-end",
      alignItens:'center',
      justifyContent:'center',
    },
    textbox:{
      fontSize: 15,
      color: "white",
    },
  };

  return (

    <View style={yourMessage.container}>
      <Text style={yourMessage.textbox}>{ texto }</Text>
    </View>
  );
};

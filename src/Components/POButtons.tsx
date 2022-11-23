import React from "react";
import {View, Text, TouchableOpacity } from 'react-native';
{/*import POText from "./";*/}

export default function POButtons({cor="orange", texto, textColor="white", funcOnPress}) {
  const loginbuttons = {
    height:60,
    width:350,
    margin: 15,
    backgroundColor:cor,
    borderRadius:30,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: 'black',

  }


  const loginText = {
    color: textColor,
    fontSize: 20,
  }
  return (
    <TouchableOpacity activeOpacity={.5} onPress={funcOnPress}>
      <View style={loginbuttons}>
      <Text style={loginText}> {texto} </Text>
      </View>
    </TouchableOpacity>
  );
}

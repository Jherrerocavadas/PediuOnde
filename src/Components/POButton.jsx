import React from "react";
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const styledBtn = StyleSheet.create({
  height:50,
  width: 350,
  margin: 15,
  borderRadius: 30,
  alignItems: "center",
  justifyContent: "center",
  elevation: 5,
  shadowColor: 'black',
  color: 'black'
})

const orangeBtn = {
  ...styledBtn,
  backgroundColor: '#FF881D'
}

const whiteBtn = {
  ...styledBtn,
  backgroundColor:'#fff',
  borderWidth:2,
  borderColor:'#FF881D'
}

export function POButton({styleBtn, text}) {

  const fontStyle = StyleSheet.create({
    fontSize:20,
    color:'black',
    zIndex: 10
  })

  if (styleBtn === 'white'){
    return (
      <TouchableOpacity activeOpacity={.5}>
        <View style={whiteBtn}>
          <Text style={fontStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity activeOpacity={.5}>
      <View style={orangeBtn}>
        <Text style={{ fontSize:20, color:'white' }}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
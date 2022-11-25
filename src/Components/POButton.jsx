import React from "react";
import {View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export function POButton({styleBtn, text, BtnWidth, BtnHeight}) {
  
  if(typeof BtnWidth != "number"){
    BtnWidth = 350
  }

  if(typeof BtnHeight != "number"){
    BtnHeight = 50
  }

  const styledBtn = StyleSheet.create({
    height:BtnHeight,
    width: BtnWidth,
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
  const fontStyle = StyleSheet.create({
    fontSize:20,
    color:'black',
    fontFamily:'PoppinsRegular',
    marginTop:3
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
        <Text style={{ fontSize:20, color:'white', fontFamily:'PoppinsRegular', marginTop:5}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


export function POButton({
  styleBtn,
  text,
  BtnWidth=180,
  BtnHeight=55,
  fontSize=20,
  shadow=true,
  funcButton}){

    const shadowBtn = {
      elevation: 5,
      shadowColor: 'black'
    }

  if(shadow) {
    var styledBtn = StyleSheet.create({
      height:BtnHeight,
      width: BtnWidth,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      color: 'black',
      backgroundColor:'white',
      ...shadowBtn
    })
  } else{
    var styledBtn = StyleSheet.create({
      height:BtnHeight,
      width: BtnWidth,
      borderRadius: 30,
      alignItems: "center",
      justifyContent: "center",
      color: 'black',
      backgroundColor:'white',
  })
  }



  const orangeBtn = {
    ...styledBtn,
    backgroundColor: '#FF881D'
  }

  const whiteBtn = {
    ...styledBtn,
    backgroundColor:'white',
    borderWidth:2,
    borderColor:'#FF881D'
  }
  const fontStyle = StyleSheet.create({
    fontSize:fontSize,
    color:'black',
    fontFamily:'PoppinsRegular',
    marginTop:3
  })

  if (styleBtn === 'white'){
    return (
      <TouchableOpacity onPress={funcButton} style={{...whiteBtn}}>
        <View>
          <Text style={fontStyle}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity onPress={funcButton} style={orangeBtn}>
      <View>
        <Text style={{ fontSize:fontSize, color:'white', fontFamily:'PoppinsRegular', marginTop:5}}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

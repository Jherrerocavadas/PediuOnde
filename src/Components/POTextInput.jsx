import React from "react";
import {View, TextInput } from 'react-native';
import { POText } from "./POText";


export function POInputCadastro(
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

export function POInputProduct({title, placeholderInput='Digite aqui', moreLines=false, numLines=1, heightInput=50, borderRadiusInput=50, alignCenter='center'}){

  return(
    <>
      <POText size={18} weight={'Bold'}>{title}</POText>
      <View>
        <TextInput style={{width:'100%', color:'black',paddingVertical:10, paddingHorizontal:20, height:heightInput, borderWidth:2, borderColor:'#FF881D', borderRadius:borderRadiusInput}} 
            placeholder={placeholderInput}
            multiline = {moreLines}
            numberOfLines={numLines}
            keyboardType={'default'}
            textAlignVertical={alignCenter}
            />

      </View>
    </>
  )
}
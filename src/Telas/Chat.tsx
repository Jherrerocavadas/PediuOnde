import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import {HeaderLogo, HeaderChat} from "../Components/Header";
import POButtons from "../Components/POButtons";
import POText from "../Components/POText";
import {YourMessages, OtherMessages} from "../Components/POMessages";
import {FooterChat} from "../Components/Footer";



export default function Chat() {
const empresa = "Bolos da Meire" //Teste
const assunto = "Referente ao Bolo de Casamento" //Teste
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/bgimage.png')} resizeMode="cover" style={styles.bgimage}>
      <HeaderChat empresa={empresa} assunto={assunto}/>
      {/*Fazer um for aqui para exibir as mensagens de uma API/Banco de dados*/}
      <YourMessages/>
      <YourMessages/>
      <OtherMessages/>
      <YourMessages/>
      <OtherMessages/>
      <OtherMessages/>
      <FooterChat/>

      </ImageBackground>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",

  },

  bgimage:{
    width: 350,
    height: 350,
    flex: 0,
    alignItems: "center",
    justifyContent: "center"
  },
});

import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import {HeaderLogo, HeaderChat} from "../Components/Header";
import POButtons from "../Components/POButton";
import POText from "../Components/POText";
import {YourMessages, VendedorMessages} from "../Components/POMessages";
import {FooterChat} from "../Components/Footer";
import SafeArea from "../Components/SafeArea";


export default function Chat() {
const empresa = "Bolos da Meire" //Teste
const assunto = "Referente ao Bolo de Casamento" //Teste
  return (
    <SafeArea>
      <HeaderChat empresa={empresa} assunto={assunto}/>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/bgimage.png')} resizeMode="cover" style={styles.bgimage}>
        </ImageBackground>{/*Fazer um for aqui para exibir as mensagens de uma API/Banco de dados*/}
        <YourMessages texto="Eae dona meire"/>
        <YourMessages texto="Tu pode meter uma aranha de brinquedo no bolo????"/>
        <VendedorMessages texto='Opa'/>
        <VendedorMessages texto='Mas ai é mó paia né?'/>
        <YourMessages texto="Lgc q nn pô, imagina q massa, a rapaziada morde o bolo e tem a porra de uma ARANHAKKKKKKKKKKKKKKK, mt foda"/>
        <VendedorMessages texto='C tem autismo irmão???? Poheéssa q tu tá falando? Pqp só fala merda'/>
        <YourMessages texto="foda-sekkkk"/>
        <YourMessages texto="Pai paga, pai manda"/>
      </View>
      <FooterChat/>
    </SafeArea>

  );
}



const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
    marginTop: 20,
    alignItems: "center",
  },

  bgimage:{
    position: 'absolute',
    marginTop: '25%',
    width: 350,
    height: 350,
    flex: 1,
  },
});

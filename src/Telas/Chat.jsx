import React, {useState} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground} from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import {HeaderLogo, HeaderChat} from "../Components/Header";
import POButtons from "../Components/POButton";
import POText from "../Components/POText";
import {YourMessages, VendedorMessages} from "../Components/POMessages";
import {FooterChat} from "../Components/Footer";
import SafeArea from "../Components/SafeArea";


export default function Chat() {
const [msg, setMsg] = useState([])

const empresa = "Bolos da Meire" //Teste
const assunto = "Referente ao Bolo de Casamento" //Teste
  return (
    <SafeArea>
      <HeaderChat empresa={empresa} assunto={assunto}/>
      <View style={styles.container}>
        <ImageBackground source={require('../../assets/bgimage.png')} resizeMode="cover" style={styles.bgimage}>
        </ImageBackground>{/*Fazer um for aqui para exibir as mensagens de uma API/Banco de dados*/}
      </View>
      {msg}
      <FooterChat functionSetState={setMsg} variableSetState={msg}/>
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

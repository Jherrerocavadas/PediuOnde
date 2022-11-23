import React, {useState, useContext} from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import POButtons from "../Components/POButtons";
import POTextInput from "../Components/POTextInput";
import POText from "../Components/POText";
import {POTextLink} from "../Components/POText";



export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email,setEmail] = useState("");
  const [cpf,setCpf] = useState("");
  const [senha,setSenha] = useState("");
  const [repetirSenha,setRepetirSenha] = useState("");




  return (
    <View style={styles.container}>
      <HeaderLogo/>

      <POTextInput
        style={styles.input}
        setter={setEmail}
        valor={email}
        placeholderText="Email"
        tipoInput="email-address"

      />

      <POTextInput
        style={styles.input}
        setter={setSenha}
        valor={senha}
        placeholderText="Senha"
        tipoInput="text"
        isTextoSeguro={true}
      />


      <POButtons cor="orange" texto ="Login"/>
      <POTextLink texto="Não tem uma conta?" link="Clique aqui!"/>
      </View>

  );


}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

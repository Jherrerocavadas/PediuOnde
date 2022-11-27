import React, { useState } from "react";
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

{/*---------- <Componentes personalizados> ----------*/}
import HeaderLogo from "../Components/Header";
import { POButton } from "../Components/POButton";
import {POInputProduct, POInputCadastro} from "../Components/POTextInput";
import { POTextLink } from "../Components/POText";



export default function Login() {
  const [nome, setNome] = useState("");
  const [email,setEmail] = useState("");
  const [cpf,setCpf] = useState("");
  const [senha,setSenha] = useState("");
  const [repetirSenha,setRepetirSenha] = useState("");

  return (
    <View style={ styles.container }>
      <HeaderLogo/>

      <POInputCadastro
        setter={ setEmail }
        valor={ email }
        placeholderText="Email"
        tipoInput="email-address"

      />

      <POInputCadastro
        setter={ setSenha }
        valor={ senha }
        placeholderText="Senha"
        tipoInput="text"
        isTextoSeguro={ true }
      />


      <POButton styleBtn={ "orange" } text ={"Login"}/>
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
